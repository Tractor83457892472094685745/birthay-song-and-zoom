mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Red)
music.setVolume(255)
basic.showLeds(`
    . # . # .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `)
music.startMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.Once)
for (let index = 0; index < 6; index++) {
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Green)
    mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_SpinLeft, 255)
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Blue)
    basic.pause(200)
    mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_SpinRight, 255)
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.White)
    basic.pause(200)
}
mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Run, 146)
mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Cyan)
basic.pause(500)
mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Stop, 0)
mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Pinkish)
basic.pause(100)
mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Left, 148)
mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Yellow)
basic.pause(200)
mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Back, 146)
mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Red)
basic.pause(500)
mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Stop, 0)
mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Yellow)
basic.pause(100)
mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Right, 148)
mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Green)
basic.pause(200)
mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Left, 169)
mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Blue)
basic.pause(200)
mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Run, 169)
mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Pinkish)
basic.pause(500)
mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Run, 146)
mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Cyan)
basic.pause(500)
mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Stop, 0)
basic.pause(100)
mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Left, 148)
basic.pause(200)
mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Back, 146)
basic.pause(500)
mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Stop, 0)
basic.pause(100)
mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Right, 148)
basic.pause(2000)
music.startMelody(music.builtInMelody(Melodies.Nyan), MelodyOptions.Once)
mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Run, 255)
mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Cyan)
basic.pause(200)
mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Pinkish)
basic.pause(200)
mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Yellow)
basic.pause(200)
mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Green)
basic.pause(200)
mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Red)
basic.pause(7000)
