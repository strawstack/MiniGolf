# MiniGolf

Bend the rules of what people expect from golf in a surprising and adventurous way
Allow people to “escape” from the course and go on a weird side-adventure. Like have one seemingly broken hole that leads downs rabbit hole
What-the-golf was wacky, but this would be more wow or fascinating or cool. Make a simple version with axis aligned collisions?

# Dev Notes

- [Did not work] Instead of `getAttribute` in `CreateHole` use `getBoundingClientRect()` because elements will not always have x, y, width, height
- [x] Make holes winnable
- [x] Transition between holes on win. Different scenes would be ideal
- [x] Make first three holes
- [x] Design HoleFour water
- [x] Design HoleFive sand
- [x] Make water similar to how sand works with the added constraint that if the ball stops in water the ball will return to the start.
- [x] Water behavior: ball should slow in water (just like in sand). If ball stops in water, it returns to the mat
- [x] Sand should be contained by course and corner wedges
- [x] Sound
    - [x] Putt
    - [x] Ball-in-hole
    - [ ] Applause
    - [x] Wall hit
    - [x] Rock hit
    - [x] Sand noise (on enter)
    - [x] Sand noise 2 (on stop)
    - [x] Grass noise (on exit sand/water)
    - [x] Water splash (on enter)
    - [x] Water bubble (on ball return)
    - [x] Wedge hit
- [x] Sound on/off functionality
- [x] UI in top-left corner
    - [x] UI: Show hole number
    - [x] UI: Show par
    - [x] Show player and score
- [?] Pause phaser game (or disable putting) in `toggleMenu function` when menu is shown

- [ ] Clicking on `New Game` should go to `HoleOne` and reset shots
- [ ] Design `Level Select` screen as a sibling of `menu-area`
- [ ] About page
- [ ] Settings page

- [ ] Carbon Ads https://www.carbonads.net/

# Creating a Hole

1. Create an SVG with `bounding rects`
2. Label bounding rects with a `keywords`
3. Export SVG with `attributes`
4. Replace `id=` with `class=`
5. Remove `_[number]` from duplicate class names
6. Copy SVG document to `data.js` file
7. Create HoleNumber class
8. Add any new features to `CreateHole` class
9. Add special elements inside `HoleNumber` class after call to `CreateHole`
10. `Play-test` the hole

# Complex sand and Water shapes

If water/sand is a complex/concave shape, the graphic will not line up properly. In this case, place several rectangles over the sand shape in Figma and cut the path in the several less complex pieces. This should result in a tighter fit between the physics body and the graphics.

# Sand (water) collisions

Every frame a function is fired that checks if the ball is in sand. If the ball is in sand the friction is adjusted accordingly.

# Credits

## Sounds from
https://opengameart.org/
https://freesound.org/
https://www.bensound.com/

## Required Attribution

"Water, Pouring, A.wav" by InspectorJ (www.jshaw.co.uk) of Freesound.org
https://freesound.org/people/InspectorJ/sounds/421184/

"Water Swirl, Small, 5.wav" by InspectorJ (www.jshaw.co.uk) of Freesound.org
https://freesound.org/people/InspectorJ/sounds/398711/

https://opengameart.org/content/completion-sound

Credit "Kenney.nl"
https://opengameart.org/content/51-ui-sound-effects-buttons-switches-and-clicks

https://opengameart.org/content/12-3-knocks-wooden-doors

https://opengameart.org/content/lego-bricks

Impact by Iwan 'qubodup' Gabovitch http://opengameart.org/users/qubodup
https://opengameart.org/content/impact
