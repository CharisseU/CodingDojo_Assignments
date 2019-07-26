from flask import Flask, render_template, redirect, request
from mysqlconnection import connectToMySQL

app = Flask(__name__)


@app.route("/")
def index():
    mysql = connectToMySQL("c+r_pets")
    pets = mysql.query_db("SELECT * FROM pets")
    return render_template("index.html", pets = pets)

@app.route("/add-pet", methods=["POST"])
def add_pet():
    query = "INSERT INTO pets(name, type, breed) VALUES (%(name)s, %(type)s, %(breed)s)"
    data = {
        "name": request.form["name"],
        "type": request.form["type"],
        "breed": request.form["breed"]
    }
    mysql = connectToMySQL("c+r_pets")
    mysql.query_db(query,data)
    
    return redirect("/")
if __name__ == "__main__":
    app.run(debug=True)
