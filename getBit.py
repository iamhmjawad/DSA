def getBit(num, i):
    mask = 1 << i
    return 1 if (num & mask) != 0 else 0

print(getBit(100110101, 5))
