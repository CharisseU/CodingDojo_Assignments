from flask import Flask, render_template, request, redirect, session, abort
from mysqlconnection import connectToMySQL  # import the function that will return an instance of a connection
import os

app = Flask(__name__)

@app.route("/")
def index():
    # call the function, passing in the name of our db
    mysql = connectToMySQL('first_flask')
    # call the query_db function, pass in the query as a string
    friends = mysql.query_db('SELECT * FROM friends;')  
    print(friends)
    return render_template("index.html", all_friends=friends)

@app.route("/create_friend", methods=["POST"])
def add_friend_to_db():
    query = ('''
        INSERT INTO friends (first_name, last_name, occupation, created_at, updated_at) 
        VALUES ( %(fn)s, %(ln)s, %(oc)s, NOW(), NOW());''')
    data = {
        "fn": request.form["fname"],
        "ln": request.form["lname"],
        "oc": request.form["occ"]
    }
    mysql = connectToMySQL('first_flask')
    mysql.query_db(query, data)
    print(request.form)
    return redirect("/")


  
if __name__ == "__main__":
    app.run(debug=True)