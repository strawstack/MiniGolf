class HoleNine extends Phaser.Scene {
    constructor()
    {
        // Set scene `key`
        super('HoleNine');
        this.updateCallback = {'func': () => {}};
    }

    init()
    {

    }
    preload()
    {

    }
    create()
    {
        // Matter world bounds
        //this.matter.world.setBounds(0, 0, game.config.width, game.config.height);

        let hole = new CreateHole(
            this,
            new CreateSVG(data.holeNine).data,
            () => {
                alert("HoleNine Complete!")
                this.scene.start("HoleTen");
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
