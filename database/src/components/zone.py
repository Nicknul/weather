import json
from fastapi import APIRouter

zone_router = APIRouter()

@zone_router.get("/zone-keys")
def get_zone_keys():
    json_file_path = '/Users/waddi/Desktop/weather/storage/json_data/ZoneCode.json'
    
    with open(json_file_path, 'r', encoding='utf-8') as file:
        data = json.load(file)
    
    keys = data.keys()
    return list(keys)
