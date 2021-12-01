# # Exercício 1: Faça um programa que receba um nome e imprima o mesmo na vertical em escada invertida.
# nome = input('nome: ')
# def escada_invertida(nome):
#     new_nome = nome
#     while len(new_nome) > 0:
#         print(new_nome)
#         new_nome = new_nome[:-1]
# escada_invertida(nome)

# Exercício 2
import random

def advinhe_palavra():
    tentativas = 0
    palavras = ["word1", "word2", "word3"]
    palavra_escolhida = random.choice(palavras)
    scrambled_word = "".join(random.sample(palavra_escolhida, len(palavra_escolhida)))
    print(scrambled_word)
    while tentativas < 3:
        advinhe = input('advinhe a palavra: ')
        if advinhe != palavra_escolhida:
            print('nao foi dessa vez')
            tentativas += 1
        else:
            print(f'voce acertou!!  palavra era {palavra_escolhida}')
            break
# advinhe_palavra()

# Exercício 3

def advinhe_palavra_arq():
    tentativas = 0 
    arquivo = open('palavras.txt', 'r')
    palavras = [line.replace('\n','') for line in arquivo]
    arquivo.close()
    palavra_escolhida = random.choice(palavras)
    scrambled_word = "".join(random.sample(palavra_escolhida, len(palavra_escolhida)))
    print(scrambled_word)
    while tentativas < 3:
        advinhe = input('advinhe a palavra: ')
        if advinhe != palavra_escolhida:
            print('nao foi dessa vez')
            tentativas += 1
        else:
            print(f'voce acertou!!  palavra era {palavra_escolhida}')
            break
# advinhe_palavra_arq()

# Exercício 4

# import json
# import csv


# categorias = {}

# with open('livros.json') as file:
#     livros = [json.loads(line) for line in file]
#     for livro in livros:
#         for categoria in livro['categories']:
#             if not categorias.get(categoria):
#                 categorias[categoria] = 0
#             categorias[categoria] += 1

# header = ['categoria', 'porcentagem']
# rows = [[key, value / len(livros)] for key, value in categorias.items()]
# print(rows)
# with open('report.csv', 'w') as file:
#      writer = csv.writer(file)
#      writer.writerow(header)
#      writer.writerow(rows)


import json
import csv


def retrieve_books(file):
    return [json.loads(line) for line in file]


def count_books_by_categories(books):
    categories = {}
    for book in books:
        for category in book["categories"]:
            if not categories.get(category):
                categories[category] = 0
            categories[category] += 1
    return categories


def calculate_porcentage_by_category(book_count_by_category, total_books):
    return [
        [category, num_books / total_books]
        for category, num_books in book_count_by_category.items()
    ]


def write_csv_report(file, header, rows):
    writer = csv.writer(file)
    writer.writerow(header)
    writer.writerows(rows)


if __name__ == "__main__":
    # retrieve books
    with open("livros.json") as file:
        books = retrieve_books(file)

    # count by category
    book_count_by_category = count_books_by_categories(books)

    # calculate porcentage
    number_of_books = len(books)
    books_percentage_rows = calculate_porcentage_by_category(
        book_count_by_category, number_of_books
    )

    # write csv
    header = ["categoria", "porcentagem"]
    with open("report.csv", "w") as file:
        write_csv_report(file, header, books_percentage_rows)