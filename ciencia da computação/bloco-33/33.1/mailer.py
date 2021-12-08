# Mailer - Criando mais entidades
# Tudo muito bem, tudo muito bom, mas ainda precisamos criar a lógica de envio de email, certo? Não se preocupe, nós fizemos ela para você, mas acompanhe porque é importante!
# Para codarmos um envio de email vamos usar dois módulos, o ssl e o smtplib . Ambos nos permitirão logar num servidor de emails e, de lá, fazer um envio de forma segura através da rede. Para conseguirmos fazer isso, precisaremos ter em mãos algumas informações: o email enviador, a senha do email enviador, o email que receberá a mensagem, o assunto e o corpo do email. Precisamos dessas informações à disposição, então vamos colocar elas no nosso construtor para, então, criar a lógica da nossa ação:

import smtplib
import ssl


class User:
    def __init__(self, name, email, password, from_email, from_password):
        self.name = name
        self.email = email
        self.password = password
        self.from_email = from_email
        self.from_password = from_password

    def reset_password(self):
        """ Só com isso a função não irá funcionar! O email em
        questão não existe e costuma ser necessário configurar
        permissões no servidor de email para o envio ocorrer. Se
        quiser, explore isso como exercício bônus! (Por segurança,
        crie uma nova conta de e-mail para testar).
        Por hora, basta entender a lógica aqui! """

        subject = "Reset your password"
        message = "Instruções para resetar a senha, com o link de resetar"
        body = f"Subject:{subject}\n\n{message}".encode('utf-8')
        context = ssl.create_default_context()
        with smtplib.SMTP_SSL(
            "smtp.gmail.com", 465, context=context
        ) as server:
            server.login(self.from_email, self.from_password)
            try:
                server.sendmail(self.from_email, self.email, body)
            except (smtplib.SMTPRecipientsRefused, smtplib.SMTPSenderRefused):
                raise ValueError


meu_user = User("Valentino Trocatapa",
                "valentino@tinytoons.com",
                "Grana",
                "password_reset@teste.com",
                "myverysafepassword")
meu_user.reset_password()

# Feitas as devidas configurações no servidor do email essa lógica funciona, mas temos um problema sério aqui! Você sabe dizer qual é?
# Leia o código do final. Estamos criando uma entidade (aliás, estamos instânciando um objeto!) User . Para criá-la, estamos passando seu nome, email, senha e... o email de envio de reset de senha e a senha desse email. Se tivermos mil users teremos sempre o mesmo email de reset e a mesma senha! Note como o construtor de User está lotado de atribuições! E cada instância que criarmos vai ter uma cópia das informações do enviador de emails. Pra quê? Pra nada. Não precisamos disso.
# Bora arrumar o código então?
# Lembre-se do primeiro pilar de POO, a Abstração ! Se uma lógica parece não pertencer a uma entidade, extraia-a para uma outra entidade, ou para uma entidade nova! Sempre comece por aí para organizar o seu código. No nosso caso, que tal criamos um enviador de emails? O nome faz sentido, não faz? O nome mais literal possível que podemos dar para uma entidade que envia emails é Enviador de Emails . Em inglês, Mailer . Então é esse o nome que daremos. Bom!
# Ou ainda, pense nas Mensagens . Qual é mais simples? "User, resete sua senha!" ou "Enviador de emails, resete a senha deste User!" . Ambas são corretas, mas a primeira é melhor no Encapsulamento . A pessoa que vai usar o seu código não precisa saber que, por trás dos panos, há uma entidade Mailer trabalhando com você. Na segunda implementação ela precisa saber disso! A primeira alternativa exige que a pessoa saiba menos da sua lógica e, portanto, a encapsula melhor! Sendo assim, nosso exemplo fica assim:
import smtplib
import ssl


class User:
    def __init__(self, name, email, password):
        self.name = name
        self.email = email
        self.password = password

    def reset_password(self):
        meu_mailer = Mailer("password_reset@teste.com", "myverysafepassword", self.email)
        meu_mailer.send_email("Reset your password", "Instruções para resetar a senha, com o link de resetar")


class Mailer:
    def __init__(self, from_email, from_password, to_email):
        self.from_email = from_email
        self.from_password = from_password
        self.to_email = to_email

    def send_email(self, subject, message):
        body = f"Subject:{subject}\n\n{message}".encode('utf-8')
        context = ssl.create_default_context()
        with smtplib.SMTP_SSL(
            "smtp.gmail.com", 465, context=context
        ) as server:
            server.login(self.from_email, self.from_password)
            try:
                server.sendmail(self.from_email, self.to_email, body)
            except (smtplib.SMTPRecipientsRefused, smtplib.SMTPSenderRefused):
                raise ValueError


meu_user = User("Valentino Trocatapa", "valentino@tinytoons.com", "Grana")
meu_user.reset_password()
# Assim resolvemos o nosso problema com o máximo de lógica encapsulada. E ao separarmos as nossas entidades , nós deixamos a entidade Mailer, de quebra, muito mais genérica! Ela não precisa enviar só emails de reset de senha agora. Ela pode enviar quaisquer emails! 🤩

# Mensagens e Métodos
# Vamos ao último nome do dia! Cada objeto pode receber mensagens. O meu_user.reset_password() , por exemplo, pode ser lido como "Meu user, resete a sua senha!" . Dentro da classe User , definimos a função reset_password que irá conter a lógica de resetar senha. Quando você manda uma instância de User resetar a senha, essa função sabe o que deve ser feito.
# Funções que "respondem mensagens" se chamam Métodos . Usualmente ela será nomeada com um verbo ( 'Reset your password!' vira reset_password , por exemplo).
# No contexto de POO, todas as interações são feitas por troca de mensagens! Isso significa que ou você envia uma mensagem para um objeto ou você não faz nada com ele. O bom Encapsulamento faz com que nós só precisemos saber do nome de uma classe e seus métodos para interagir com ela. No Python, mesmo quando você altera um atributo diretamente, por trás dos panos o que ele faz é enviar uma mensagem de atualização para a classe!