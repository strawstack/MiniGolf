class HoleFive extends Phaser.Scene {
    constructor()
    {
        // Set scene `key`
        super('HoleFive');
        this.updateCallback = {'func': () => {}};
        this._holeNumber = 5;
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
            new CreateSVG(data.holeFive).data,
            () => {
                //alert("HoleFive Complete!");
                let result = state.awardStar(state, this._holeNumber, this.scene.key);
                let banner = document.querySelector(".success-banner");
                state.setBanner(banner, "HoleFive", result);
                state.showBanner(banner, true);
                //this.scene.start("HoleSix");
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
        this._ballMotion();
    }
}
