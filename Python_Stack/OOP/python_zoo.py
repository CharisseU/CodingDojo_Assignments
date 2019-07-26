class Animal(object):
    def __init__(self, name, age, type):
        self.name = name
        self.age = age
        self.type = type
        self.health = 100
       
    def display_info(self):
        print(f"Animal: {self.name}, Age: {self.age}, Type: {self.type}, Health Index {self.health}")
        return self

    def feed(self):
        self.health += 10        
        return self

class tiger(Animal):
    def __init__(self, name, age, type):
        super().__init__(name, age, type)       
        self.health = 80
        self.happiness = 100

class panther(Animal):
    def __init__(self, name, age, type):
        super().__init__(name, age, type)
        self.health = 80
        self.happiness = 100

class bear(Animal):
    def __init__(self, name, age, type):
        super().__init__(name, age, type)        
        self.health = 80
        self.happiness = 100

class orangatan(Animal):
    def __init__(self, name, age, type):
        super().__init__(name, age, type)
        self.health = 30
        self.happiness = 50

class python(Animal):
    def __init__(self, name, age, type):
        super().__init__(name, age, type)        
        self.health = 40
        self.happiness = 50

class wolf(Animal):
    def __init__(self, name, age, type):
        super().__init__(name, age, type)       
        self.health = 75
        self.happiness = 75

class tiger(Animal):
    def __init__(self, name, age, type):
        super().__init__(name, age, type)       
        self.health = 80
        self.happiness = 100

class tiger(Animal):
    def __init__(self, name, age, type):
        super().__init__(name, age, type)       
        self.health = 80
        self.happiness = 100        

class Zoo:
    def __init__(self, zoo_name):
        self.animals = []
        self.name = zoo_name

    def add_tiger(self, name, age, type):
        self.animals.append(tiger(name, age, type))
        return self

    def add_panther(self, name, age, type):
        self.animals.append(panther(name, age, type))
        return self        

    def add_bear(self, name, age, type):
        self.animals.append(bear(name, age, type))
        return self

    def add_orangatan(self, name, age, type):
        self.animals.append(orangatan(name, age, type))
        return self

    def add_python(self, name, age, type):
        self.animals.append(python(name, age, type))
        return self
        
    def add_wolf(self, name, age, type):
        self.animals.append(wolf(name, age, type))
        return self 
 

    def print_zoo_info(self):
        print ("-"*30, self.name, "-"*30)
        for animal in self.animals:
            animal.display_info()

zoo_list = Zoo("Jungle Book as a Zoo")
zoo_list.add_tiger("Shere_Khan",10,"Bengal Tiger").add_panther("Bagheera",8,"Black Panther").add_bear("Baloo",12,
"Sloth Bear").add_orangatan("King_Louie",20,"Bornean Orangatan").add_python("Kaa",18,"Indian Python").add_wolf("Akela",
10,"Indian Wolf").add_wolf("Rakasha",8,"Indian Wolf")

# zoo_list.print_zoo_info()

zoo_list.animals[1].feed()
zoo_list.animals[3].feed()

zoo_list.print_zoo_info()