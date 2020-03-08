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
- [ ] Design HoleFive sand
- [ ] Sound
    - [ ] Add basic ball hit sound effect
    - [ ] Add ball in hole sound (clapping, ball in cup)
    - [ ] Add wall hit sound
- [ ] UI: Show hole name
- [ ] UI: Show par
- [ ] UI: Level select
- [ ] Created by / About area
- [ ] Settings
    - [ ] Music on/off
    - [ ] Sound effects on/off

- [ ] Water behavior: ball should slow in water (just like in sand). If ball stops in water, it returns to the mat

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

Large spatially distinct sand regions are needed for physics, but small sand clumps are needed for rendering graphics. 
