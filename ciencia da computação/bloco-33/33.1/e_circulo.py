# Nome da abstração
# Círculo

# atributos/estados
# - PI
# - raio

# comportamentos
# - calcular area (PI * raio * raio)
# - calcular perímetro (2 * PI * raio)

class Circulo:
    PI = 3.14159

    def __init__(self, raio):
        self.raio = raio

    def calcular_area(self):
        return self.raio * self.raio * self.PI

    def calcular_perimetro(self):
        return 2 * self.PI * self.raio


# Para testar!
circulo_1 = Circulo(5)
print(circulo_1.calcular_area())
print(circulo_1.calcular_perimetro())