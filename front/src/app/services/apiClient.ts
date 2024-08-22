export const fetchFromServer = async () => {
  try {
    const response = await fetch('http://localhost:8000/test', {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error(`메인 서버 응답 실패. 상태 코드: ${response.status}`);
    }

    const data = await response.json();
    console.log('프론트: 메인 서버로부터 응답을 받았습니다.', data);
    return data;
  } catch (error) {
    console.error('프론트: 메인 서버 요청 중 에러 발생:', error);
    throw error;
  }
};
