let elasticsearch = require('elasticsearch');
const client = new elasticsearch.Client({
    host: 'localhost:9200',
    log: 'trace'
});

const indices = require('./indices');

/*
=let elastic_api = {
    get(target,name) {
        return new Promise((resolve, reject) => {
            client[name](params, function (err, response) {
                if (err) {
                    reject(err);
                } else {
                    resolve(response)
                }
            });
        });
    }
}

let elsatic_handler = new Proxy({},elastic_api);
 */

module.exports = {

    indices: new indices(client),

    create: (params) => {
        return new Promise((resolve, reject) => {
            client.create(params, function (err, response) {
                if (err) {
                    reject(err);
                } else {
                    resolve(response)
                }
            });
        });

    },

    index: (params) => {
        return new Promise((resolve, reject) => {
            client.index(params, function (err, response) {
                if (err) {
                    reject(err);
                } else {
                    resolve(response)
                }
            });
        });
    },

    search: (params) => {
        return new Promise((resolve, reject) => {
            client.search(params, function (err, response) {
                if (err) {
                    reject(err);
                } else {
                    resolve(response)
                }
            });
        });
    },
}