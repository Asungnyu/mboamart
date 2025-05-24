from pydantic import BaseModel
from typing import List, Optional
from datetime import datetime

class VendorModel(BaseModel):
    vendor_id: int
    vendor_name: Optional[str]
    phone_number: Optional[str]
    email_address: Optional[str]
    username: Optional[str]
    data_reg: datetime

    class Config:
        from_attributes = True


class CustomerModel(BaseModel):
    # customer_id: int
    customer_name: Optional[str]
    phone_number: Optional[str]
    email_address: Optional[str]
    username: Optional[str]
    data_reg: datetime

    class Config:
        from_attributes = True


class ProductModel(BaseModel):
    p_id: int
    product_name: Optional[str]
    p_description: Optional[str]
    price: Optional[int]
    img_link: Optional[str]
    data_posted: datetime
    vendor_id: Optional[int]

    class Config:
        from_attributes = True


class PaymentModel(BaseModel):
    p_id: int
    product_id: Optional[int]
    vendor_id: Optional[int]
    customer_id: Optional[int]

    class Config:
        from_attributes = True
