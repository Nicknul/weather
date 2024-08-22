import requests
import json
from fastapi import APIRouter
from ..components.date import now_datatime

weather_router = APIRouter()
@weather_router.get('/weather')
def get_weather_data():
  api_key = 'n8uIBadsqMx4UqYvGKL7l7l2Gkut99sQyvUHXQJdNhOo0pQQRE0vwEgMMYsptCZ91a4L%2Fna8hWLVrGmNkOQS5w%3D%3D'
  url = f'http://apis.data.go.kr/1360000/MidFcstInfoService/getMidTa?serviceKey={api_key}&numOfRows=10&pageNo=1&dataType=JSON&regId=11C20401&tmFc=202408220600'

  response = requests.get(url)
  data = response.json()
  pretty_data = json.dumps(data, indent=2)
  weather_data = data['response']['body']['items']['item']

  print(pretty_data)
  return weather_data
