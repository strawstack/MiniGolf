class CreateHole {
    constructor(scene, svg) {
        this.scene = scene;

        // Course
        let courseElem = svg.querySelector("#course");
        let course = {
            x: parseInt(courseElem.getAttribute("x")),
            y: parseInt(courseElem.getAttribute("y")),
            width: parseInt(courseElem.getAttribute("width")),
            height: parseInt(courseElem.getAttribute("height"))
        };

        let courseGraphics = this.scene.add.graphics({
            x: course.x,
            y: course.y});

        courseGraphics.fillStyle(0x83A77D);
        courseGraphics.fillRect(
            0, // x
            0, // y
            course.width, // width
            course.height // height
        );

        // Mat
        let matElem = svg.querySelector("#mat");
        let mat = {
            x: parseInt(matElem.getAttribute("x")),
            y: parseInt(matElem.getAttribute("y")),
            width: parseInt(matElem.getAttribute("width")),
            height: parseInt(matElem.getAttribute("height"))
        };

        let matGraphics = this.scene.add.graphics({
            x: mat.x,
            y: mat.y});

        matGraphics.fillStyle(0x333333, 0.3);
        matGraphics.fillRect(
            0,
            0,
            mat.width,
            mat.height
        );

        // Hole
        let holeElem = svg.querySelector("#hole");
        let hole = {
            x: parseInt(holeElem.getAttribute("x")),
            y: parseInt(holeElem.getAttribute("y")),
            radius: parseInt(holeElem.getAttribute("width"))/2
        };

        let holeGraphics = this.scene.add.graphics({
            x: hole.x + hole.radius,
            y: hole.y + hole.radius});

        holeGraphics.fillStyle(0x555555);
        holeGraphics.fillCircle(
            0, // x
            0, // y
            hole.radius // radius
        );

        // Ball
        let ballElem = svg.querySelector("#ball");
        let ball = {
            x: parseInt(ballElem.getAttribute("x")),
            y: parseInt(ballElem.getAttribute("y")),
            radius: parseInt(ballElem.getAttribute("width"))/2
        };

        let ballGraphics = this.scene.add.graphics({
            x: mat.x + mat.width/2,
            y: mat.y + mat.height/2});

        ballGraphics.fillStyle(0xFFFFFF);
        ballGraphics.fillCircle(
            0,
            0,
            ball.radius
        );

        // Ball Matter physics
        this.scene.matter.add.gameObject(ballGraphics, {
            shape: {
                type: 'circle',
                radius: ball.radius
            }});

        // Walls
        let walls = svg.querySelectorAll(".wall");
        for (let wall of walls) {
            let d = {
                x: parseInt(wall.getAttribute("x")),
                y: parseInt(wall.getAttribute("y")),
                width: parseInt(wall.getAttribute("width")),
                height: parseInt(wall.getAttribute("height"))
            };

            // Wall Matter physics
            this.scene.matter.add.rectangle(
                d.x + d.width/2, d.y + d.height/2, d.width, d.height,
                {
                    "isStatic": true,
                    "restitution": 1
                }
            );
        }

        // TODO - Remove this. Used for testing physics
        this.scene.input.on("pointerup", function(pointer) {

            // Ball position
            let bx = ballGraphics.body.position.x + ball.radius;
            let by = ballGraphics.body.position.y + ball.radius;

            let x = pointer.upX;
            let y = pointer.upY;

            let dx = x - bx;
            let dy = y - by;

            let n = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
            let nx = dx / n;
            let ny = dy / n;

            let mag = n / 300;
            if (mag > 1) {
                mag = 1;
            }

            ballGraphics.applyForce({
                x: nx * mag,
                y: ny * mag
            });
        }, this);

        ballGraphics.setFriction(0.01);
        ballGraphics.setFrictionAir(0.01);
        ballGraphics.setBounce(0.8);
        ballGraphics.setDensity(0.04);
    }
}
