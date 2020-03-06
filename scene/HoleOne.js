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

    }
    create()
    {
        // Matter world bounds
        //this.matter.world.setBounds(0, 0, game.config.width, game.config.height);

        let hole = new CreateHole(
            this,
            new CreateSVG(data.holeOne).data,
            () => {
                alert("Hole Completed!")
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
