#ex1
def maior(n1, n2):
    if n1 > n2:
        return n1
    return n2

# print(maior(12, 6))

#ex2

def media(numbers):
    total = 0
    for n in numbers:
        total += n
    return total / len(numbers)

# print(media([1, 2, 3 ,4]))

#ex3
def printa_quadrado(n):
    lines = '*' * 5
    print(n * f'{lines}\n' )

# printa_quadrado(5)

#ex4
def maior_nome(lista):
    maior = lista[0]
    for n in lista:
        if len(n) > len(maior):
            maior = n
    return maior
        

# print(maior_nome(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]))

#ex5
import math

def cal_tinta(m2):
    lpm = m2 / 3
    lata = 18
    preço = 80.00
    qtd = math.ceil(lpm / lata)
    total = qtd * preço
    return qtd, total

# print(cal_tinta(100))

#ex6

def type_of_triangle(side1, side2, side3):
    is_triangle = (
            side1 + side2 > side3 and
            side2 + side3 > side1 and
            side1 + side3 > side2
    )
    if not is_triangle:
        return "não é triângulo"
    elif side1 == side2 == side3:
        return "equilátero"
    elif side1 == side2 or side2 == side3 or side1 == side3:
        return "isósceles"
    else:
        return "escaleno"

#bonus1

# print(min([5, 9, 3, 19, 70, 8, 100, 2, 35, 27]))

#bonus2

def printa_arvore(n):
    stars = 1
    while stars < n:
        lines = '*' * stars
        print(f'{lines}' )
        stars += 1

# printa_arvore(5)

#bonus3

def somatorio(n):
    t = 0
    c = 1
    while c <= n:
        t += c
        c += 1
    return t
print(somatorio(5))