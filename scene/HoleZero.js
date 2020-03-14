class HoleZero extends Phaser.Scene {

    // Note: This hole exists only to load global sounds
    // perform game setup and load the `index-1` scene
    // from the `config.scene` list

    constructor()
    {
        // Set scene `key`
        super('HoleZero');
    }

    init()
    {

    }
    preload()
    {
        // Global sounds for all holes
        this.load.audio('putt', 'sound/putt/click3.wav');
        this.load.audio('complete', 'sound/complete/completetask_0.mp3');
        this.load.audio('wedge', 'sound/wedge/Brick 05.wav');
        this.load.audio('water-enter', 'sound/water/398711__inspectorj__water-swirl-small-5.wav');
        this.load.audio('water-stop', 'sound/water/421184__inspectorj__water-pouring-a.wav');
        this.load.audio('sand-enter', 'sound/sand/Fantozzi-StoneR2.ogg');
        this.load.audio('sand-stop', 'sound/sand/Fantozzi-StoneL3.ogg');

        this.load.audio('wall', 'sound/wall/switch11.wav');
        this.load.audio('rock', 'sound/rock/qubodupImpactStone.ogg');
    }
    create()
    {
        // Matter world bounds
        //this.matter.world.setBounds(0, 0, game.config.width, game.config.height);

        // Unhide Canvas on start
        document.querySelector("canvas").style.opacity = 1;

        // Load first scene
        this.scene.start(config.scene[1].scene.key);

        // Resize Canvas (to increase resolution)
        let canvas = document.querySelector("canvas");
        let scale = 2;
        canvas.width  = 600 * scale;
        canvas.height = 600 * scale;

    }
    update(time, delta)
    {

    }
}
