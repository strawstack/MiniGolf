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

- [ ] Sound
    - [ ] Putt
    - [ ] Ball-in-hole
    - [ ] Applause
    - [ ] Wall hit
    - [ ] Rock hit
    - [ ] Sand noise (on enter)
    - [ ] Sand noise 2 (on stop)
    - [ ] Grass noise (on exit sand/water)
    - [ ] Water splash (on enter)
    - [ ] Water bubble (on ball return)
    - [ ] Wedge hit

- [ ] UI: Show hole name
- [ ] UI: Show par
- [ ] UI: Level select
- [ ] Created by / About area
- [ ] Settings
    - [ ] Music on/off
    - [ ] Sound effects on/off

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

## Sounds
https://opengameart.org/
https://freesound.org/
https://www.bensound.com/
