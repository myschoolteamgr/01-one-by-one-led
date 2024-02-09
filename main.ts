let row = 0
let column = 0
basic.forever(function () {
    if (row == 5) {
        row = 0
        column += 1
    }
    if (column == 5) {
        column = 0
    }
    led.plot(row, column)
    basic.pause(500)
    led.unplot(row, column)
    row = row + 1
})
