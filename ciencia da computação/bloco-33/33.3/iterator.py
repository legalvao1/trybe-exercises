

lista = ['abacate', 'amora', 'melancia', 'banana', 'kiwi']

# class Iterator:
#     def __init__(self, lista):
#         self.lista = lista

#     def __iter__(self):
#         print() lista

objeto = lista.__iter__()
print(objeto)
print(objeto.__next__())
print(objeto.__next__())