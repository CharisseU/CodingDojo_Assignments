import products
import store

store = store.store("Pop's Grocery")

apple = products.Product("apple", .50, "fruit")
pizza = products.Product("pizza", 4, "frozen food")
bread = products.Product("bread", 2, "bakery")

store.add_product(apple)
store.add_product(pizza)
store.add_product(bread)

store.print_products()
print("Inflated:", store.inflation(.04).print_products())
print("Clearance", store.set_clearance(.75).print_products())

store.sell_product(apple.id).print_products()
store.sell_product(pizza.id).print_products()
store.sell_product(bread.id).print_products()