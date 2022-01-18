import re
from turtle import st


class Pessoa:
    def __init__(self, nome):
        self.nome = nome

    def __str__(self):
        return f"Pessoa chamada: {self.nome}"

    def __repr__(self):
        return str(self)

    def __bool__(self):
        if self.nome == 'Leticia':
            return False
        else:
            return True

    def __lt__(self, outra_pessoa):
        if self.nome < outra_pessoa.nome:
            return True
        return False


if __name__ == '__main__':
    let = Pessoa('Leticia')
    mavis = Pessoa('Mavis')
    tina = Pessoa('Tina')

    galera = ["Mavis", 'Letícia', 'Tina']

    if tina:
        galera.sort()
        print(galera)