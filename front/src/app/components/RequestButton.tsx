import { fetchFromServer } from '../services/apiClient';

const RequestButton = () => {
  const handleClick = async () => {
    try {
      const data = await fetchFromServer();
      console.log('프론트: 메인 서버로부터 정상적인 응답을 받았습니다.', data);
    } catch (error) {
      console.error('프론트: 요청 중 에러 발생:', error);
    }
  };

  return (
    <button onClick={handleClick} className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
      서버에 요청 보내기
    </button>
  );
};

export default RequestButton;
