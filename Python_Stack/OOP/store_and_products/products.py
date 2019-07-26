import random

class Product:
    def __init__(self, name, price, category):
        self.name = name
        self.price = price
        self.category = category
        self.id = random.randint(1, 999)
        
    def update_price(self, percentage, increase):
        if increase:
            self.price = self.price + (self.price * percentage)
        else:
            self.price = self.price - (self.price * percentage)
        return self 

    def print_info(self):
        print(f"Product Name: {self.name}, ID #{self.id}, Category: {self.category}, Price: ${self.price}")
        return self