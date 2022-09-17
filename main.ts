Mbit_IR.onPressEvent(RemoteButton.Power, function () {
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.OFF)
})
Mbit_IR.onPressEvent(RemoteButton.NUM8, function () {
    basic.showIcon(IconNames.Tortoise)
})
Mbit_IR.onPressEvent(RemoteButton.TRight, function () {
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Blue)
})
Mbit_IR.onPressEvent(RemoteButton.Right, function () {
    mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Right)
    basic.pause(100)
    mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Stop)
})
Mbit_IR.onPressEvent(RemoteButton.NUM9, function () {
    basic.showIcon(IconNames.Rabbit)
})
Mbit_IR.onPressEvent(RemoteButton.NUM0, function () {
    basic.showIcon(IconNames.Cow)
})
Mbit_IR.onPressEvent(RemoteButton.Up, function () {
    mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Run)
    basic.pause(100)
    mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Stop)
})
Mbit_IR.onPressEvent(RemoteButton.NUM7, function () {
    basic.pause(100)
    music.playTone(494, music.beat(BeatFraction.Whole))
})
Mbit_IR.onPressEvent(RemoteButton.Minus, function () {
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Green)
})
Mbit_IR.onPressEvent(RemoteButton.Light, function () {
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.White)
})
Mbit_IR.onPressEvent(RemoteButton.Left, function () {
    mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Left)
    basic.pause(100)
    mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Stop)
})
Mbit_IR.onPressEvent(RemoteButton.Down, function () {
    mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Back)
    basic.pause(100)
    mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Stop)
})
Mbit_IR.onPressEvent(RemoteButton.TLeft, function () {
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Red)
})
Mbit_IR.onPressEvent(RemoteButton.NUM3, function () {
    basic.pause(100)
    music.playTone(330, music.beat(BeatFraction.Whole))
})
Mbit_IR.onPressEvent(RemoteButton.NUM5, function () {
    basic.pause(100)
    music.playTone(392, music.beat(BeatFraction.Whole))
})
Mbit_IR.onPressEvent(RemoteButton.NUM2, function () {
    basic.pause(100)
    music.playTone(330, music.beat(BeatFraction.Whole))
})
Mbit_IR.onPressEvent(RemoteButton.BEEP, function () {
    music.ringTone(262)
    basic.pause(400)
    music.rest(music.beat(BeatFraction.Sixteenth))
})
Mbit_IR.onPressEvent(RemoteButton.NUM1, function () {
    basic.pause(100)
    music.playTone(262, music.beat(BeatFraction.Whole))
})
Mbit_IR.onPressEvent(RemoteButton.NUM6, function () {
    basic.pause(100)
    music.playTone(440, music.beat(BeatFraction.Whole))
})
Mbit_IR.onPressEvent(RemoteButton.Plus, function () {
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Pinkish)
})
Mbit_IR.onPressEvent(RemoteButton.NUM4, function () {
    basic.pause(100)
    music.playTone(349, music.beat(BeatFraction.Whole))
})
Mbit_IR.init(Pins.P8)
