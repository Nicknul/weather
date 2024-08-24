# database/routers/get_code_router.py

from fastapi import APIRouter, HTTPException
import json

# 라우터 생성
get_code_router = APIRouter()

# JSON 파일 경로
json_file_path = '/Users/waddi/Desktop/weather/storage/json_data/ZoneCode.json'

@get_code_router.post("/get-zone-code")
def get_zone_code(zone_name: str):
    with open(json_file_path, 'r', encoding='utf-8') as file:
        data = json.load(file)

    if zone_name in data:
        return {"zone_code": data[zone_name]}
    else:
        raise HTTPException(status_code=404, detail="지역 이름을 찾을 수 없습니다.")
