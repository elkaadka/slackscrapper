const config = require('../config');

const channelsClient = require('./channels');
const usersClient = require('./users');

let WebClient = require('@slack/client').WebClient;
let token = config.SLACK_TOKEN || '';
const webClient = new WebClient(token);

module.exports = {
    listChannels:     ()     => channelsClient.list(webClient),
    getHistory:    (channel) => channelsClient.history(webClient, channel),
    listUsers:    (channel) => usersClient.list(webClient)
}
