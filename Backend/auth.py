from pydantic import BaseModel
from datetime import datetime, timedelta, timezone
from typing import Annotated
from models import Vendor
import jwt
from jose import JWSError, JWTError
from db import get_db
from fastapi import HTTPException, status, Depends, HTTPException

from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from jwt.exceptions import InvalidTokenError
from passlib.context import CryptContext


SECRET_KEY = "ade28ed3adde4d9539f627c70d106cc67f81d66389b293d13fd07b0c70250d27"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MUNITES = 30

class Token(BaseModel):
    access_token: str
    token_type: str

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)

def get_password_hash(password):
    return pwd_context.hash(password)

def create_access_token(data: dict, expires_delta: timedelta | None = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.now(timezone.utc) + expires_delta
    else:
        expire = datetime.now(timezone.utc) + timedelta(minutes=15)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

def get_current_user(token: str = Depends(oauth2_scheme), db = Depends(get_db)):
    exception = HTTPException(status_code=status.HTTP_401_UNAUTHORIZED,
                              detail="Could not valdate credentials",
                              headers={"WWW-Authenticate": "Bearer"})

    try:
        user = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        username: str = user.get("sub")
        if not username:
            raise exception
        else:
            user = db.query(Vendor).filter(Vendor.username == username).first()
            if user is None:
                raise exception
            else:
                return user
    except JWTError:
        raise exception


