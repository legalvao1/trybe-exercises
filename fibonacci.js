const fibbo = (n) => {
    c = 0
    f1 = 0
    f2 = 1
    f3 = 0
    do {
        f3 = f1 + f2
        f2 = f1
        f1 = f3
        c += 1
    } while (c < n);

    return f3
}

console.log(fibbo(9))