let arr = ["a", "b"];


arr.push( function () {
    this
})

arr[2]()

console.log(arr)