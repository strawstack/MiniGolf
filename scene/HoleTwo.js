class HoleTwo extends Phaser.Scene {
    constructor ()
    {
        // Set scene `key`
        super('HoleTwo');
        this._holeNumber = 2;
        this._ballMotion = () => {};
    }
    init()
    {

    }
    preload ()
    {
        let parNumber = document.querySelector(".state-info.par>span");
        parNumber.innerHTML = state.par[this._holeNumber];
        state.currentHole = this._holeNumber;
    }
    create ()
    {

        let hole = new CreateHole(
            this,
            new CreateSVG(data.holeTwo).data,
            () => {
                //alert("HoleTwo Complete!");
                let result = state.awardStar(state, this._holeNumber, this.scene.key);
                let banner = document.querySelector(".success-banner");
                state.setBanner(banner, "HoleTwo", result);
                state.showBanner(banner, true);
                //this.scene.start("HoleThree");
            }
        );

        // Resize Canvas (to increase resolution)
        let canvas = document.querySelector("canvas");
        let scale = 2;
        canvas.width  = 600 * scale;
        canvas.height = 600 * scale;
    }
    update(time, delta)
    {
        this._ballMotion();
    }
}
