telefone = {
    'ABC': 2,
    'DEF': 3,
    'GHI': 4,
    'JKL': 5,
    'MNO': 6,
    'PQRS':7,
    'TUV': 8,
    'WXYZ':9,
}

def get_num(l):
    for i in telefone.items():
        if l in i[0]:
            return i[1]

def phone_numb(string):
    if not 1 < len(string) <= 30:
        raise ValueError('Invalid entries')
    number = ''
    for l in string:
        if l == '1' or l == '0' or l == '-':
            number += l
        else:    
            number += str(get_num(l))
    return number

print(phone_numb('1-HOME-SWEET-HOME'))
print(phone_numb('MY-MISERABLE-JOB'))
