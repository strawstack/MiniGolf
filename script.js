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
                showBody: false,
                showStaticBody: false 
            }
        }
    },
    scene: [
        new HoleFive(config), new HoleOne(config), new HoleTwo(config), new HoleThree(config),
        new HoleFour(config)
    ]
};

var game = new Phaser.Game(config);
