function search(array, key) {
    let left = 0, right = array.length - 1

    while (left <= right) {
        let mid = Math.floor((left + right) / 2)

        if (array[mid] === key)
            return mid
        else if (array[mid] > key)
            left = mid + 1
        else
            right = mid - 1
    }
    return -1
}

console.log(search([1, 2, 3, 4, 5, 6, 7, 8], 4))