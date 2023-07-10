scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    info.changeScoreBy(1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    info.changeLifeBy(-1)
})
ControllerButtonEvent.Pressed.onEvent(controller.A, function () {
    mySprite.vy = -300
})
info.onCountdownEnd(function () {
    game.gameOver(false)
})
let mySprite: Sprite = null
scene.setBackgroundColor(8)
tiles.setCurrentTilemap(tilemap`nivel1`)
mySprite = sprites.create(img`
    ..............................
    ..............................
    ..............................
    ..............................
    ..............................
    ..............2...............
    ..............2...............
    .............242..............
    .........2...242...2..........
    .........22.24442.22..........
    .........24244444242..........
    .........24455455442..........
    .........2245f45f422..........
    ..........245f45f42...........
    ..........244444442...........
    ...........24fff42............
    ............22222.............
    .............222..............
    ............22222.............
    ...........2.222.2............
    ...........2.222.2............
    .............222..............
    .............2.2..............
    .............2.2..............
    ..............................
    ..............................
    ..............................
    ..............................
    ..............................
    ..............................
    `, SpriteKind.Player)
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite, 100, 0)
mySprite.ay = 800
tiles.placeOnRandomTile(mySprite, assets.tile`myTile1`)
let mySprite2 = sprites.create(img`
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..............ffff................................
    .............f...f................................
    ............8.....f...............................
    ............8.....f...............................
    ...........8888ffffff.............................
    ...........888f......f............................
    ..........88ff.f......f...........................
    ...........f....f......f..........................
    ...........f....f.......f.........................
    ..........f....f.ff.....f.........................
    ..........f...f....ff....f........................
    .........f...f.......fff.f........................
    ..........fff...........ff........................
    ..........f.............f.........................
    ..........f.............f.........................
    ..........f.............f.........................
    ...........f...........f..........................
    ............f.........f...........................
    ............ff.......ff...........................
    ..............fffffff.............................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    `, SpriteKind.Enemy)
tiles.placeOnRandomTile(mySprite2, assets.tile`myTile0`)
mySprite2.follow(mySprite)
info.setLife(3)
info.startCountdown(40)
