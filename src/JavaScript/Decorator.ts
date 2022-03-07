const throttle = time => {
    let prev = new Date();
    return (target, name, descriptor) => {
        const func = descriptor.value;
        if (typeof func === 'function') {
            descriptor.value = function (...args) {
                const now = new Date();
                if (now - prev > wait) {
                    fn.apply(this, args);
                    prev = new Date();
                }
            };
        }
    };
};

class Util {
    @throttle(50)
    scroll() {
    }
}