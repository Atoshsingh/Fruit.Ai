from flask import Blueprint, request, jsonify
from flask_pymongo import PyMongo
from bson import ObjectId
from app import mongo  # Ensure this import matches your app structure

faq_blueprint = Blueprint('faqs', __name__)

@faq_blueprint.route('/faqs', methods=['GET'])
def get_faqs():
    faqs = mongo.db.faqs.find()
    result = []
    for faq in faqs:
        faq['_id'] = str(faq['_id'])  # Convert ObjectId to string
        result.append(faq)
    return jsonify(result)

@faq_blueprint.route('/faqs', methods=['POST'])
def create_faq():
    data = request.get_json()
    if not data or not data.get('question') or not data.get('answer'):
        return jsonify({"error": "Invalid input"}), 400

    faq = {
        'question': data['question'],
        'answer': data['answer'],
        'image': data.get('image', 'default-image-url')
    }
    result = mongo.db.faqs.insert_one(faq)
    faq['_id'] = str(result.inserted_id)  # Convert ObjectId to string
    return jsonify(faq), 201
