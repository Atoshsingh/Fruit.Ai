from flask import Flask
from flask_pymongo import PyMongo
from flask_cors import CORS
from dotenv import load_dotenv
import os

# Load environment variables
load_dotenv()

app = Flask(__name__)
CORS(app)  

app.config["MONGO_URI"] = os.getenv("MONGO_URI")
mongo = PyMongo(app)

def create_app():
    from routes import faq_blueprint
    app.register_blueprint(faq_blueprint)
    return app

if __name__ == "__main__":
    app = create_app()
    app.run(debug=True)
