from flask import Flask

app = Flask(__name__)

from routes import homePage
from routes import findSeatBlock
from routes import locateMealPal