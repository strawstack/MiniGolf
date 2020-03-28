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
        new HoleZero(config),
        new HoleOne(config),
        new HoleTwo(config),
        new HoleThree(config),
        new HoleFour(config),
        new HoleFive(config),
        new HoleSix(config),
        new HoleSeven(config),
        new HoleEight(config),
        new HoleNine(config),
        new HoleTen(config),
        new HoleEleven(config)
    ]
};

function main(game) {

    // Dom elements
    let mc = document.querySelector(".menu-container");
    let ma = document.querySelector(".menu-area");
    let ls = document.querySelector(".level-select-area");
    let levelSelectList = document.querySelectorAll(".level-select-item");
    let canvas = document.querySelector("canvas");

    // In-game buttons
    let menuBtn = document.querySelector(".top-bar-btn.menu");
    let soundBtn = document.querySelector(".top-bar-btn.sound");

    // Menu Buttons
    let returnBtn = document.querySelector(".menu-item.return");
    let newGameBtn = document.querySelector(".menu-item.start");
    let levelSelectBtn = document.querySelector(".menu-item.select");
    let aboutBtn = document.querySelector(".menu-item.about");
    let settingsBtn = document.querySelector(".menu-item.settings");

    // Info display
    //let playerName = document.querySelector("");
    let holeName = document.querySelector(".state-info.hole-name>span");
    let parNumber = document.querySelector(".state-info.par>span");
    let strokesNumber = document.querySelector(".state-info.strokes>span");

    let toggleLevelSelect = (newState) => {
        if (newState === undefined) newState = !state.showLevelSelect;
        if (!newState) {
            ls.style.opacity = 0;
            ls.style.pointerEvents = "none";
            state.showLevelSelect = false;
            ma.style.display = "inline-block";
        } else {
            ls.style.opacity = 1;
            ls.style.pointerEvents = "all";
            state.showLevelSelect = true;
            ma.style.display = "none";
        }
    };

    let toggleMenu = () => {
        if (state.showMenu) {
            mc.style.opacity = 0;
            mc.style.pointerEvents = "none";
            state.showMenu = false;
            toggleLevelSelect(false);
        } else {
            mc.style.opacity = 1;
            mc.style.pointerEvents = "all";
            state.showMenu = true;
        }
    }

    state.setStrokes = (number) => {
        state.strokes = number;
        strokesNumber.innerHTML = number;
    };

    state.setHoleName = (name) => {
        holeName.innerHTML = name;
    };

    // Click Listeners
    menuBtn.addEventListener('click', (e) => {
        toggleMenu();
    });
    returnBtn.addEventListener('click', (e) => {
        toggleMenu();
    });
    soundBtn.addEventListener('click', (e) => {
        if (state.soundOn) {
            state.soundOn = false;
            soundBtn.style.textDecoration = "line-through";
        } else {
            state.soundOn = true;
            soundBtn.style.textDecoration = "none";
        }
    });
    newGameBtn.addEventListener('click', (e) => {
        let res = confirm("Lose all progress and restart at the first hole?");
        if (res) {
            // Stop all scenes
            for (let scene of config.scene) {
                game.scene.stop(scene.scene.key);
            }
            // Start the entry scene
            game.scene.start(config.scene[0].scene.key);

            // Reset strokes
            state.setStrokes(0);

            toggleMenu();
        }
    });

    let determineStars = () => {
        if (document.cookie === "") document.cookie = "000000000000";
        let cookies = document.cookie;
        let stars = document.querySelectorAll(".star-img");
        for (let i = 0; i < cookies.length; i++) {
            if (cookies[i] == "1") {
                stars[i].src = "star.svg";
            } else {
                stars[i].src = "star_empty.svg";
            }
        }
    };
    determineStars();

    let menuReturnBtn = document.querySelector(".level-select-btn.return");
    levelSelectBtn.addEventListener('click', (e) => {
        determineStars();
        toggleLevelSelect(true);
    });
    menuReturnBtn.addEventListener('click', (e) => {
        toggleLevelSelect(false);
    });

    levelSelectList.forEach(_e => {
        _e.addEventListener("click", e => {
            let holeNumber = parseInt(e.target.dataset.hole);
            // Stop all scenes
            for (let scene of config.scene) {
                game.scene.stop(scene.scene.key);
            }
            game.scene.start(config.scene[holeNumber].scene.key);
            toggleLevelSelect(false);
            toggleMenu();
        });
    });

}
var game = new Phaser.Game(config);
window.onload = () => {
    main(game);
};
