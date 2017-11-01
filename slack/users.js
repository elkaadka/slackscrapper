module.exports.list = (client) => {
    return new Promise((resolve, reject) => {
        client.users.list(function(err, info) {
            if (err) {
                reject(err);
            } else {
                resolve(info.members)
            }
        });
    });
}