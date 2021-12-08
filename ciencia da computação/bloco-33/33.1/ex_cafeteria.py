# Nome da abstração
# Pedido

# atributos/estados
# - cliente
# - itens consumidos
# - forma de pagamento
# - descontos

# comportamentos
# - calcular total
# - calcular total com descontos

# -----

# Nome da abstração
# Item

# atributos/estados
# - nome
# - preço

# comportamentos
# - alterar preço


class Item:
    def __init__(self, nome, preco):
        self.nome = nome
        self.preco = preco

    def alterar_preco(self, novo_preco):
        self.preco = novo_preco


class Pedido:
    def __init__(self, cliente, itens_consumidos, forma_de_pagar, desconto):
        self.cliente = cliente
        self.itens_consumidos = itens_consumidos
        self.forma_de_pagar = forma_de_pagar
        self.desconto = desconto

    def calcular_total(self):
        total = 0
        for item in self.itens_consumidos:
            total = total + item.preco

        return total

    def calcular_total_com_descontos(self):
        return self.calcular_total() * (1 - self.desconto)


# Para testar!
sanduba = Item('X-tudo', 16.9)
guarana = Item('Guarana', 5.9)
fritas = Item('Fritas crocantes', 10.9)

pedido_mesa_1 = Pedido('Cristiano', [sanduba, guarana, fritas], 'Cartao', 0.1)

print(pedido_mesa_1.calcular_total_com_descontos())