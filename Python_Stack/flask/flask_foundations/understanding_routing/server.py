from flask import Flask
app = Flask(__name__)

@app.route("/")
def hello():
    print("*"*80)
    print ("This is running from the server.py")
    return "Hello!!!"

# localhost:5000/ - have it say "Hello World!"    
@app.route('/<hello_world>')         
def hello_world(hello_world):
    print("In the Hello_World function")
    return 'Hello World!' 

#localhost:5000/dojo - have it say "Dojo!"
@app.route("/dojo")
def dojo():  
    print("In the Dojo function")  
    return "Dojo!"


@app.route('/name')           
def hello_person(name):
    print("*"*80)
    print("In the Hello_person Function")
    print(name)
    return f"Hello {name}!" 

@app.route('/dojo/<name>')           
def say(name):
      print("*"*80)
      str=isinstance
      if isinstance(name, str) == False :
           return "This is not a string!"
      print("In the Say name Function")
      print(name)
      return (f"Hi {name}!")

@app.route("/dojo/<name>")
def hello_user(name):
    if isinstance(name, str) == False :
      return "You didn't give me a string!"
      print("In the Dojo name Function")
      print(name)
    return "Hi " + name + "!"

@app.route('/users/<username>/<id>') # for a route '/users/____/____', two parameters in the url get passed as username and id
def show_user_profile(username, id):
    print(username)
    print(id)
    return ("username: " + username + ", id: " + id)  


@app.route("/repeat/<num>/<word>")
def repeatword(num, word):
    print (word)
    return str(word) * int(num)


if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    
    app.run(debug=True) 
