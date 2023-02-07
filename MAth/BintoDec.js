function binToDec(binary) {
    let decimal = 0
    for (let i = 0; i < binary.length; i++) {
        decimal += binary[binary.length - 1 - i] * (2 ** i)
    }
    return decimal
}

console.log(binToDec("1000"))
