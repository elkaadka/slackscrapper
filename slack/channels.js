module.exports.list = (client) => {
    return new Promise((resolve, reject) => {
        client.channels.list(function(err, info) {
            if (err) {
                reject(err);
            } else {
                resolve(info.channels)
            }
        });
    });
}

module.exports.history = (client, channel) => {
    return new Promise((resolve, reject) => {
        client.channels.history(channel.id, function(err, info) {
            if (err) {
                reject(err);
            } else {
                resolve(info.messages)
            }
        });
    })
}