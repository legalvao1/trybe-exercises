from abc import ABC, abstractmethod
from math import pi as PI

class Figura_Geometrica(ABC):
    @abstractmethod
    def area(self):
        raise NotImplementedError

    @abstractmethod
    def perimetro(self):
        raise NotImplementedError

class Quadrado(Figura_Geometrica):
    def __init__(self, lado):
        self.lado = lado

    def area(self):
        return self.lado * self.lado

    def perimetro(self):
        return 4 * self.lado


class Retangulo(Figura_Geometrica):
    def __init__(self, base, altura):
        self.base = base
        self.altura = altura

    def area(self):
        return self.base * self.altura

    def perimetro(self):
        return 2 * (self.base + self.altura)

class Circulo(Figura_Geometrica):
    def __init__(self, raio):
        self.raio = raio

    def area(self):
         return PI * self.raio * self.raio

    def perimetro(self):
        return 2 * PI * self.raio


q = Quadrado(4)
r = Retangulo(4, 6)
c = Circulo