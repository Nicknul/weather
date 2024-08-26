import json
from fastapi import APIRouter, Request

zone_router = APIRouter()
json_file_path = '/Users/waddi/Desktop/weather/storage/json_data/ZoneCode.json'

@zone_router.get("/zone-keys")
def get_zone_keys():
    
    with open(json_file_path, 'r', encoding='utf-8') as file:
        data = json.load(file)
    
    keys = data.keys()
    return list(keys)

# @zone_router.post("/db/zone")
# async def receive_zone_data(request: Request):
#     try:
#         data = await request.json()
#         zone = data.get('zone')
#         print(f"데이터베이스 서버: 메인 서버로부터 받은 지역 코드: {zone}")

#         with open(json_file_path, 'r', encoding='utf-8') as file:
#             zone_data = json.load(file)

#         if zone in zone_data:
#             zone_value = zone_data[zone]
#             print(f"데이터베이스 서버: {zone} 지역 코드가 ZoneCode.json 파일에 존재합니다. 해당 값: {zone_value}")
#             return {"message": f"지역 코드 '{zone}'가 ZoneCode.json에 존재합니다.", "value": zone_value}
#         else:
#             print(f"데이터베이스 서버: {zone} 지역 코드는 ZoneCode.json 파일에 존재하지 않습니다.")
#             return {"message": f"지역 코드 '{zone}'는 ZoneCode.json에 존재하지 않습니다."}, 404

#     except Exception as e:
#         print(f"데이터베이스 서버: 에러 발생 - {e}")
#         return {"message": "지역 코드 처리 중 오류가 발생했습니다."}, 500