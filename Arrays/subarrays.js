function subArrays(arr) {
    const result = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            result.push(arr.slice(i, j + 1))
        }
    }
    return result
}

console.log(subArrays([1, 2, 3]))

// Use Pen/Register for better understanding!