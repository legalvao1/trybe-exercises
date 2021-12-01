# import random

# random_number = random.randint(1, 10)  # escolhe um número aleatório entre 1 e 10
# guess = ""

# while guess != random_number:  # enquanto não adivinhar o número
#     guess = int(input("Qual o seu palpite? "))  # pergunte a pessoa usuária um número

# print("O número sorteado era: ", guess)

import sys


if __name__ == "__main__":
    for argument in sys.argv:
        print("Received -> ", argument)
# no terminal python3 conteudo.py 2 6 'uai'


err = "Arquivo não encontrado"
print(f"Erro aconteceu: {err}", file=sys.stderr)


x = 5
y = 3
# print(f"{x} / {y} = {x / y:.2f}")  # saída: 5 / 2 = 1.67
# {x} é substituído por 5
# {y} é substituído por 3
# {x / y:.2f} O que vem após os dois pontos são formatadores, como nesse exemplo, duas casas decimais (.2f).
# print(f"{x:.^3}")  # saída: ".5."
# . é o caractere utilizado para preencher
# ^ indica que o valor será centralizado
# 3 são o número de caracteres exibidos


# nome = input('nome? ')
# for l in nome:
#     print(l)

valores = input('digite varios numeros')
def somatoria(nums):
    t = 0
    data = nums.split(',')
    for n in data:
        if n.isdigit() == False:
            return 'apenas numeros'
        else:
            t += int(n)
    return t
print(somatoria(valores))


#escrita  e leitura arquivos

# escrita
file = open("arquivo.txt", mode="w")
file.write("Trybe S2")
LINES = ["Olá\n", "mundo\n", "belo\n", "do\n", "Python\n"]
file.writelines(LINES)
file.close()

# leitura
file = open("arquivo.txt", mode="r")
content = file.read()
print(content)
#ou iterar
for line in file:
    print(line)  # não esqueça que a quebra de linha também é um caractere da linha
file.close()  # não podemos esquecer de fechar o arquivo

#arquivos binarios
# Eles são arquivos que contêm uma série de bytes e a sua leitura pode variar de acordo com o arquivo. Nesse caso, devemos acrescentar um b ao parâmetro mode , indicando que será utilizado o modo binário.
# As operações são similares a de um arquivo textual. Porém tanto a escrita quanto a leitura devem ser feitas utilizando bytes.

# escrita
file = open("arquivo.dat", mode="wb")
file.write(b"C\xc3\xa1ssio 30")  # o prefixo b em uma string indica que seu valor está codificado em bytes
file.close()

# leitura
file = open("arquivo.dat", mode="rb")
content = file.read()
print(content)  # saída: b'C\xc3\xa1ssio 30'
file.close()  # não podemos esquecer de fechar o arquivo