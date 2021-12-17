import statistics

class Estatistica: 
    def __init__(self, numbers):
        self.numbers_list = numbers

    def media(self):
        return sum(self.numbers_list) / len(self.numbers_list)

    def mediana(self):
        return statistics.median(self.numbers_list)

    def moda(self):
        return statistics.mode(self.numbers_list)

calc_media = Estatistica([2,5,7,4,1,9,5,9,2,6,7,9,4,3,5,7])

print(calc_media.media())
print(calc_media.mediana())
print(calc_media.moda())


from collections import Counter

#trybe
# class Estatistica:
#     @classmethod
#     def media(cls, numbers):
#         return sum(numbers) / len(numbers)

#     @classmethod
#     def mediana(cls, numbers):
#         numbers.sort()
#         index = len(numbers) // 2
#         if len(numbers) % 2 == 0:
#             return (numbers[index - 1] + numbers[index]) / 2

#         return numbers[index]

#     @classmethod
#     def moda(cls, numbers):
#         number, _ = Counter(numbers).most_common()[0]
#         return number