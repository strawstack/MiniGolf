var config = {
    type: Phaser.AUTO,
    width: 1200,
    height: 1200,
    backgroundColor: "#ABC8A6", // game background color
    physics: {
        default: 'matter',
        matter: {
            gravity: {x: 0, y: 0},
            debug: {
                showBody: false, //true,
                showStaticBody: false //true
            }
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    //this.load.svg('HoleOne', 'img/HoleOne.svg');
}

function create ()
{
    // Matter world bounds
    //this.matter.world.setBounds(0, 0, game.config.width, game.config.height);

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
    this.matter.add.fromVertices(50, 100, vert);

    // Create wall
    this.matter.add.rectangle(200, 100, 50, 50);

    // Create ball
    let ball = this.matter.add.circle(300, 300, 10);
    */

    // HoleOne ref image
    //let h1 = this.add.image(600, 600, 'HoleOne');

    let holeOne = new CreateHole(
        this,
        new CreateSVG(data.holeOne).data
    );

    // Resize Canvas (to increase resolution)
    let canvas = document.querySelector("canvas");
    let scale = 2;
    canvas.width  = 600 * scale;
    canvas.height = 600 * scale;
}

function update() {

}
