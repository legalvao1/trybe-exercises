# print(10 * (1 / 0))
# # Traceback (most recent call last):
# #   File "<stdin>", line 1, in <module>
# # ZeroDivisionError: division by zero
# print(4 + spam * 3)
# # Traceback (most recent call last):
# #   File "<stdin>", line 1, in <module>
# # NameError: name 'spam' is not defined
# print('2' + 2)
# # Traceback (most recent call last):
# #   File "<stdin>", line 1, in <module>
# # TypeError: can only concatenate str (not "int") to str

# while True:
#     try:
#         x = int(input("Please enter a number: "))
#         break
#     except ValueError:
#         print("Oops!  That was no valid number.  Try again...")

try:
    arquivo = open("arquivo.txt", "r")
except OSError:
    # será executado caso haja uma exceção
    print("arquivo inexistente")
else:
    # será executado se tudo ocorrer bem no try
    print("arquivo manipulado e fechado com sucesso")
    arquivo.close()
finally:
    # será sempre executado, independentemente de erro
    print("Tentativa de abrir arquivo")


#with
# Criamos um contexto, limitando o escopo onde o arquivo está aberto.
# O uso do "as" aqui é somente para atribuir o valor utilizado no contexto à variável file
with open("arquivo.txt", "w") as file:
    file.write("Michelle 27\n")
# como estamos fora do contexto, o arquivo foi fechado
print(file.closed)