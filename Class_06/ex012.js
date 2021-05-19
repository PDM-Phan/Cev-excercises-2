// Code based from Brazilan law.
var age = 66
console.log(`You have ${age} years old.`)
if (age < 16) {
    console.log('Still too young to vote.')
} else {
    if (age < 18 || age > 65) {
        console.log('Now you can choose to vote if you want.')
    } else {
        if (age >= 18 && age < 65) {
            console.log('You must vote.')
        } 
    }
}
