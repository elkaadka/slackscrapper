let validUrl = require('valid-url');

module.exports = {
    scrap: async (slackClient) => {
        let users =  await slackClient.listUsers();
        console.log(users);
        let channels =  await slackClient.listChannels();
        channels.forEach(async (channel) => {
            posts = await slackClient.getHistory(channel);
            posts.forEach((post) => {
                let url = post.text.replace(/^<+|>+$/g, '')
                if (validUrl.isUri(url)){
                    console.log(post);
                }
            });
        })
    }
}

