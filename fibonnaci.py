def fibonacci_iter(n):
    sequence = [0, 1]
    if n >= 2:
        for x in range(2, n+1):
            next = sequence[-1] + sequence[-2]
            sequence.append(next)
    return sequence[n]

def fibonacci(n):
    if n < 2:
        return n
    else:
        return fibonacci(n-1) + fibonacci(n-2)


print(fibonacci_iter(9))
print(fibonacci(9))

# Recursividade
# Definição de recursividade
# Uma função que chama a si mesma é chamada de recursiva. O processo para executar, tal função recursiva, é chamado de recursividade.
# A recursividade é um dos métodos para a resolução de grandes problemas. Dito isso, um problema submetido, a uma solução recursiva, será quebrado em subproblemas menores até chegar a uma parte tão pequena que o torna possível solucioná-lo trivialmente. Um exemplo visual que podemos relacionar a essa tática de resolução de problema, são as bonecas russas, que dentro de si tem diversas outras bonecas, cada vez menores.


def reverse_list(lista):
    return lista[::-1]

print(reverse_list(['abacate', 'amora', 'pera']))
print(reverse_list([1, 4, 6]))

# Iterativo vs. Recursivo
# Eis uma solução que vamos usar de exemplo. A este método, que já conhecemos, chamamos de método Iterativo.

def reverse(list):
    reversed_list = []
    for item in list:
        reversed_list.insert(0, item)
    return reversed_list