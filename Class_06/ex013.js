var now = new Date()
var hour = now.getHours()
console.log(`Now is exactly ${hour} hours.`)
if (hour <=  12) {
    console.log('Gooood morning!')
} else if (hour < 18) {
    console.log('Goood afternoon!')
} else {
    console.log('Goood night!')
}