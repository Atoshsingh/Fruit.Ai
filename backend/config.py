import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

class Config:
    MONGO_URI = os.getenv('MONGO_URI', 'your_mongoDb_connection_String')
