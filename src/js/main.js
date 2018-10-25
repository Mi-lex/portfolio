class FancyClass {
    constructor(fancyName) {
        this.__name = fancyName;
    }

    get fancyName() {
        return this.__name;
    }
}

const fancyInstance = new FancyClass('somethingFancy');
fancyInstance.fancyName();