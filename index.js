const slackClient = require('./slack');
const scrapper = require('./slack/scrapper');
const elastic = require('./elasticsearch');

scrapper.scrap(slackClient, elastic);
