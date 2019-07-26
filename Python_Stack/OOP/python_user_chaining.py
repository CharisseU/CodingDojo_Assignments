class User:
    def __init__(self, username, eleonardl):
        self.name = username
        self.eleonardl = eleonardl
        self.account_balance = 0

    def make_deposit(self, amount):
        self.account_balance += amount
        return self

    def make_withdrawal(self, amount):
        self.account_balance -= amount
        return self

    def display_user_balance(self):
        print(f"User: {self.name}, Balance: ${self.account_balance}")
        return self

    def transfer_money(self, other_user, amount):
        self.account_balance -= amount
        other_user.account_balance += amount
        return self

#Users from Big Bang Theory

sheldon = User("Cooper  Sheldon", "sheldon@cooper.com")
leonard = User("Hofstadter Leonard", "leonard@hofstadter.org")
penny = User("Hofstadter Penny", "fujiwara-shoki@hofstadter.edu")

sheldon.make_deposit(200).make_deposit(200).make_deposit(300).make_withdrawal(50).display_user_balance()
leonard.make_deposit(500).make_deposit(500).make_withdrawal(750).make_withdrawal(220).display_user_balance()
penny.make_deposit(100).make_withdrawal(200).make_withdrawal(350).make_withdrawal(89).display_user_balance()
sheldon.transfer_money(penny, 539).display_user_balance()
penny.display_user_balance()