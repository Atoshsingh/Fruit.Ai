from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class FAQ(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    question = db.Column(db.String(200), nullable=False)
    answer = db.Column(db.String(500), nullable=False)

    def __repr__(self):
        return f'<FAQ {self.question}>'
