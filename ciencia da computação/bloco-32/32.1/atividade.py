# lista_frutas = ['banana', 'uva', 'maça', 'pera']

# for fruta in lista_frutas:
#     print(fruta[0])

# salary = 4150
# position = ""
# if salary <= 2000:
#     position = "estagiário"
# elif 2000 < salary <= 5800:
#     position = "júnior"
# elif 5800 < salary <= 7500:
#     position = "pleno"
# elif 7500 < salary <= 10500:
#     position = "senior"
# else:
#     position = "líder"
# print(position)


# restaurants = [
#     {"name": "Restaurante A", "nota": 4.5},
#     {"name": "Restaurante B", "nota": 3.0},
#     {"name": "Restaurante C", "nota": 4.2},
#     {"name": "Restaurante D", "nota": 2.3},
# ]
# # tal do comprehension
# filtered_restaurant = [res for res in restaurants if res['nota'] > 3.0]
# print(filtered_restaurant)

#fibonacci
# n = 10
# last, next = 0, 1
# while last < n:
#     print(last)
#     last, next = next, last + next

#fatorial
# f = 5
# t, n = 1, 1
# while n <= f:
#     t, n = n * t, n + 1
# print(t)

# ratings = [6, 8, 5, 9, 10] 
# new_ratings = [rat * 10 for rat in ratings]
# print(new_ratings)

# for rat in new_ratings:
#     if rat % 3 == 0:
#         print(f'{rat} é Multiplo de 3')

#funções
def concat(*strings):
    # Equivalente a um ", ".join(strings), que concatena os elementos de um iterável em uma string utilizando um separador
    # Nesse caso a string resultante estaria separada por vírgula
    final_string = ""
    for string in strings:
        final_string += string
        if not string == strings[-1]:
            final_string += ', '
    return final_string

# pode ser chamado com 2 parâmetros
print(concat("Carlos", "João"))  # saída: "Carlos, João"

# pode ser chamado com um número n de parâmetros
concat("Carlos", "João", "Maria")  # saída: "Carlos, João, Maria"

# dict é uma função que já vem embutida no python
print(dict(nome="Felipe", sobrenome="Silva", idade=25))  # cria um dicionário utilizando as chaves passadas

dict(nome="Ana", sobrenome="Souza", idade=21, turma=1)  # o número de parâmetros passados para a função pode variar

print("Botaro", "Cássio", sep=", ")  # nomeando o terceiro parâmetro, agora temos a saída: Botaro, Cássio