from ex1 import fizz_buzz

def test_if_number_3_returns_fizz():
    response = fizz_buzz(3)
    assert response[2] == 'fizz'

def test_if_number_5_returns_buzz():
    response = fizz_buzz(5)
    assert response[4] == 'buzz'

def test_if_number_15_returns_fizzbuzz():
    response = fizz_buzz(15)
    assert response[14] == 'fizzBuzz'

def test_if_number_1_returns_1():
    assert fizz_buzz(2) == [1, 2]