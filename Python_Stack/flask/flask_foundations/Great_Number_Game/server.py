from flask import Flask, render_template, request, redirect, session
import random # import the random module
app = Flask(__name__)
app.secret_key = 'key'


@app.route('/')
def index():
    if "random_number" not in session:
        session['random_number'] = random.randrange(0, 101) 
        session['display_guess'] = "none"
    print (session['random_number'])
    return render_template("index.html")

@app.route('/submit_guess', methods=['POST'])
def guess():
    print ("Got the Post Info")    
    if int(request.form['guess']) == int(session['random_number']):
        session['display_guess'] = "correct"
    elif int(request.form['guess']) > int(session['random_number']):
        session['display_guess'] = "high"
    else:
        session['display_guess'] = "low"
    return redirect('/')

@app.route('/reset')
def reset():    
    session['display_guess'] = "none"
    session['random_number'] = random.randrange(0, 101) 
    return redirect('/')

if __name__ == "__main__":
    app.run(debug=True) 