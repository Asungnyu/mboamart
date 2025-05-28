from fastapi import FastAPI, Depends, HTTPException
from models import Payment, Customer, Product, Vendor
from fastapi.middleware.cors import CORSMiddleware
from pydantic_models import UserLoginModel, PaymentModel, CustomerModel, ProductModel, VendorModel
from db import get_db
from auth import get_current_user, get_password_hash, create_access_token, verify_password, Token
app = FastAPI()

origins = [
    "http://127.0.0.1:5174",
    "http://127.0.0.1:5174/",
    "http://localhost:5174/",
    "http://localhost:5174",
["*"],
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers =["*"],
)
@app.get("/")
async def home():
    return {"Data": "Hello world"}
@app.put("/create_customer/")
async def create_custormer(cus: CustomerModel, db = Depends(get_db)):
    cust = Customer(customer_name = cus.customer_name, phone_number = cus.phone_number, email_address = cus.email_address, username=cus.username, password=get_password_hash(cus.password))
    db.add(cust)
    db.commit()
    db.refresh(cust)
    return Customer(**cus.dict())




@app.put("/create_vendor")
async def create_vendor(vn: VendorModel, db = Depends(get_db)):
    vns = Vendor(vendor_name = vn.vendor_name, phone_number = vn.phone_number, email_address = vn.email_address, username=vn.username, password = get_password_hash(vn.password))
    db.add(vns)
    db.commit()
    db.refresh(vns)
    return Vendor(**vn.dict())



@app.put("/create_product")
async def create_product(prdct: ProductModel, db = Depends(get_db)):
    product = Product(product_name=prdct.product_name, p_description= prdct.p_description, price = prdct.price, img_link = prdct.img_link)
    db.add(product)
    db.commit()
    db.refresh(product)
    return Product(**prdct.dict())


@app.get("/all_products",)
async def get_all_product(db = Depends(get_db)):
    res = db.query(Product).all()
    return  res

@app.get("/all_users")
async def get_all_users(db = Depends(get_db)):
    res = db.query(Customer).all()
    return res
@app.get("/all_vendors")
async def get_all_vendors(currenct_user = Depends(get_current_user),db = Depends(get_db)):
    res = db.query(Vendor).all()
    return res

@app.put("/login", response_model=Token)
async def put_test(user: UserLoginModel, db = Depends(get_db)):
    res = db.query(Vendor).filter(Vendor.username == user.username or Vendor.email_address == user.username).first()
    if res:
        if verify_password(user.password,res.password):
            user_data = {"sub": res.username}
            token = create_access_token(user_data)
            return {"access_token" : token, "token_type" :"bearer"}
        else:
            raise HTTPException(status_code=400, detail="Invalid credentials, wrong password")
    else:
        raise HTTPException(status_code=400, detail="Invalid credentials, no user")