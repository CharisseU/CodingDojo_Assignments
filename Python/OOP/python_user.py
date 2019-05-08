    
class User:
    def __init__(self, username, email):
        self.name = username
        self.email = email
        self.account_balance = 0

    def make_deposit(self, amount):
        self.account_balance += amount

    def make_withdrawal(self, amount):
        self.account_balance -= amount

    def display_user_balance(self):
        print(f"User: {self.name}, Balance: ${self.account_balance}")

    def transfer_money(self, other_user, amount):
        self.account_balance -= amount
        other_user.account_balance += amount

#Accounts from Big Bang Theory

sheldon = User("Cooper Sheldon", "sheldon@cooper.com")
leonard = User("Hofstadter Leonard", "Leonard@hofstadter.org")
penny = User("Hofstadter Penny", "penny@hofstadter.edu")

sheldon.make_deposit(200)
sheldon.make_deposit(200)
sheldon.make_deposit(300)
sheldon.make_withdrawal(50)
sheldon.display_user_balance()

leonard.make_deposit(500)
leonard.make_deposit(500)
leonard.make_withdrawal(750)
leonard.make_withdrawal(220)
leonard.display_user_balance()

penny.make_deposit(100)
penny.make_withdrawal(200)
penny.make_withdrawal(350)
penny.make_withdrawal(89)
penny.display_user_balance()

sheldon.transfer_money(penny, 539)
sheldon.display_user_balance()
penny.display_user_balance()