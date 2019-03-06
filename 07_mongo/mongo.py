# Existential Ramen -- Sajed Nahian, Rachel Ng
# SoftDev2 pd7
# K07 -- Import/Export Bank
# 2019-03-04

'''

Rick and Morty Characters (first 100) from the Rick and Morty API
https://rickandmortyapi.com/api/character/
https://raw.githubusercontent.com/rachel-ng/re-softdev/master/07_mongo/szechuansauce.json

contents of "results" from the first 5 pages
(everything between the brackets, with added commas between
last and first characters of each new page)
must be inside new brackets for import as a 'json array' by mongo

mongoimport --jsonArray --db existentialramen --collection rickandmorty --drop --file re-softdev/07_mongo/szechuansauce.json
mongod -v --bind_ip_all --noauth --dbpath data/

'''

import pymongo
SERVER_ADDR = "167.99.13.106"
connection = pymongo.MongoClient(SERVER_ADDR)
db = connection.existentialramen
collection = db.rickandmorty

def character_name(name):
    results = collection.find({"name":name})
    for res in results:
        print(res['name'] + " (" + res['status'] + ")\n")
    return results

def character_status(status):
    results = collection.find({"status":status})
    for res in results:
        print(res['name'] + " (" + res['status'] + ")")
    return results

def character_species(species):
    results = collection.find({"species":species})
    for res in results:
        print(res['name'] + " (" + res['status'] + ")\n" + res['species'])
    return results

def character_origin(origin):
    results = collection.find({"origin.name":origin})
    for res in results:
        print(res['name'] + " (" + res['status'] + ")\n" + res['origin.name'])
    return results

def character_location(location):
    results = collection.find({"location.name":location})
    for res in results:
        print(res['name'] + " (" + res['status'] + ")\n" + res['location.name'])
    return results

print(character_status("Alive"))
