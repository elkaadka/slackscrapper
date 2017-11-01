const slackClient = require('./slack');
const scrapper = require('./src/scrapper')
scrapper.scrap(slackClient)



/*
channels.then((channels) => {
    console.log(channels);
    channels.forEach((channel) => {
        slackClient.getHistory(channel).then((posts) => {

        }).catch((err) => {
            console.log('fail', err);
        });
    })
}).catch((err) => {
    console.log('fail', err);
})

*/