let distance = 0
basic.forever(function () {
    distance = Tinybit.Ultrasonic_CarV2()
    if (distance > 50) {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 255)
    } else {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_SpinLeft, 130)
        basic.pause(100)
    }
})
