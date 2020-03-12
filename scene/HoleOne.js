class HoleOne extends Phaser.Scene {
    constructor()
    {
        // Set scene `key`
        super('HoleOne');
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

        let hole = new CreateHole(
            this,
            new CreateSVG(data.holeOne).data,
            () => {
                alert("HoleOne Complete!")
                this.scene.start("HoleTwo");
            }
        );

        // Resize Canvas (to increase resolution)
        let canvas = document.querySelector("canvas");
        let scale = 2;
        canvas.width  = 600 * scale;
        canvas.height = 600 * scale;

        /*
        this.input.on("pointerdown", function(pointer) {

            let x = pointer.upX;
            let y = pointer.upY;
            console.log("x:", x - 100, " y:", y - 300);

        }, this); */

        /*
        // Get SVG from data
        let svg = new CreateSVG(data.testSvg).data;

        // Get path element
        let pathElem = svg.querySelector("path");

        // NOTE: For smooth shapes, a lower number of samples works better

        // Get vertices from path
        let vert = this.matter.svg.pathToVertices(pathElem, 10);

        // Create object from Verticies
        this.matter.add.fromVertices(50, 100, vert); */
    }
    update(time, delta)
    {

    }
}
