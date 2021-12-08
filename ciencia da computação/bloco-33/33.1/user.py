#No Python, a palavra reservada class é usada, como você talvez imagine, para definir entidades.
class User:
    def __init__(self, name, email, password):
        """ Método construtor da classe User. Note que
        o primeiro parâmetro deve ser o `self`. Isso é
        uma particularidade de Python, vamos falar mais
        disso adiante!"""
        self.name = name
        self.email = email
        self.password = password

# Para invocar o método construtor, a sintaxe é NomeDaClasse(parametro 1, parametro 2)
# Repare que o parâmetro self foi pulado -- um detalhe do Python.
meu_user = User("Valentino Trocatapa", "valentino@tinytoons.com", "Grana")

# A variável `meu_user` contém o objeto criado pelo construtor da classe User!


# Bem! Se temos uma entidade User que quer enviar emails de recuperação de senha, em princípio faz sentido que essa entidade saiba enviar emails, certo? Então bora lá! Para uma entidade saber fazer algo, precisamos definir nela uma função que represente essa ação. Algo assim:


class User:
    def __init__(self, name, email, password):
        """ Método construtor da classe User. Note que
        o primeiro parâmetro deve ser o `self`. Isso é
        uma particularidade de Python, vamos falar mais
        disso adiante!"""
        self.name = name
        self.email = email
        self.password = password

    def reset_password(self):
        print("Envia email de reset de senha")


meu_user = User("Valentino Trocatapa", "valentino@tinytoons.com", "Grana")
meu_user.reset_password()

# Olha que interessante! Se definimos numa classe uma função, podemos chamar ela a partir do objeto que criamos! Quando pedimos para um objeto fazer algo, dizemos que estamos enviando uma mensagem àquele objeto . Atenção para isso! Na essência, toda lógica da orientação a objetos parte do envio de mensagens entre objetos.
# No código acima, estamos pedindo para meu_user resetar sua senha! Não nos interessa como a ação será feita, só nos interessa que ela será feita! Imagine duas pessoas escrevendo esse código. A pessoa que cria o objeto e pede que ele resete sua senha não precisa saber como ele faz isso! Temos uma classe bem nomeada, com uma função bem nomeada, e isso basta! Ao invés de gastar tempo precioso entendendo seu código, a pessoa pode usá-lo sem esse esforço!

class User:
    # Não preciso saber como a classe funciona, lalalalala

    def reset_password(self):
      # A classe tem essa função? Ótimo! Pra mim basta!


# Já sei o suficiente pra agir!
meu_user = User("Valentino Trocatapa", "valentino@tinytoons.com", "Grana")
meu_user.reset_password()

# Beautiful.
# Agora pause e imagine uma aplicação com dez entidades. Vinte. Cinquenta. Imagine ter que saber como cada uma funciona para codar e utilizá-las. Agora imagine que basta saber qual função usar e o resto acontece automagicamente? Esse é o poder da Programação Orientada a Objetos! Se você já chamou a função de um Service, numa aplicação MSC , e a usou sem saber como ela estava feita, saiba que, no fundo, o que você fez foi usufruir do benefício da Programação Orientada a Objetos, que embasa o MSC!
# Toda arquitetura que tenha como base a Programação Orientada a Objeto quer isso. Quer que você defina entidades e as use sem entender como elas funcionam . Faz sentido? Pois saiba que você acabou de conhecer dois dos quatro pilares da Programação Orientada a Objetos. O pilar de definir entidades chama-se Abstração . O pilar de usá-las sem entender como elas funcionam se chama Encapsulamento .
# Mas calma! Antes de continuarmos, vamos parar para tomar nota desse monte de nomes que estamos aprendendo!