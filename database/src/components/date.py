from datetime import datetime

def get_api_datetime():
    now = datetime.now()
    current_time = now.time()

    morning_time = current_time.replace(hour=6, minute=0, second=0, microsecond=0)
    evening_time = current_time.replace(hour=18, minute=0, second=0, microsecond=0)

    date_str = now.strftime("%Y%m%d")

    if morning_time <= current_time < evening_time:
        return f"{date_str}0600"
    else:
        return f"{date_str}1800"

api_datetime = get_api_datetime()
# print(api_datetime)
