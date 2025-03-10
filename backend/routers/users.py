from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
import crud, models, schemas
from database import SessionLocal, engine
from pydantic import BaseModel

# Crear todas las tablas en la base de datos
models.Base.metadata.create_all(bind=engine)

router = APIRouter()

# Dependencia para obtener la sesión de base de datos
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/users/", response_model=schemas.UserResponse)
async def create_user(user: schemas.UserCreate, db: Session = Depends(get_db)):  
    # Llamar al CRUD para crear el usuario en la base de datos
    new_user = crud.create_user(db, user)  # Llamar al CRUD para crear el usuario
    return new_user  # Devolver el usuario creado

# Obtener todos los usuarios
@router.get("/users/", response_model=list[schemas.UserResponse])
def get_users(db: Session = Depends(get_db)):
    return crud.get_users(db)

# Obtener un usuario por su ID
@router.get("/users/{user_id}", response_model=schemas.UserResponse)
def get_user_by_id(user_id: int, db: Session = Depends(get_db)):
    db_user = crud.get_user_by_id(db, user_id)
    if db_user is None:
        raise HTTPException(status_code=404, detail="Usuario no encontrado")
    return db_user

# Actualizar un usuario
@router.put("/users/{user_id}", response_model=schemas.UserResponse)
def update_user(user_id: int, user: schemas.UserCreate, db: Session = Depends(get_db)):
    db_user = crud.update_user(db, user_id, user)
    if db_user is None:
        raise HTTPException(status_code=404, detail="Usuario no encontrado")
    return db_user

# Eliminar un usuario
@router.delete("/users/{user_id}", response_model=schemas.UserResponse)
def delete_user(user_id: int, db: Session = Depends(get_db)):
    db_user = crud.delete_user(db, user_id)
    if db_user is None:
        raise HTTPException(status_code=404, detail="Usuario no encontrado")
    return db_user
