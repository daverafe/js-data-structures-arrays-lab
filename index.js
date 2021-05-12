// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
    drivers.push(name)
}

function destructivelyPrependDriver(name) {
    drivers.unshift(name)
}

function destructivelyRemoveFirstDriver() {
    drivers.shift()
}

function destructivelyRemoveLastDriver() {
    drivers.pop()
}

function appendDriver(name) {
    const newDrivers = [...drivers, name]
   return newDrivers 
}

function prependDriver(name) {
    const newDrivers = [name, ...drivers]
    return newDrivers
}

function removeLastDriver() {
    const newDrivers = [...drivers]
    newDrivers.splice(-1)
    return newDrivers
}

function removeFirstDriver() {
    const newDrivers = [...drivers]
    newDrivers.splice(0, 1)
    return newDrivers
}
