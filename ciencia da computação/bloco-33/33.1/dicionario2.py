# Dicionário de conceitos, parte dois

# Há várias formas de se resolver um mesmo problema, todas com vantagens e desvantagens. Há várias formas de se dividir um problema em entidades também, e várias podem ser igualmente corretas. Vamos treinar isso bastante ainda, então não se preocupe por estar com dúvidas! O importante é sempre começar do simples e evoluir devagar, refatorando sempre, na medida em que o problema cresce. Tendo os pilares de POO em mente, a sua evolução te levará para um bom caminho!
# Exemplo de uma outra forma de resolver o problema do dia, com as classes `User`, `Mailer`, `EmailNotFoundError` e `UserService`
# Exemplo de uma outra forma de resolver o problema do dia, com as classes `User`, `Mailer`, `EmailNotFoundError` e `UserService`
# Para rever os conceitos que aprendemos hoje vamos destrinchar esse exemplo!


# Classe
# Uma classe consiste numa espécie de molde para criação de novos objetos, definindo seus atributos e métodos comuns que serão utilizados por ele.
# Esse molde pode ser utilizado para definições de diferentes tipos de dados. No exemplo acima temos:
# User: Representa a entidade que armazenará as informações de uma pessoa usuária;
# Mailer: Representa um gerenciador de envio de emails, que pode ser utilizado em qualquer parte do sistema;
# EmailNotFoundError: Representa uma exceção customizada, que é lançada pelo gerenciador de envio de emails, caso não seja possível fazer este envio devido a algum dos emails não existir;
# UserService: Representa um serviço que implementa as regras de negócio associadas a uma pessoa usuária, como por exemplo, o envio de um email de redefinição de senha para o caso da pessoa ter esquecido sua senha.
# Percebeu que as classes podem representar moldes de diversos tipos?
# Isso é uma das coisas que nos permite dividir tão bem as responsabilidades ao usar OO.


# Objeto/Instância
# Com a classe criada, podemos instanciar um objeto. Instanciar é o ato de criar um novo objeto/instância a partir da classe definida.
# Se formos fazer um paralelo, podemos dizer que a classe define os comportamentos e o objeto armazena o estado.
# A forma de fazer isso varia de linguagem para linguagem. Observe uma instanciação na prática em Python:
# Copiar
# mailer = Mailer(
#   "app-dev@email.com",
#   "123456",
#   "user@email.com"
# )
# Nesse exemplo criamos uma instância de um gerenciador de email com as informações passadas por parâmetro.


# Atributo
# Atributos são onde as informações de uma instância são armazenadas. Eles representam o estado do objeto.
# No nosso exemplo as classes armazenam as seguintes informações:
# User: Uma instância de User armazena informações de nome, email e senha de cada pessoa usuária da nossa aplicação;
# Mailer: Uma instância de Mailer armazena as informações de quem envia e quem recebe o email, seu assunto e seu conteúdo;
# EmailNotFoundError: Classes não precisam necessariamente ter atributos. Essa classe por exemplo, apenas representa um tipo de exceção, não definindo nenhum atributo;
# UserService: Atributos não precisam armazenar apenas informações de tipos de dados primitivos, podendo armazenar também instâncias de outras classes, ou até mesmo uma classe em si. Nesse caso, uma instância da classe UserService armazena uma instância de uma pessoa usuária e uma classe de gerenciamento de emails.


# Método
# Métodos são funções que possuem acesso aos dados armazenados em atributos, podendo implementar comportamentos e alterar seus estados.
# Como um método realiza uma ação, a utilização de verbos é uma boa prática para nomeá-los. Nomes como redefinir_senha ou reset_password poderiam ser utilizados para um método que implementa o comportamento de redefinição de senha.


# Construtor
# É um método especial utilizado para inicializar instâncias de uma classe e que pode receber parâmetros usados para definir as informações armazenadas em seus atributos.
# O nome e a implementação desse método especial varia de linguagem para linguagem, bem como a forma de invocá-lo.


# Abstração - Pilar da Programação Orientada a Objetos
# No contexto de orientação a objeto, este conceito está ligado à definição de características de uma classe de forma abstrata, que aqui significa definir uma classe focando nas mensagens que ela responde e nos atributos de que precisa.
# Apesar de termos definido o pilar dessa forma, entenda que a palavra abstração pode ser usada em outros contextos, se referindo a outras coisas. É importante não confundir as coisas! No próximo capítulo falaremos mais disso.


# Encapsulamento - Pilar da Programação Orientada a Objetos
# Encapsulamento se trata de esconder parte da implementação de uma classe, exibindo de forma pública somente aquilo que é necessário para que o cliente consuma sua classe e deixando detalhes da implementação protegidos ou privados. Porém, apesar de darmos nomes a essas restrições de visibilidade, elas podem ser implementadas de diferentes maneiras dependendo de linguagem para linguagem e não necessariamente precisam ter uma palavra-chave associada (como é o caso do Python e do JavaScript, por exemplo).
