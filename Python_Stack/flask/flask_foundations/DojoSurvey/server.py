from flask import Flask, render_template, session, request, redirect
app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")
@app.route("/result", methods=["post"])
def result():
    user_name = request.form["username"] 
    dojo_name = request.form["dojos"]
    languages = request.form["lang"]
    comments = request.form["comment"]
    options = request.form["gender"]
    subscribe = request.form["subscribe"]
    return render_template("result.html", name=user_name, dojo=dojo_name, lang=languages, comm=comments, gender=options, subscribe=subscribe)


if __name__ == "__main__":
    app.run(debug=True)