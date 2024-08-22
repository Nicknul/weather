from fastapi import FastAPI, HTTPException

app = FastAPI()

@app.get("/db")
async def get_data():
    try:
        data = {"message": "데이터베이스 서버에서 온 응답입니다."}
        print("데이터베이스 서버: 요청을 받고 응답을 처리했습니다.")
        return data
    except Exception as e:
        print(f"데이터베이스 서버: 요청 처리 중 에러 발생: {e}")
        raise HTTPException(status_code=500, detail="데이터베이스 서버: 요청 처리 실패")
