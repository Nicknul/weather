import { fetchFromServer } from '../services/apiClient';

const RequestButton = () => {
  const handleClick = async () => {
    try {
      await fetchFromServer();
    } catch (error) {
      console.error('프론트: 버튼 클릭 처리 중 에러 발생:', error);
    }
  };

  return (
    <button className="bg-blue-600 py-2 px-4 rounded-lg text-white hover:bg-blue-700" onClick={handleClick}>
      서버에 요청 보내기
    </button>
  );
};

export default RequestButton;
