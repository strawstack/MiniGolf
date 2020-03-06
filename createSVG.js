class CreateSVG {
    constructor(svgString) {
        let parser = new DOMParser();
        this.data = parser.parseFromString(svgString, "image/svg+xml");
    }
}
