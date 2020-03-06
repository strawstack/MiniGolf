class HoleTwo extends Phaser.Scene {
    constructor ()
    {
        // Set scene `key`
        super('HoleTwo');
    }
    init()
    {

    }
    preload ()
    {

    }
    create ()
    {

        let hole = new CreateHole(
            this,
            new CreateSVG(data.holeTwo).data,
            () => {
                alert("Hole Completed!")
                //this.scene.start("HoleTwo");
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

    }
}
