from abc import ABC, abstractmethod


class Art(ABC):
    @abstractmethod
    def get_title():
        raise NotImplementedError
    

class Poetry(Art):
    pass


class Movie(Art):

    art_type = "Visual"

    def __init__(self, title, gender):
        self.title = title
        self.gender = gender


    def get_title(self):
        return self.title


    def get_gender(self):
        return self.gender


    def update_gender(self, newGender):
        self.gender = newGender
        print(self.gender)
    
    @classmethod
    def get_art_type(cls):
        return cls.art_type



if __name__ == "__main__":
    pulp_fiction = Movie("Pulp Fiction", "Ação")

    assert pulp_fiction.get_title() == "Pulp Fiction"
    assert pulp_fiction.get_gender() == "Ação"

    pulp_fiction.update_gender("Comédia")
    assert pulp_fiction.get_gender() == "Comédia"

    assert Movie.get_art_type() == "Visual"

    assert issubclass(Movie, Art)  # retorna True se Movie herda de Art
    assert issubclass(Poetry, Art)

    try:
        pulp_fiction = Movie("Bacurau", "Drama")
        cancao_exilio = Poetry()
    except TypeError as err:
        # confere a mensagem de erro
        err_msg = (
            "Can't instantiate abstract class Poetry "
            "with abstract method get_title"
        )
        assert err.args[0] == err_msg