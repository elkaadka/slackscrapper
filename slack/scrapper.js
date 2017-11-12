let validUrl = require('valid-url');
const config = require('../config');

const init = async (elastic) => {
    try {
        await elastic.indices.create(
            {
                index: config.INDEX_NAME,
                body: {
                    mappings : {
                        post: {
                            properties: {
                                url : {
                                    type: 'string',
                                },
                                keyword_url : {
                                    type: 'string',
                                    analyzer: "keyword"
                                },
                                main_subject: {
                                    type: 'string',
                                    analyzer: "keyword"
                                }
                            }
                        }
                    }
                }
            }
        );
    } catch (err) {
        console.log(err);
    }

}

module.exports = {
    scrap: async (slackClient, elastic) => {

        init(elastic);

        let channels =  await slackClient.listChannels();
        channels.forEach(async (channel) => {
            posts = await slackClient.getHistory(channel);
            posts.forEach(async (post) => {
                if (!post.text) {
                    return;
                }
                let url = post.text.replace(/^<+|>+$/g, '');
                if (validUrl.isUri(url)){
                    try {

                       let search = await elastic.search({
                            index: config.INDEX_NAME,
                            body: {
                                query: {
                                    match: {
                                        keyword_url: url
                                   }
                               }
                            }
                        });

                       if (search.hits.total === 0) {
                           await elastic.index({
                               index: config.INDEX_NAME,
                               type: 'post',
                               body: {
                                   url: url,
                                   keyword_url: url,
                                   main_subject: channel.name
                               }
                           });
                       }
                    } catch (err) {
                        console.log(err);
                    }
                }
            });
        })
    }
}

