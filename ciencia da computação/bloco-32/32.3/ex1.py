#ex1

def fizz_buzz(n):
    c = 1
    l = []
    while c <= n:
        if c % 3 == 0 and c % 5 == 0:
            l.append('fizzBuzz')
        elif c % 5 == 0:
            l.append('buzz')
        elif c % 3 == 0:
            l.append('fizz')
        else:
            l.append(c)
        c += 1
    return l

print(fizz_buzz(5))