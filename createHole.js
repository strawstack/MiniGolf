class CreateHole {
    constructor(scene, svg, onComplete) {
        this.scene = scene;

        // Course
        let courseElems = svg.querySelectorAll(".course");

        for (let courseElem of courseElems) {
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
        }

        // Mat
        let matElem = svg.querySelector(".mat");
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
        let holeElem = svg.querySelector(".hole");
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

        this.scene.matter.add.gameObject(holeGraphics, {
            shape: {
                type: 'circle',
                radius: hole.radius
            },
            label: 'hole',
            isSensor: true // trigger events but don't react
        });

        // Ball
        let ballElem = svg.querySelector(".ball");
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
            },
            label: 'ball'
        });

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

        // Wedge
        let wedgeElems = svg.querySelectorAll(".wedge");
        for (let wedgeElem of wedgeElems) {
            let wedge = {
                x: parseInt(wedgeElem.getAttribute("x")),
                y: parseInt(wedgeElem.getAttribute("y")),
                width: parseInt(wedgeElem.getAttribute("width")),
                height: parseInt(wedgeElem.getAttribute("height"))
            };

            let wedgeGraphics = this.scene.add.graphics({
                x: wedge.x,
                y: wedge.y
            });

            // Wedge Matter physics
            let b1 = this.scene.matter.add.gameObject(wedgeGraphics, {
                shape: {
                    type: 'fromVertices',
                    verts: [
                        {x: 0, y: 0},
                        {x: wedge.width, y: 0},
                        {x: wedge.width, y: wedge.height}
                    ]
                },
                label: 'wedge',
                isStatic: true,
                restitution: 1
            });

            let ox = b1.body.centerOffset.x;
            let oy = b1.body.centerOffset.y;

            wedgeGraphics.setPosition(
                wedge.x + ox,
                wedge.y + oy,
            );

            wedgeGraphics.fillStyle(0xA87E60);
            wedgeGraphics.moveTo(0 - ox, 0 - oy);
            wedgeGraphics.lineTo(wedge.width - ox, 0 - oy);
            wedgeGraphics.lineTo(wedge.width - ox, wedge.height - oy);
            wedgeGraphics.closePath();
            wedgeGraphics.fillPath();
        }

        // TODO - Remove. Used for testing physics
        // Replace with better putting mechanic
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

        // Ball physics properties
        ballGraphics.setFriction(0.01);
        ballGraphics.setFrictionAir(0.01);
        ballGraphics.setBounce(0.8);
        ballGraphics.setDensity(0.04);

        // Collisions
        this.scene.matter.world.on('collisionstart', function (event, bodyA, bodyB) {
            let _ball = undefined;
            let _hole = undefined;
            if (bodyA.label == "ball") { _ball = bodyA; }
            if (bodyB.label == "ball") { _ball = bodyB; }
            if (bodyA.label == "hole") { _hole = bodyA; }
            if (bodyB.label == "hole") { _hole = bodyB; }
            if (_ball != undefined && _hole != undefined) {
                ballGraphics.setPosition(
                    hole.x + hole.radius,
                    hole.y + hole.radius);
                ballGraphics.setVelocity(0, 0);
                setTimeout(onComplete, 100);
            }
        });
    }
}
