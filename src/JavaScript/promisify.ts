type NodeCallback = (err: NodeJS.ErrnoException | null, data: any) => void;

const promisify = (func: {
    apply: NodeCallback;
}, context: any = null) => {
    return new Promise((resolve, reject) => {
        func.apply(
            context,
            function (err: NodeJS.ErrnoException, data: any) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(data);
                }
            }
        );
    });
};

module.exports = promisify;