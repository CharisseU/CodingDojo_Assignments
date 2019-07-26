from flask import Flask, render_template, redirect, request
from datetime import datetime
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/checkout', methods=['POST'])
def checkout():
    print(request.form)
    total = int(request.form['strawberry'])+int(request.form['raspberry'])+int(request.form['blackberry'])+int(request.form['apple'])
    x = datetime.now().strftime("%c")
    fname = request.form['fname']
    lname = request.form['lname']    
    strawberry = request.form['strawberry']
    raspberry = request.form['raspberry']
    blackberry = request.form['blackberry']
    apple = request.form['apple']
    studentid = request.form['studentid']
    return render_template('checkout.html', total=total, date=x)

@app.route('/fruit')         
def fruit():
    return render_template("fruit.html")

if __name__ == '__main__':
    app.run(debug=True)