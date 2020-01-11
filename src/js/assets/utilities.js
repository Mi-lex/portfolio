export const debounce =  {
    timer: null,
    start: function (action, duration) {
        if (this.timer > 0) {
            clearTimeout(this.timer);
        }
    
        this.timer = setTimeout(() => {
            action();
        }, duration);
    }
}

export const easeOut = (currentTime, startValue, valueChange, duration) => {
    currentTime /= startValue;
    currentTime--;
    return valueChange * (Math.pow(currentTime, 3) + 1) + duration;
};

export const easeIn = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
};