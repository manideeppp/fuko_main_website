# from fastapi import FastAPI, APIRouter
# from dotenv import load_dotenv
# from starlette.middleware.cors import CORSMiddleware
# from motor.motor_asyncio import AsyncIOMotorClient
# import os
# import logging
# from pathlib import Path
# from pydantic import BaseModel, Field
# from typing import List
# import uuid
# from datetime import datetime


# ROOT_DIR = Path(__file__).parent
# load_dotenv(ROOT_DIR / '.env')

# # MongoDB connection
# mongo_url = os.environ['MONGO_URL']
# client = AsyncIOMotorClient(mongo_url)
# db = client[os.environ['DB_NAME']]

# # Create the main app without a prefix
# app = FastAPI()

# # Create a router with the /api prefix
# api_router = APIRouter(prefix="/api")


# # Define Models
# class ContactMessage(BaseModel):
#     id: str = Field(default_factory=lambda: str(uuid.uuid4()))
#     name: str
#     email: str
#     phone: str = ""
#     message: str
#     timestamp: datetime = Field(default_factory=datetime.utcnow)

# class ContactMessageCreate(BaseModel):
#     name: str
#     email: str
#     phone: str = ""
#     message: str


# # Add your routes to the router instead of directly to app
# @api_router.get("/")
# async def root():
#     return {"message": "Welcome to FUKO Restaurant API"}

# @api_router.post("/contact", response_model=ContactMessage)
# async def create_contact_message(input: ContactMessageCreate):
#     """Submit a contact form message"""
#     contact_dict = input.dict()
#     contact_obj = ContactMessage(**contact_dict)
#     _ = await db.contact_messages.insert_one(contact_obj.dict())
#     return contact_obj

# @api_router.get("/contact", response_model=List[ContactMessage])
# async def get_contact_messages():
#     """Get all contact messages (admin use)"""
#     messages = await db.contact_messages.find().to_list(1000)
#     return [ContactMessage(**msg) for msg in messages]

# # Include the router in the main app
# app.include_router(api_router)

# app.add_middleware(
#     CORSMiddleware,
#     allow_credentials=True,
#     allow_origins=["*"],
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# # Configure logging
# logging.basicConfig(
#     level=logging.INFO,
#     format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
# )
# logger = logging.getLogger(__name__)

# @app.on_event("shutdown")
# async def shutdown_db_client():
#     client.close()

from fastapi import FastAPI, APIRouter
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field
from typing import List
import uuid
from datetime import datetime

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / ".env")

# MongoDB connection
mongo_url = os.environ["MONGO_URL"]
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ["DB_NAME"]]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# -----------------------
# Models
# -----------------------
class ContactMessage(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    phone: str = ""
    message: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)


class ContactMessageCreate(BaseModel):
    name: str
    email: str
    phone: str = ""
    message: str


# -----------------------
# Routes
# -----------------------
@api_router.get("/")
async def root():
    return {"message": "Welcome to FUKO Restaurant API"}


@api_router.post("/contact", response_model=ContactMessage)
async def create_contact_message(input: ContactMessageCreate):
    """Submit a contact form message"""
    contact_dict = input.dict()
    contact_obj = ContactMessage(**contact_dict)
    _ = await db.contact_messages.insert_one(contact_obj.dict())
    return contact_obj


@api_router.get("/contact", response_model=List[ContactMessage])
async def get_contact_messages():
    """Get all contact messages (admin use)"""
    messages = await db.contact_messages.find().to_list(1000)
    return [ContactMessage(**msg) for msg in messages]


# ✅ TEMP: Sample "Google Reviews" endpoint (use for carousel UI now)
@api_router.get("/google-reviews")
async def sample_google_reviews():
    """
    Temporary endpoint to power the Reviews carousel UI.
    Later we will replace this with real Google Places API fetch.
    """
    return {
        "place_name": "FUKO - Crystal Palace",
        "place_rating": 4.9,
        "user_ratings_total": 128,
        "reviews": [
            {
                "id": "1",
                "author_name": "jacob “phamhjacob” pham",
                "profile_photo_url": "https://i.pravatar.cc/150?img=3",
                "rating": 5,
                "text": "Food is sooo good. I recommend you come eat. Tasty and authentic!",
                "relative_time_description": "10 months ago",
                "author_url": "https://google.com",
            },
            {
                "id": "2",
                "author_name": "Sarah Mitchell",
                "profile_photo_url": "https://i.pravatar.cc/150?img=5",
                "rating": 5,
                "text": "Absolutely incredible! The fusion concept works perfectly. Will definitely be back!",
                "relative_time_description": "2 weeks ago",
                "author_url": "https://google.com",
            },
            {
                "id": "3",
                "author_name": "James Chen",
                "profile_photo_url": "https://i.pravatar.cc/150?img=8",
                "rating": 5,
                "text": "Best Korean BBQ in town! Service is fast without compromising quality.",
                "relative_time_description": "1 month ago",
                "author_url": "https://google.com",
            },
            {
                "id": "4",
                "author_name": "Emily Rodriguez",
                "profile_photo_url": "https://i.pravatar.cc/150?img=12",
                "rating": 5,
                "text": "Love the modern take on traditional dishes. The atmosphere is vibrant and welcoming.",
                "relative_time_description": "3 weeks ago",
                "author_url": "https://google.com",
            },
        ],
    }


# Include the router in the main app
app.include_router(api_router)

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s",
)
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
