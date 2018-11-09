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