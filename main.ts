// Created by: Mr. Coxall
// Created on: Oct 2020
// 
// This program uses a sonar to calculate distance
let distance = 0
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    distance = sonar.ping(
    DigitalPin.P0,
    DigitalPin.P0,
    PingUnit.MicroSeconds
    )
    basic.showNumber(distance)
    basic.pause(200)
})
