var now = new Date()
var day = now.getDay()
/*
Index:
    0 = Sunday
    1 = Monday
    2 = Tuesday
    3 = Wednesday
    4 = Thursday
    5 = Friday
    6 = Saturday
*/
switch (day) {
    case 0:
        console.log('Today. is sunday.')
        break
    case 1: 
        console.log('Today is monday.')
        break
    case 2:
        console.log('Today is tuesday.')
        break
    case 3: 
        console.log('Today is wednesday.')
        break
    case 4:
        console.log('Today is thursday.')
        break
    case 5:
        console.log('Today is friday.')
        break
    case 6:
        console.log('Today is saturday.')
        break
    default:
        console.log('[ERRO] An unexpected problem happend. Try again!')
}
console.log('Have a great day!')