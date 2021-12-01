
arquivo = open('estudantes.txt', 'r')
with open('reprovados.txt', 'w') as file:
    for line in arquivo:
        if int(line.split()[1]) < 6:
            file.write(f'{line.split()[0]}\n')
print(file.closed)