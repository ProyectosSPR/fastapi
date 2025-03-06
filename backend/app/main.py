from fastapi import FastAPI
from .routes import users
from .database import engine, Base

Base.metadata.create_all(bind=engine)

app = FastAPI()

app.include_router(users.router)

@app.get("/")
def read_root():
    return {"message": "Backend FastAPI funcionando 🚀"}
