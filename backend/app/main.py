from fastapi import FastAPI

app = FastAPI() 

@app.get("/")
def read_root():
    return {"message": "¡Hola, FastAPI esto es una prueba prueba prueba!"}

@app.get("/items/{item_id}")
def read_item(item_id: int, q: str = None):
    
    
    return {"item_id": item_id, "q": q}
