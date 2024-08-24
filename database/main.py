# src/main.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from src.api.api import api_router
from src.components.zone import zone_router

app = FastAPI()

app.include_router(api_router)
app.include_router(zone_router)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8080)
