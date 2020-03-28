class HoleEleven extends Phaser.Scene {
    constructor()
    {
        // Set scene `key`
        super('HoleEleven');
        this.updateCallback = {'func': () => {}};
        this._holeNumber = 11;
    }

    init()
    {

    }
    preload()
    {
        let parNumber = document.querySelector(".state-info.par>span");
        parNumber.innerHTML = state.par[this._holeNumber];
        state.currentHole = this._holeNumber;
    }
    create()
    {
        // Matter world bounds
        //this.matter.world.setBounds(0, 0, game.config.width, game.config.height);

        let hole = new CreateHole(
            this,
            new CreateSVG(data.holeEleven).data,
            () => {
                //alert("HoleEleven Complete!");
                let result = state.awardStar(state, this._holeNumber);
                let banner = document.querySelector(".success-banner");
                state.setBanner(banner, "HoleEleven", result);
                state.showBanner(banner, true);
                //this.scene.start("HoleOne");
            },
            this.updateCallback
        );

        // Resize Canvas (to increase resolution)
        let canvas = document.querySelector("canvas");
        let scale = 2;
        canvas.width  = 600 * scale;
        canvas.height = 600 * scale;
    }
    update(time, delta)
    {
        this.updateCallback.func();
    }
}
