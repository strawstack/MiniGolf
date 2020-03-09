class CreateHole {
    constructor(scene, svg, onComplete, updateCallback) {
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
                    "label": "wall",
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

            // Draw wedge graphics according to Matter verticies
            let px = wedgeGraphics.body.position.x;
            let py = wedgeGraphics.body.position.y;
            wedgeGraphics.fillStyle(0xA87E60);
            wedgeGraphics.moveTo(wedgeGraphics.body.vertices[0].x - px, wedgeGraphics.body.vertices[0].y - py);
            for (let i=1; i < wedgeGraphics.body.vertices.length; i++) {
                let v = wedgeGraphics.body.vertices[i];
                wedgeGraphics.lineTo(v.x - px, v.y - py);
            }
            wedgeGraphics.closePath();
            wedgeGraphics.fillPath();
        }

        // Wedge-tl (top-left corner)
        let wedgeElems_tl = svg.querySelectorAll(".wedge-tl");
        for (let wedgeElem of wedgeElems_tl) {
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
                        {x: 0, y: wedge.height}
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

            // Draw wedge graphics according to Matter verticies
            let px = wedgeGraphics.body.position.x;
            let py = wedgeGraphics.body.position.y;
            wedgeGraphics.fillStyle(0xA87E60);
            wedgeGraphics.moveTo(wedgeGraphics.body.vertices[0].x - px, wedgeGraphics.body.vertices[0].y - py);
            for (let i=1; i < wedgeGraphics.body.vertices.length; i++) {
                let v = wedgeGraphics.body.vertices[i];
                wedgeGraphics.lineTo(v.x - px, v.y - py);
            }
            wedgeGraphics.closePath();
            wedgeGraphics.fillPath();
        }

        // Wedge-bl (bottom-left corner)
        let wedgeElems_bl = svg.querySelectorAll(".wedge-bl");
        for (let wedgeElem of wedgeElems_bl) {
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
                        {x: 0, y: wedge.height},
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

            // Draw wedge graphics according to Matter verticies
            let px = wedgeGraphics.body.position.x;
            let py = wedgeGraphics.body.position.y;
            wedgeGraphics.fillStyle(0xA87E60);
            wedgeGraphics.moveTo(wedgeGraphics.body.vertices[0].x - px, wedgeGraphics.body.vertices[0].y - py);
            for (let i=1; i < wedgeGraphics.body.vertices.length; i++) {
                let v = wedgeGraphics.body.vertices[i];
                wedgeGraphics.lineTo(v.x - px, v.y - py);
            }
            wedgeGraphics.closePath();
            wedgeGraphics.fillPath();
        }

        // Rock
        let rockElems = svg.querySelectorAll(".rock");
        for (let rockElem of rockElems) {
            let rock = {
                x: parseInt(rockElem.getAttribute("x")),
                y: parseInt(rockElem.getAttribute("y")),
                width: parseInt(rockElem.getAttribute("width")),
                height: parseInt(rockElem.getAttribute("height"))
            };

            let rockGraphics = this.scene.add.graphics({
                x: rock.x,
                y: rock.y
            });

            // Rock Matter physics
            let r1 = this.scene.matter.add.gameObject(rockGraphics, {
                shape: {
                    type: 'polygon',
                    radius: rock.width/2,
                    sides: 6
                },
                label: 'rock',
                isStatic: true,
                restitution: 1
            });

            let ox = r1.body.centerOffset.x;
            let oy = r1.body.centerOffset.y;

            rockGraphics.setPosition(
                rock.x + ox/2,
                rock.y + oy/2,
            );

            // Draw rock graphics according to Matter verticies
            let px = rockGraphics.body.position.x;
            let py = rockGraphics.body.position.y;
            rockGraphics.fillStyle(0xB5B5B5);
            rockGraphics.moveTo(rockGraphics.body.vertices[0].x - px, rockGraphics.body.vertices[0].y - py);
            for (let i=1; i < rockGraphics.body.vertices.length; i++) {
                let v = rockGraphics.body.vertices[i];
                rockGraphics.lineTo(v.x - px, v.y - py);
            }
            rockGraphics.closePath();
            rockGraphics.fillPath();

            // Rotate rock 90deg
            rockGraphics.setRotation(0.5 * Math.PI);
        }

        // Sand
        let sandElems = svg.querySelectorAll(".sand");
        let sandBodies = [];
        for (let sandElem of sandElems) {

            let sandGraphics = this.scene.add.graphics({
                x: 0,
                y: 0
            });

            // Get vertices from path
            // NOTE: For smooth shapes, a lower number of samples works better
            let vert = this.scene.matter.svg.pathToVertices(sandElem, 5);

            // Create object from Verticies
            let s1 = this.scene.matter.add.gameObject(sandGraphics, {
                shape: {
                    type: 'fromVertices',
                    verts: vert
                },
                label: 'sand',
                isStatic: true,
                isSensor: true
            });

            // Collect sand bodies for collision checking
            sandBodies.push(sandGraphics.body);

            let ox = s1.body.centerOffset.x;
            let oy = s1.body.centerOffset.y;

            sandGraphics.setPosition(
                0 + ox,
                0 + oy,
            );

            // Draw water graphics according to Matter verticies
            let px = sandGraphics.body.position.x;
            let py = sandGraphics.body.position.y;
            sandGraphics.fillStyle(0xD9D7A2);
            sandGraphics.moveTo(sandGraphics.body.vertices[0].x - px, sandGraphics.body.vertices[0].y - py);
            for (let i=1; i < sandGraphics.body.vertices.length; i++) {
                let v = sandGraphics.body.vertices[i];
                sandGraphics.lineTo(v.x - px, v.y - py);
            }
            sandGraphics.closePath();
            sandGraphics.fillPath();
            sandGraphics.setAlpha(0.95);
        }

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

        // Water
        let waterElems = svg.querySelectorAll(".water");
        let waterBodies = [];
        for (let waterElem of waterElems) {

            let waterGraphics = this.scene.add.graphics({
                x: 0,
                y: 0
            });

            // Get vertices from path
            // NOTE: For smooth shapes, a lower number of samples works better
            let vert = this.scene.matter.svg.pathToVertices(waterElem, 25);

            // Create object from Verticies
            let w1 = this.scene.matter.add.gameObject(waterGraphics, {
                shape: {
                    type: 'fromVertices',
                    verts: vert
                },
                label: 'water',
                isStatic: true,
                isSensor: true
            });

            // Collect waterBodies
            waterBodies.push(waterGraphics.body);

            let ox = w1.body.centerOffset.x;
            let oy = w1.body.centerOffset.y;

            waterGraphics.setPosition(
                0 + ox,
                0 + oy,
            );

            // Draw water graphics according to Matter verticies
            let px = waterGraphics.body.position.x;
            let py = waterGraphics.body.position.y;
            waterGraphics.fillStyle(0x8DBCD6);
            waterGraphics.moveTo(waterGraphics.body.vertices[0].x - px, waterGraphics.body.vertices[0].y - py);
            for (let i=1; i < waterGraphics.body.vertices.length; i++) {
                let v = waterGraphics.body.vertices[i];
                waterGraphics.lineTo(v.x - px, v.y - py);
            }
            waterGraphics.closePath();
            waterGraphics.fillPath();

            waterGraphics.setAlpha(0.5);
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

            // Sound
            this.scene.sound.play('putt');

            ballGraphics.applyForce({
                x: nx * mag,
                y: ny * mag
            });

        }, this);

        // Ball physics properties
        ballGraphics.setFriction(0.02);
        ballGraphics.setFrictionAir(0.02);
        ballGraphics.setBounce(0.8);
        ballGraphics.setDensity(0.04);

        let sand_count = 0;

        // Collisions
        this.scene.matter.world.on('collisionstart', function (event, bodyA, bodyB) {
            let _ball = undefined;
            if (bodyA.label == "ball") { _ball = bodyA; }
            if (bodyB.label == "ball") { _ball = bodyB; }

            let _hole = undefined;
            if (bodyA.label == "hole") { _hole = bodyA; }
            if (bodyB.label == "hole") { _hole = bodyB; }

            let _wall = undefined;
            if (bodyA.label == "wall") { _wall = bodyA; }
            if (bodyB.label == "wall") { _wall = bodyB; }

            let _rock = undefined;
            if (bodyA.label == "rock") { _rock = bodyA; }
            if (bodyB.label == "rock") { _rock = bodyB; }

            let _wedge = undefined;
            if (bodyA.label == "wedge") { _wedge = bodyA; }
            if (bodyB.label == "wedge") { _wedge = bodyB; }

            if (_ball != undefined && _hole != undefined) {
                this.scene.sound.play('complete');
                ballGraphics.setPosition(
                    hole.x + hole.radius,
                    hole.y + hole.radius);
                ballGraphics.setVelocity(0, 0);
                setTimeout(onComplete, 100);

            } else if (_ball != undefined && _wall != undefined) {
                this.scene.sound.play('wall');

            } else if (_ball != undefined && _rock != undefined) {
                this.scene.sound.play('rock');

            }else if (_ball != undefined && _wedge != undefined) {
                this.scene.sound.play('wedge');
            }
        });

        // Build updateCallback
        let inWater = false;
        let inSand  = false;
        if (updateCallback != undefined) {
            updateCallback.func = () => {
                // Sand
                let res = this.scene.matter.query.point(
                    sandBodies,
                    ballGraphics.body.position
                );
                if (res.length > 0) {
                    inSand = true; // Ball is in sand and will slow
                } else {
                    inSand = false; // Ball not in sand
                }

                // Water
                res = this.scene.matter.query.point(
                    waterBodies,
                    ballGraphics.body.position
                );
                if (res.length > 0) {
                    inWater = true; // Ball is in water and will slow
                } else {
                    inWater = false; // Ball not in water
                }

                if (inWater || inSand) {
                    if (ballGraphics.body.friction != 0.08) {
                        ballGraphics.setFriction(0.08);
                        ballGraphics.setFrictionAir(0.08);
                        if (inWater) {
                            this.scene.sound.play('water-enter');
                        } else if (inSand) {
                            this.scene.sound.play('sand-enter');
                        }
                    }
                } else {
                    if (ballGraphics.body.friction != 0.02) {
                        ballGraphics.setFriction(0.02);
                        ballGraphics.setFrictionAir(0.02);
                    }
                }

                // If ball stops in water, place it back at the start
                let isStopped = this.stopped(ballGraphics.body.velocity);
                console.log(inWater, isStopped);
                if (inWater && isStopped) {
                    this.scene.sound.play('water-stop');
                    ballGraphics.setPosition(
                        mat.x + mat.width/2,
                        mat.y + mat.height/2);
                    ballGraphics.setVelocity(0, 0);
                }
            };
        }
    }
    stopped(vec2) {
        let minVal = 0.011;
        let x = Math.abs(vec2.x) < minVal;
        let y = Math.abs(vec2.y) < minVal;
        return x && y;
    }
}
