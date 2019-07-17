from routes import app
from flask import render_template

"""
Here to implement feature:
get real time number of people in canteen
"""

def getRealTimeCount():
    # to do
    cnt = 100
    return cnt

@app.route('/')
@app.route('/index', methods=['GET'])
def index():
    cnt = getRealTimeCount()
    # return render_template("index.html", title = 'Home', count = cnt)
    return render_template("Home.html")