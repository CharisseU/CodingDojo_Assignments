from flask import Flask, render_template
app = Flask(__name__)


@app.route("/")
def checker_default():
    return render_template("index.html",x=int(8), y=int(8))


@app.route("/<x>/<y>/<light>/<dark>")
def checker(x, y, light, dark):
    return render_template("index.html", x=int(x), y=int(y), light=light, dark=dark)

if __name__=="__main__":
    app.run(debug=True)