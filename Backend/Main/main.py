from fastapi import FastAPI, Depends
from models import Payment, Customer, Product, Vendor
from pydantic_models import PaymentModel, CustomerModel, ProductModel, VendorModel
from db import get_db
app = FastAPI()

# engine = 

@app.get("/")
async def home():
    return {"Data": "Hello world"}
@app.put("/create_customer/")
async def create_custormer(cus: CustomerModel, db = Depends(get_db)):
    cust = Customer(customer_name = cus.customer_name, phone_number = cus.phone_number, email_address = cus.email_address, username=cus.username)
    db.add(cust)
    db.commit()
    db.refresh(cust)
    return Customer(**cus.dict())
@app.put("/create_vendor")
async def create_vendor(vn: VendorModel):
    pass
@app.put("/create_product")
async def create_product(prdct: ProductModel):
    pass
@app.get("/all_products",)
async def get_all_product():
    pass
@app.get("/all_users")
async def get_all_users(db = Depends(get_db)):
    res = db.query(Vendor).all()
    return res
