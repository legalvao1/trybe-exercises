class Televisao:
    def __init__(self, tamanho_em_polegadas):
        self.__volume = 99
        self.__canal = 21
        self.__taxa_de_aumento_de_volume = 1
        self.__tamanho = tamanho_em_polegadas
        self.__ligada = False

    def aumentar_volume(self):
        if self.__volume < 99:
            self.__volume += self.__taxa_de_aumento_de_volume

    def diminuir_volume(self):
        if self.__volume >= 0:
            self.__volume -= self.__taxa_de_aumento_de_volume

    def modificar_canal(self, novo_canal):
        if novo_canal <= 1 or novo_canal >= 99:
            raise ValueError('Canal indisponível')

        self.__canal = novo_canal

    def ligar_ou_desligar(self):
        self.__ligada = not self.__ligada


# Para testar!

tv_da_sala = Televisao(42)
tv_da_sala.aumentar_volume()
tv_da_sala.modificar_canal(25)
print(vars(tv_da_sala))