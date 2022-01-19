def merge_sort(array):
    # caso base: se já atingiu a menor porção (1)
    if len(array) <= 1:
        # retorne o array
        return array
    # calculo do pivot: índice que indica onde o array será particionado
    # no caso, metade
    mid = len(array) // 2
    # para cada metade do array
    # chama a função merge_sort de forma recursiva
    left, right = merge_sort(array[:mid]), merge_sort(array[mid:])
    # mistura as partes que foram divididas
    return merge(left, right, array.copy())


# função auxiliar que realiza a mistura dos dois arrays
def merge(left, right, merged):

    left_cursor, right_cursor = 0, 0

    # enquanto nenhumas das partes é percorrida por completo
    while left_cursor < len(left) and right_cursor < len(right):

        # compare os dois itens das partes e insira no array de mistura o menor
        if left[left_cursor] <= right[right_cursor]:
            merged[left_cursor + right_cursor] = left[left_cursor]
            left_cursor += 1
        else:
            merged[left_cursor + right_cursor] = right[right_cursor]
            right_cursor += 1
    # a iteração acima irá inserir os elementos de forma ordenada

    # quando uma das partes termina, devemos garantir
    # que a outra sera totalmente inserida no array de mistura

    # itera sobre os elementos restantes na partição "esquerda"
    # inserindo-os no array de mistura
    for left_cursor in range(left_cursor, len(left)):
        merged[left_cursor + right_cursor] = left[left_cursor]

    # itera sobre os elementos restantes na partição "direita"
    # inserindo-os no array de mistura
    for right_cursor in range(right_cursor, len(right)):
        merged[left_cursor + right_cursor] = right[right_cursor]

    return merged


print(merge_sort([100, 4, 6, 33, 56, 67]))


# A separação em partes traz uma complexidade O(log n) , e as misturas O(n) . Com isso, temos uma complexidade de O(n log n) , independente do array estar ordenado por completo, não ordenado, ou parcialmente ordenado.
# Como é um algoritmo recursivo, consome mais memória, possuindo uma complexidade de espaço O(n) , ou seja, cresce linearmente proporcional a entrada de dados.

# Quick Sort
# O quicksort é um algoritmo que também utiliza da técnica de divisão e conquista. Sua estratégia de ordenação consiste em determinar um elemento pivô (nome dado ao elemento que divide o array em porções menores). Em seguida, todos os elementos maiores que o pivô serão colocados a direita e os menores a esquerda. Com isto, o pivô estará em sua posição correta e teremos duas sub coleções não ordenados ao seu redor. Recursivamente ordenamos os sub arrays, repetindo o mesmo processo de escolha do pivô e particionamento (divisão).
# Como funciona o algoritmo?

# Vamos supor os números não ordenados
# - coleção = 7 1 2 5 4 6 3

# # Faremos a escolha do elemento pivô.
# # Este elemento será o responsável por particionar (dividir) a lista.
# # Posso escolher qualquer elemento neste passo e, por isso,
# # vou escolher o elemento do meio
# - pivot = 5

# # Movemos todos os elementos menores para a esquerda e os maiores para a direita (a)
# - 1 2 4 3    5    7 6

# # Precisamos ordenar as coleções geradas,
# # começando com a lista de elementos inferiores
# - 1 2 4 3

# # Novamente escolhemos o pivot
# - pivot = 2

# # Novamente fazemos a divisão (b)
# - 1    2    4 3

# # A lista à esquerda já não tem como ser particionada,
# # porém a da direita ainda pode ser particionada (c)
# - 4 3

# # Escolhendo o pivô e movendo os outros elementos
# # chegaremos a
# - 3    4

# # Agora precisamos o processo de conquista,
# # voltando recursivamente ao passo (c), que pediu para ordenar
# # a sub coleção 4 3, temos como resposta
# - 3 4
# # essa resposta, nos faz retornar ao passo (b), onde concatenaremos ao pivô a ordenação do lado direito e esquerdo,
# # resultando em
# - 1 2 3 4

# # Vamos agora ver o outro lado do passo (a)
# - 7 6

# # realizando o mesmo processo
# # após escolher o pivô e realizar os movimentos teremos
# - 6    7

# # Por fim a resposta é utilizada lá no passo (a) para concatenarmos os dois lados
# # e termos por fim a lista ordenada
# - 1 2 3 4 5 6 7

# A animação abaixo ilustra como um algoritmo de ordenação por inserção funciona: (QUICKSORT)

# Vamos ver um exemplo de implementação:

def quicksort(array, low, high):
    # caso base: se já atingiu a menor porção (1)
    if len(array) == 1:
        # retorne o array
        return array

    # os índices irão se cruzar quando o array estiver ordenado
    if low < high:
        # índice da partição é o índice onde o array foi divido
        # e é determinado a partir do pivô.
        # Este índice já está ordenado
        partition_index = partition(array, low, high)

        # Ordena os elementos presentes antes da partição (menores que o pivô)
        # e depois (maiores que o pivô)
        quicksort(array, low, partition_index - 1)
        quicksort(array, partition_index + 1, high)


# função auxiliar responsável pela partição do array
# escolhendo um pivô e fazendo movimentações dos sub arrays gerados
def partition(array, low, high):
    # índice do menor elemento
    i = low - 1
    # o pivô será escolhido
    # através do índice que divide o array
    pivot = array[high]  # pivot

    # itera sobre os elementos
    for j in range(low, high):
        print(range(low, high))
        # se o elemento corrente é menor ou igual ao pivô
        if array[j] <= pivot:

            # incrementa o índice do menor elemento
            i = i + 1
            array[i], array[j] = array[j], array[i]
    array[i + 1], array[high] = array[high], array[i + 1]

    return i + 1


array = [100, 4, 6, 33, 56, 67]
quicksort(array, 0, len(array) - 1)
print(array)

# Normalmente esta ordenação ocorre com complexidade O(n log n) , porém em um pior caso (onde o array está ordenado de forma inversa), ocorrerá com complexidade O(n²) .
# 💡 Curiosidade: Por baixo dos panos, quando você utiliza a função sorted padrão do python ou faz array.sort , você está utilizando uma ordenação chamada TimSort , que é um algoritmo híbrido que mistura o merge sort e insertion sort. É também utilizado pela linguagem Java para ordenar arrays.