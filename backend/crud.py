from sqlalchemy.orm import Session
import models, schemas
from fastapi import HTTPException, status

# Crear un nuevo usuario
def create_user(db: Session, user: schemas.UserCreate):
    existing_user = db.query(models.User).filter(models.User.email == user.email).first()
    if existing_user:
         # Lanza un HTTPException con el código de estado 400 (Bad Request)
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="El correo electrónico ya está registrado"
        )
    
    new_user = models.User(name=user.name, email=user.email, password=user.password)
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return new_user

# Obtener todos los usuarios
def get_users(db: Session):
    return db.query(models.User).all()

# Obtener un usuario por su ID
def get_user_by_id(db: Session, user_id: int):
    return db.query(models.User).filter(models.User.id == user_id).first()

# Actualizar un usuario
def update_user(db: Session, user_id: int, user: schemas.UserCreate):
    db_user = db.query(models.User).filter(models.User.id == user_id).first()
    if db_user is None:
        return None  # Si no se encuentra, no actualizamos
    db_user.name = user.name
    db_user.email = user.email
    db_user.password = user.password
    db.commit()
    db.refresh(db_user)
    return db_user

# Eliminar un usuario
def delete_user(db: Session, user_id: int):
    db_user = db.query(models.User).filter(models.User.id == user_id).first()
    if db_user is None:
        return None  # Si no se encuentra, no eliminamos
    db.delete(db_user)
    db.commit()
    return db_user
