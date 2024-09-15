import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

class Config:
    # MongoDB URI - replace localhost and db name with your values
    MONGO_URI = os.getenv('MONGO_URI', 'mongodb://localhost:27017/faqs_db')
