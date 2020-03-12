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
        new HoleOne(config), new HoleTwo(config), new HoleThree(config),
        new HoleFour(config), new HoleFive(config)
    ]
};

function main() {

    // Dom elements
    let mc = document.querySelector(".menu-container");
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

    let toggleMenu = () => {
        if (state.showMenu) {
            mc.style.opacity = 0;
            mc.style.pointerEvents = "none";
            state.showMenu = false;
        } else {
            mc.style.opacity = 1;
            mc.style.pointerEvents = "all";
            state.showMenu = true;
        }
    }

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

    // Prepare to hide Hole when menu is clicked

    // How to switch to other pages like settings/about/levelselect?

    //

}
window.onload = main;
var game = new Phaser.Game(config);
