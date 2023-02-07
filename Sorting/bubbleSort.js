function sort(array) {
    let counter = 1
    while (counter < array.length - 1) {
        if (array[i] > array[i + 1]) {
            let temp = array[i + 1]
            array[i + 1] = array[i]
            array[i] = temp
        }

    }
    return array
}

console.log(sort([5, 3, 7, 4, 2, 76]))