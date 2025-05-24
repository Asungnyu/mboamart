from sqlalchemy.dialects.sqlite import *
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, Session

engine = create_engine("sqlite:///./test.db",connect_args={"check_same_thread": False})
session = sessionmaker(autocommit = False, autoflush = False, bind=engine)

def get_db():
    db = session()
    try:
        yield db

    finally:
        db.close()