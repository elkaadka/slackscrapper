class indices {
    constructor(client) {
        this.client = client;
    }

    create(params) {
        return new Promise((resolve, reject) => {
            this.client.indices.create(
                params,
                function(err, success) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(success)
                    }
                }

            );
        });
    }

    delete(params) {
        return new Promise((resolve, reject) => {
            this.client.indices.delete(
                params,
                function(err, success) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(success)
                    }
                }

            );
        });
    }
}

module.exports = indices;