export const fetchFromServer = async () => {
  try {
    const response = await fetch('http://localhost:8000/test', {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error(`서버 응답 실패. 상태 코드: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('apiClient: 요청 중 에러 발생:', error);
    throw error;
  }
};
