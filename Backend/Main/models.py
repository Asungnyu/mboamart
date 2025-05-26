from sqlalchemy import Integer, String, Column, DateTime, func, ForeignKey
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship
from db import engine
Base = declarative_base()
class Vendor(Base):
    __tablename__ = "vendor"
    vendor_name = Column(String(50))
    vendor_id = Column(Integer,primary_key=True, nullable=False, autoincrement=True)
    phone_number = Column(Integer)
    password = Column(String(20))
    email_address = Column(String(50))
    username = Column(String(20))
    data_reg = Column(DateTime, server_default=func.now())

    products = relationship("Product", back_populates="vendor")
   

class Customer(Base):
    __tablename__ = "customer"
    customer_name = Column(String(50))
    customer_id = Column(Integer,primary_key=True, nullable=False, autoincrement=True)
    phone_number = Column(Integer)
    email_address = Column(String(50))
    username = Column(String(20))
    data_reg = Column(DateTime, server_default=func.now())

    

class Product(Base):
    __tablename__ = "product"
    p_id = Column(Integer,primary_key=True, nullable=False, autoincrement=True)
    product_name = Column(String(50))
    p_description = Column(String(200))
    price = Column(Integer)
    img_link = Column(String(60))
    data_posted = Column(DateTime, server_default=func.now())

    vendor_id = Column(Integer, ForeignKey("vendor.vendor_id"))
    vendor = relationship("Vendor", back_populates="products")

class Payment(Base):
    __tablename__ = "payment"
    p_id = Column(Integer,primary_key=True, nullable=False, autoincrement=True)
    product_id = Column(Integer, ForeignKey("product.p_id"))
    vendor_id = Column(Integer, ForeignKey("vendor.vendor_id"))
    costumer_id = Column(Integer, ForeignKey("customer.customer_id"))


Base.metadata.create_all(bind=engine)