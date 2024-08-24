import json
from fastapi import APIRouter, Request

zone_router = APIRouter()

@zone_router.get("/zone-keys")
def get_zone_keys():
    json_file_path = '/Users/waddi/Desktop/weather/storage/json_data/ZoneCode.json'
    
    with open(json_file_path, 'r', encoding='utf-8') as file:
        data = json.load(file)
    
    keys = data.keys()
    return list(keys)

@zone_router.post("/db/zone")
async def receive_zone_data(request: Request):
    try:
        data = await request.json()
        zone = data.get('zone')
        print(f"데이터베이스 서버: 메인 서버로부터 받은 지역 코드: {zone}")

        # 응답을 메인 서버로 반환
        return {"message": "지역 코드를 정상적으로 처리했습니다."}
    except Exception as e:
        print(f"데이터베이스 서버: 에러 발생 - {e}")
        return {"message": "지역 코드 처리 중 오류가 발생했습니다."}, 500