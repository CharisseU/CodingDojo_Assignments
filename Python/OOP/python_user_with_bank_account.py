class BankAccount:
    def __init__(self, int_rate, balance):
        self.int_rate = int_rate
        self.balance = balance

    def deposit(self, amount):
        self.balance += amount
        return self

    def withdraw(self, amount):
        self.balance -= amount
        return self

    def display_account_info(self):
        print(f"Balance: {self.balance}, Interest Rate: {self.int_rate}")
        return self

    def yield_interest(self):
        self.balance = self.balance + (self.balance * self.int_rate)
        return self

class User:
    def __init__(self, username, email):
        self.name = username
        self.email = email
        self.accounts = [BankAccount(1, 2), BankAccount(1, 2), BankAccount(1, 2), BankAccount(1, 2), BankAccount(1, 2), BankAccount(1, 2)]

    def make_deposit(self, amount, account):
        self.accounts[account].balance += amount
        return self

    def make_withdrawal(self, amount, account):
        self.accounts[account].balance -= amount
        return self

    def display_user_balance(self, account):
        print(f"User: {self.name}, Account #{account}, Balance: ${round(self.accounts[account].balance,2)}")
        return self

    def transfer_money(self, from_account, other_user, to_account, amount):
        self.accounts[from_account].balance -= amount
        other_user.accounts[to_account].balance += amount
        return self
# Users
sheldon = User("Cooper, Sheldon", "sheldon@cooper.com")
leonard = User("Hofstadter, Leonard", "leonard@hofstadter.org")
penny = User("Hofstadter, Penny", "penny@hofstadter.edu")
rajesh = User("Koothrappali, Rajesh", "raj@koothrappali.com")
howard = User("Wolowitz, Howard", "howie@wolowitz.com")
amy = User("Farrah_Fowler, Amy", "amy@farrah_fowler.com") 

# User Accounts deposit and withdrawls
sheldon.make_deposit(1200, 1).make_deposit(1200, 2).make_deposit(1300, 1).make_withdrawal(50, 1)
sheldon.accounts[1].yield_interest()
sheldon.accounts[2].yield_interest()
sheldon.display_user_balance(1)
sheldon.display_user_balance(2)

leonard.make_deposit(1500, 1).make_deposit(1500, 2).make_withdrawal(50, 2).make_withdrawal(50, 1)
leonard.accounts[1].yield_interest()
leonard.accounts[2].yield_interest()
leonard.display_user_balance(1)
leonard.display_user_balance(2)


penny.make_deposit(1000, 1).make_deposit(2000, 2).make_withdrawal(300, 1).make_withdrawal(89, 1)
penny.accounts[1].yield_interest()
penny.accounts[2].yield_interest()
penny.display_user_balance(1)
penny.display_user_balance(2)

rajesh.make_deposit(1500, 1).make_deposit(1500, 2).make_withdrawal(75, 2).make_withdrawal(50, 1)
rajesh.accounts[1].yield_interest()
rajesh.accounts[2].yield_interest()
rajesh.display_user_balance(1)
rajesh.display_user_balance(2)

howard.make_deposit(1500, 1).make_deposit(1500, 2).make_withdrawal(750, 2).make_withdrawal(150, 1)
howard.accounts[1].yield_interest()
howard.accounts[2].yield_interest()
howard.display_user_balance(1)
howard.display_user_balance(2)

amy.make_deposit(4000, 1).make_deposit(5000, 2).make_withdrawal(75, 2).make_withdrawal(50, 1)
amy.accounts[1].yield_interest()
amy.accounts[2].yield_interest()
amy.display_user_balance(1)
amy.display_user_balance(2)

# User Transfers from both acccounts to both accounts
sheldon.transfer_money(2, penny, 2, 539)
sheldon.transfer_money(1, leonard, 2, 200)
leonard.transfer_money(1, penny, 2, 539)
leonard.transfer_money(2, sheldon, 2, 200)
amy.transfer_money(1, penny, 1, 510)
amy.transfer_money(1, howard, 1, 102)
rajesh.transfer_money(1, penny, 2, 205)
howard.transfer_money(1, amy, 2, 53)

sheldon.display_user_balance(1)
sheldon.display_user_balance(2)
penny.display_user_balance(1)
penny.display_user_balance(2)
leonard.display_user_balance(1)
leonard.display_user_balance(2)
howard.display_user_balance(1)
howard.display_user_balance(2)
rajesh.display_user_balance(1)
rajesh.display_user_balance(2)
amy.display_user_balance(1)
amy.display_user_balance(2)