from datetime import datetime

def get_api_datetime():
    now = datetime.now()
    # 현재 시간 부분만 추출
    current_time = now.time()

    # 기준 시간 설정
    morning_time = current_time.replace(hour=6, minute=0, second=0, microsecond=0)
    evening_time = current_time.replace(hour=18, minute=0, second=0, microsecond=0)

    # 날짜 문자열 추출 (예: 20240823)
    date_str = now.strftime("%Y%m%d")

    # 시간 조건에 따라 적절한 시간 문자열을 반환
    if morning_time <= current_time < evening_time:
        return f"{date_str}0600"
    else:
        return f"{date_str}1800"

# 테스트
api_datetime = get_api_datetime()
print(api_datetime)
