import json

# JSON 파일의 절대 경로를 직접 설정
json_file_path = '/Users/waddi/Desktop/weather/storage/json_data/ZoneCode.json'

# JSON 파일을 열고 데이터를 읽어오기
with open(json_file_path, 'r', encoding='utf-8') as file:
    data = json.load(file)

# JSON 객체의 키 이름 가져오기
keys = data.keys()

# 키 이름 출력
print("Keys:", list(keys))
