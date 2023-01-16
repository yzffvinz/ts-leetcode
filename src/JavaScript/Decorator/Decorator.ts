// declare const fn: CallableFunction;

const throttle = (duration: number) => {
    let prev = new Date().getTime();
    return (target, name, descriptor) => {
        const func = descriptor.value;
        if (typeof func === 'function') {
            descriptor.value = function (...args) {
                const now = new Date().getTime();
                if (now - prev > duration) {
                    func.apply(this, args);
                    prev = new Date().getTime();
                }
            };
        }
    };
};

throttle;

// class Util {
//     @throttle(50)
//     scroll() {
//     }
// }