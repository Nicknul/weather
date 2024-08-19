import requests
from ..components.date import now_datatime
import pprint

api_key = 'n8uIBadsqMx4UqYvGKL7l7l2Gkut99sQyvUHXQJdNhOo0pQQRE0vwEgMMYsptCZ91a4L%2Fna8hWLVrGmNkOQS5w%3D%3D'
url = f'http://apis.data.go.kr/1360000/MidFcstInfoService/getMidTa?serviceKey={api_key}&numOfRows=10&pageNo=1&dataType=JSON&regId=11C20401&tmFc=202408190600'

response = requests.get(url)
data = response.json()

pprint.pprint(data['response']['body']['items']['item'], indent=2)

# print(data['response'])
