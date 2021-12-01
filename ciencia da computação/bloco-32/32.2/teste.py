import csv

with open("teste.csv") as file:
    reader = csv.DictReader(file)
    for row in reader:
        print(row)
