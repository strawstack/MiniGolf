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
        new HoleEleven(config),
        new HoleTwelve(config)
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
    let aboutPageBtn = document.querySelector(".menu-item.about");
    let aboutBtn = document.querySelector(".menu-item.about");
    let settingsBtn = document.querySelector(".menu-item.settings");

    // Info display
    //let playerName = document.querySelector("");
    let holeName = document.querySelector(".state-info.hole-name>span");
    let parNumber = document.querySelector(".state-info.par>span");
    let strokesNumber = document.querySelector(".state-info.strokes>span");

    // Banner Buttons
    let banner = document.querySelector(".success-banner");
    let replay = document.querySelector(".btn-item.reset");
    let bannerLevelSelect = document.querySelector(".btn-item.level-select");
    let nextLevel = document.querySelector(".btn-item.next-level");

    // About
    let aa = document.querySelector(".about-area");
    let menuReturnBtn = document.querySelector(".level-select-btn.return");
    let aboutPageReturn = document.querySelector(".about-area-return");

    // Settings
    let sa = document.querySelector(".settings-area");
    let settingsReturnBtn = document.querySelector(".settings-area-return");
    let settingsResetStars = document.querySelector(".settings-area-reset");

    // Global reset button
    let globalHoleReset = document.querySelector(".reset-button");

    // Hole Twelve
    let holeTwelveLevel = document.querySelector(".level-select-item.bonus-hole");
    let holeTwleveImg = document.querySelector(".hole-img-locked");

    globalHoleReset.addEventListener("click", e => {
        // Stop all scenes
        for (let scene of config.scene) {
            game.scene.stop(scene.scene.key);
        }

        state.setStrokes(0);

        // Start the entry scene
        game.scene.start(config.scene[state.currentHole].scene.key);

        let banner = document.querySelector(".success-banner");
        state.showBanner(banner, false);
    });

    let toggleLevelSelect = (newState) => {
        if (newState === undefined) newState = !state.showLevelSelect;
        if (!newState) {
            ls.style.opacity = 0;
            ls.style.position = "absolute";
            ls.style.pointerEvents = "none";
            state.showLevelSelect = false;
            ma.style.display = "inline-block";
        } else {
            ls.style.opacity = 1;
            ls.style.position = "relative";
            ls.style.pointerEvents = "all";
            state.showLevelSelect = true;
            ma.style.display = "none";
        }
    };

    let toggleAboutPage = (newState) => {
        if (newState === undefined) newState = !state.showAboutPage;
        if (!newState) {
            aa.style.opacity = 0;
            aa.style.pointerEvents = "none";
            state.showLevelSelect = false;
            aa.style.position = "absolute";
            ma.style.display = "inline-block";
        } else {
            aa.style.opacity = 1;
            aa.style.position = "relative";
            aa.style.pointerEvents = "all";
            state.showLevelSelect = true;
            ma.style.display = "none";
        }
    };

    let toggleSettings = (newState) => {
        if (newState === undefined) newState = !state.showSettings;
        if (!newState) {
            sa.style.opacity = 0;
            sa.style.pointerEvents = "none";
            state.showLevelSelect = false;
            sa.style.position = "absolute";
            ma.style.display = "inline-block";
        } else {
            sa.style.opacity = 1;
            sa.style.position = "relative";
            sa.style.pointerEvents = "all";
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

    /* Banner button events */
    replay.addEventListener("click", e => {
        // Stop all scenes
        for (let scene of config.scene) {
            game.scene.stop(scene.scene.key);
        }
        // Start the entry scene
        game.scene.start(config.scene[state.currentHole].scene.key);

        // Hide the banner
        state.showBanner(banner, false);
        state.setStrokes(0);
    });
    bannerLevelSelect.addEventListener("click", e => {
        determineStars();
        toggleMenu();
        toggleLevelSelect(true);
    });
    nextLevel.addEventListener("click", e => {

        determineStars();

        // Stop all scenes
        for (let scene of config.scene) {
            game.scene.stop(scene.scene.key);
        }

        let nextHole;
        if (state.currentHole == 11) {
            if (state.bonusLocked) {
                nextHole = 1;

            } else { // state.bonusLocked = false
                nextHole = 12;
            }
        } else {
            nextHole = state.currentHole + 1;
            if (nextHole > 12) nextHole = 1;
        }

        // Hide the banner
        state.showBanner(banner, false);
        state.setStrokes(0);

        // Start the entry scene
        game.scene.start(config.scene[nextHole].scene.key);
    });

    /* State functions */
    state.setStrokes = (number) => {
        state.strokes = number;
        strokesNumber.innerHTML = number;
    };
    state.setHoleName = (name, holeNumber) => {
        let cookies;
        for (let cookie of document.cookie.split(";")) {
            let key = cookie.split("=")[0].trim();
            if (key == "golf") {
                let value = cookie.split("=")[1].trim();
                cookies = value;
            }
        }
        let star = (cookies[holeNumber-1] == "1")? " ⭐": "";
        holeName.innerHTML = name + star;
    };

    // Menu events
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
        let res = confirm("Restart at the first hole? (star progress is not deleted)");
        if (res) {
            // Stop all scenes
            for (let scene of config.scene) {
                game.scene.stop(scene.scene.key);
            }
            // Start the entry scene
            game.scene.start(config.scene[1].scene.key);

            // Reset strokes
            state.setStrokes(0);

            toggleMenu();

            // Hide the banner
            state.showBanner(banner, false);
        }
    });

    let determineStars = () => {
        if (document.cookie.indexOf("golf") === -1) document.cookie = "golf=000000000000";
        let cookies;
        for (let cookie of document.cookie.split(";")) {
            let key = cookie.split("=")[0].trim();
            if (key == "golf") {
                let value = cookie.split("=")[1].trim();
                cookies = value;
            }
        }
        let stars = document.querySelectorAll(".star-img");
        let star_count = 0;
        for (let i = 0; i < cookies.length; i++) {
            if ((i == 11) && star_count == 11) { // 12th hole
                if (cookies[i] == "1") {
                    stars[i].src = "star.svg";
                } else {
                    stars[i].src = "star_empty.svg";
                }
                holeTwleveImg.className = "hole-img hole-img-locked unlock";
                holeTwelveLevel.className = "level-select-item bonus-hole";
                state.bonusLocked = false;

            } else if (i != 11) { // not 12th hole
                if (cookies[i] == "1") {
                    stars[i].src = "star.svg";
                    star_count += 1;
                } else {
                    stars[i].src = "star_empty.svg";
                }
            }
        }
    };
    determineStars();

    levelSelectBtn.addEventListener('click', (e) => {
        determineStars();
        toggleLevelSelect(true);
    });
    menuReturnBtn.addEventListener('click', (e) => {
        toggleLevelSelect(false);
    });

    aboutPageBtn.addEventListener('click', e => {
        toggleAboutPage(true);
    });
    aboutPageReturn.addEventListener('click', e => {
        toggleAboutPage(false);
    });

    settingsBtn.addEventListener('click', e => {
        toggleSettings(true);
    });
    settingsReturnBtn.addEventListener('click', e => {
        toggleSettings(false);
    });
    settingsResetStars.addEventListener('click', e => {
        let res = confirm("Reset all star progress? (this cannot be undone)");
        if (res) {
            document.cookie = "golf=000000000000";

            holeTwleveImg.className = "hole-img hole-img-locked lock";
            holeTwelveLevel.className = "level-select-item bonus-hole lock";
            state.bonusLocked = true;
            let stars = document.querySelectorAll(".star-img");
            stars[11].src = "empty.svg";


            // Reset current scene to remove possible star in HoleName
            for (let scene of config.scene) {
                game.scene.stop(scene.scene.key);
            }
            // Start the entry scene
            game.scene.start(config.scene[1].scene.key);

            // Reset strokes
            state.setStrokes(0);
        }
    });

    levelSelectList.forEach(_e => {
        _e.addEventListener("click", e => {

            if (e.target.dataset.hole == "12" && state.bonusLocked) {
                return; // block click if hole 12 is locked
            }

            // Hide the banner
            state.showBanner(banner, false);

            let holeNumber = parseInt(e.target.dataset.hole);

            // Stop all scenes
            for (let scene of config.scene) {
                game.scene.stop(scene.scene.key);
            }

            game.scene.start(config.scene[holeNumber].scene.key);
            state.setStrokes(0);
            toggleLevelSelect(false);
            toggleMenu();
        });
    });

}
var game = new Phaser.Game(config);
window.onload = () => {
    main(game);
};
