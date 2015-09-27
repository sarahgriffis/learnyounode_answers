array = process.argv
arrayLength = array.length

tempSum = 0
for (var i = 2; i < arrayLength; i ++) {
  tempSum += parseInt(array[i])
}

console.log(tempSum)
