from flask import Flask, request, redirect, render_template, flash, session
from mysqlconnection import connectToMySQL

app = Flask(__name__)
app.secret_key = "key"

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/process-results", methods=["POST"])
def process_results():
    print("*"*30)
    if len(request.form["name"]) < 1:
        print("Failed Name")
        flash("Please enter a name")
    if len(request.form["location"]) < 1:
        print("Failed Location")
        flash("Please select a location")
    if len(request.form["language"]) < 1:
        print("Failed Language")
        flash("Please select a language")
    if len(request.form["comment"]) < 3:
        print("Failed Comment")
        flash("Please add a comment")
    
    if not "_flashes" in session.keys():
        mysql = connectToMySQL("dojo_survey")
        query = "INSERT INTO surveys(name, location, language, comment) VALUES ( %(name)s, %(location)s, %(language)s, %(comment)s )"
        data = {
            "name": request.form["name"],
            "location": request.form["location"],
            "language": request.form["language"],
            "comment": request.form["comment"]
        }
        session["new_survey"] = mysql.query_db(query, data)
        print("Passed Validation")
        print("*"*30)
        return redirect("/results")
    else:
        print("Failed Validation")
        print("*"*30)
        return redirect("/")

@app.route("/results")
def show_results():
    
    mysql = connectToMySQL("dojo_survey")
    query = "SELECT * FROM surveys WHERE id = %(id)s"
    data = {
        "id": session["new_survey"]
    }
    new_survey = mysql.query_db(query, data)
    # session.clear()
    return render_template("results.html", survey = new_survey[0])

if __name__ == "__main__":
    app.run(debug=True)