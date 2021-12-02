import pytest
from ex2 import phone_numb

def test_abc_should_be_converted_in_2():
    assert phone_numb("ABC") == "222"


def test_def_should_be_converted_in_3():
    assert phone_numb("DEF") == "333"


def test_ghi_should_be_converted_in_4():
    assert phone_numb("GHI") == "444"


def test_jkl_should_be_converted_in_5():
    assert phone_numb("JKL") == "555"


def test_mno_should_be_converted_in_6():
    assert phone_numb("MNO") == "666"


def test_pqrs_should_be_converted_in_7():
    assert phone_numb("PQRS") == "7777"


def test_tuv_should_be_converted_in_8():
    assert phone_numb("TUV") == "888"


def test_wxyz_should_be_converted_in_9():
    assert phone_numb("WXYZ") == "9999"


def test_dashe_zero_one_should_be_keeped():
    assert phone_numb("0-1") == "0-1"


def test_expression_should_be_at_least_one_char():
    with pytest.raises(ValueError):
        phone_numb("")


def test_expression_maximum_are_thirty_chars():
    long_expression = (
        "1111111111"  # 10 chars
        "1111111111"
        "1111111111"
        "1"
    )
    with pytest.raises(ValueError):
        phone_numb(long_expression)
