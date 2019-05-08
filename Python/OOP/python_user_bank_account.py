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

acct1 = BankAccount(0.05, 500)
acct2 = BankAccount(2.10, 500)
acct3 = BankAccount(1.75, 500)

acct1.deposit(50).deposit(25).deposit(100).withdraw(100).yield_interest().display_account_info()
acct2.deposit(50).deposit(25.50).withdraw(100).withdraw(100).withdraw(50).withdraw(100).yield_interest().display_account_info()
acct3.deposit(50).deposit(25).withdraw(100).withdraw(100).yield_interest().display_account_info()