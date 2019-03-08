import os

import pymongo
from flask import Flask, render_template, request, flash, redirect, url_for
import util.mongo as mongo
# import util.json_setup as parser
# import util.find as find

app = Flask(__name__)
app.secret_key = os.urandom(32)
connected = False
collection = None
pokemons = []
displayPokemon = False

@app.route("/")
def index_page():
	global displayPokemon
	global pokemons
	tempDisplay = displayPokemon
	tempPokemon = pokemons
	if (tempDisplay):
		displayPokemon = False
		pokemons = []
	return render_template("index.html", connected = connected, pokemons = tempPokemon, displayPokemon = tempDisplay)

@app.route("/connect", methods=['POST'])
def add_connection():
	global connection
	ip = request.form['ip']
	try:
		connection = pymongo.MongoClient(server_add)
	except:
		return redirect(url_for('index_page'))
	connected = True;
	db = connection.PinkMangoes
	collection = db.pokemons
	return redirect(url_for('index_page'))

@app.route("/find", methods=['POST'])
def find_pokemon():
	global connection
	searchType = request.form['searchType']
	if (searchType == 'type'):
		displayPokemon = True
		pokemons = mongo.pokemon_name(request.form['query'], collection)
	elif (searchType == 'name'):
		displayPokemon = True
		pokemons = mongo.pokemon_type(request.form['query'], collection)
	return redirect(url_for('index_page'))

if __name__ == "__main__":
    app.debug = True
    app.run()