import requests
import json
from fastapi import APIRouter, Request
from ..components.date import api_datetime

json_file_path = '/Users/waddi/Desktop/weather/storage/json_data/ZoneCode.json'

api_router = APIRouter()

@api_router.post("/db/zone")
async def receive_zone_data(request: Request):
    try:
        data = await request.json()
        zone = data.get('zone')
        print(f"데이터베이스 서버: 메인 서버로부터 받은 지역 코드: {zone}")

        with open(json_file_path, 'r', encoding='utf-8') as file:
            zone_data = json.load(file)

        if zone in zone_data:
            zone_value = zone_data[zone]
            print(f"데이터베이스 서버: {zone} 지역 코드가 ZoneCode.json 파일에 존재합니다. 해당 값: {zone_value}")

            # 중기예보 API를 호출합니다.
            api_key = 'n8uIBadsqMx4UqYvGKL7l7l2Gkut99sQyvUHXQJdNhOo0pQQRE0vwEgMMYsptCZ91a4L%2Fna8hWLVrGmNkOQS5w%3D%3D'
            url = f'http://apis.data.go.kr/1360000/MidFcstInfoService/getMidTa?serviceKey={api_key}&numOfRows=10&pageNo=1&dataType=JSON&regId={zone_value}&tmFc={api_datetime}'
            print(f"중기예보 API URL: {url}")

            response = requests.get(url)
            weather_data = response.json()
            pretty_data = json.dumps(weather_data, indent=2)
            print(pretty_data)

            # 필요한 날씨 데이터를 반환
            return weather_data['response']['body']['items']['item']
        else:
            print(f"데이터베이스 서버: {zone} 지역 코드는 ZoneCode.json 파일에 존재하지 않습니다.")
            return {"message": f"지역 코드 '{zone}'는 ZoneCode.json에 존재하지 않습니다."}, 404

    except Exception as e:
        print(f"데이터베이스 서버: 에러 발생 - {e}")
        return {"message": "지역 코드 처리 중 오류가 발생했습니다."}, 500
