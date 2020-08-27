from flask import Flask, render_template
from script import get_stuff
from markupsafe import Markup

app = Flask(__name__)

a_variable = Markup(get_stuff())


@app.route('/')
def hello_world():
    return render_template('index.html', a_var=a_variable)

# set FLASK_APP=server.py
# set FLASK_ENV=development
# flask run
