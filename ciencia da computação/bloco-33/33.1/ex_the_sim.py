
class Sim:
    def __init__(self, nome, idade, peso, altura):
        self.nome = nome
        self.idade = idade
        self.peso = peso
        self.altura = altura

    def envelhecer(self):
        self.idade += 1
        if self.idade < 21:
            self.altura += 0.5
            
    def engorda(self, inc):
        self.peso += inc
    def emagrecer(self, dec):
        self.peso -= dec
    def crescer(self):
        if self.idade < 21:
            self.altura += 0.5
    def conversa(self, pessoa, conhece):
        if conhece:
            print(f"{self.nome}: Olá {pessoa.nome}, como você está?")
        else:
            print(f"Oi, qual seu nome?")
            
    #exemplo plantao
    # def cumprimentar(self, pessoa):
    #     if self.conhece(pessoa):  # necessário o self pra chamar a função
    #         print(f"{self.nome} cumprimenta {pessoa.nome}")
    #     else:
    #         print(f"{self.nome} deixa {pessoa.nome} no vácuo")
    # def conhece(self, pessoa):
    #     if pessoa.nome == "Gleison":
    #         return True
    #     else:
    #         return False
        

novo_sim = Sim('Leticia', 30, 60, 160)

print(novo_sim.nome)
novo_sim.envelhecer()
print(novo_sim.idade)
print(novo_sim.altura)

teste = Sim('teste', 12, 25, 100)
teste.envelhecer()
teste.engorda(5)
print(teste.peso)
print(teste.altura)
print(vars(teste)) #mostra todas as chaves e valores do objeto

novo_sim.conversa(teste, False)