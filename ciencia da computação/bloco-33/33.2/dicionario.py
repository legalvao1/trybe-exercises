# Dicionário de conceitos, parte 2
# Imagem do meme Nazare Confusa
# Ainda mais termos?! Vamos com calma
# Em suma, o que vimos hoje?
# Herança : é uma forma de especializar o comportamento de uma classe com outra classe;
# Classe Abstrata : uma classe que não pode ser instanciada. Utilizada para definir as funções comuns (nem sempre abstratas) e suas assinaturas;
# Métodos Abstratos : um método, ou função, que precisa ser implementado por uma classe herdeira para funcionar corretamente. Criado para definir uma Interface ;
# Interface : conjunto de métodos que um determinado objeto "possui" - ou, o conjunto de mensagens que um objeto é capaz de entender e responder para;
# Composição : incorporar em um objeto outro objeto, para compartilhar código de maneira eficaz;
# Métodos de classe : métodos que podem ser chamados diretamente pela classe definida, e não por sua instância, para definirmos quando instanciar um objeto dessa classe for desnecessário! Utilizam, obrigatóriamente, atributos ou métodos internos da classe em seu funcionamento;
# Métodos estáticos : como os métodos de classe, mas não utilizam nada de sua classe em seu funcionamento.
# E lembre-se: utilize herança para especialização de uma classe geral e composição para compartilhamento de código

# Os quatro pilares da Programação Orientada a Objetos
# Na aula anterior falamos de Encapsulamento e Abstração . Dois dos quatro pilares de POO. Nessa aula falamos, sem contar pra você, dos outros dois, então vamos dar o nome aos bois!
# Herança
# A herança, como o próprio nome já diz, é o princípio que define que uma classe deve ser capaz de herdar seus atributos e métodos de outra. E embora a classe base possa ter tanto métodos abstratos (que precisam ser implementados) quanto métodos concretos (que já estão implementados), a boa prática diz que a herança deve ser usada apenas para especialização. Se você quer apenas compartilhar código, use composição.
# Polimorfismo
# Segundo o dicionário, a palavra "polimorfismo" significa "qualidade ou estado de ser capaz de assumir diferentes formas". Em POO, o polimorfismo é caracterizado quando duas ou mais classes contêm implementações diferentes para métodos com a mesma interface. Nos nossos exemplos de hoje pense, por exemplo, no método serialize , que é definido de forma abstrata na classe Serializer e assume diferentes formas nas classes JSONSerializer e CSVSerializer
# Os quatro pilares em uma frase
# Na Programação Orientada a Objetos, você deve criar entidades ( Abstração ) com as mensagens que escuta bem definidas ( Encapsulamento ), podendo especializar comportamentos de entidades ( Herança ) contanto que garanta que a forma de enviar mensagens é consistente ( Polimorfismo )
