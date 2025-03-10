from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import users  # Importa tu router para usuarios

app = FastAPI()

# Configurar CORS para permitir solicitudes desde tu frontend (Qwik)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Cambia esto si tu frontend está en otro puerto o dominio
    allow_credentials=True,
    allow_methods=["*"],  # Permite todos los métodos HTTP (GET, POST, etc.)
    allow_headers=["*"],  # Permite todos los encabezados
)

# Incluye el router de usuarios
app.include_router(users.router)

@app.get("/")
def read_root():
    return {"message": "Welcome to FastAPI with PostgreSQL"}

