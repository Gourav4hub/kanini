const fun = require('./code1')
const obj = require('./code2')

const {fun2} = require('./code2')

fun()

obj.fun1()
obj.fun2()

console.log(obj.data)

fun2()