def print_inverted_pattern(n):
    for i in range(n):
        for j in range((n + 1) - i):
            print(j)


print_inverted_pattern(5)
