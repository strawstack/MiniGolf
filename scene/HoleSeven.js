class HoleSeven extends Phaser.Scene {
    constructor()
    {
        // Set scene `key`
        super('HoleSeven');
        this.waterCallback = {'func': () => {}};
        this._holeNumber = 7;
        this._ballMotion = () => {};
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
            new CreateSVG(data.holeSeven).data,
            () => {
                //alert("HoleSeven Complete!");
                let result = state.awardStar(state, this._holeNumber);
                let banner = document.querySelector(".success-banner");
                state.setBanner(banner, "HoleSeven", result);
                state.showBanner(banner, true);
                //this.scene.start("HoleEight");
            },
            this.waterCallback
        );

        // Resize Canvas (to increase resolution)
        let canvas = document.querySelector("canvas");
        let scale = 2;
        canvas.width  = 600 * scale;
        canvas.height = 600 * scale;
    }
    update(time, delta)
    {
        this.waterCallback.func();
        this._ballMotion();        
    }
}
