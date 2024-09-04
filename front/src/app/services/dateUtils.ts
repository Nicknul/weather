// services/dateUtils.ts

/**
 * 현재 날짜를 YYYYMMDD 형식으로 반환하는 함수
 */
export const getCurrentDate = (): string => {
  const now = new Date();
  const year = now.getFullYear();
  const month = (now.getMonth() + 1).toString().padStart(2, '0'); // 2자리 숫자
  const date = now.getDate().toString().padStart(2, '0'); // 2자리 숫자
  return `${year}${month}${date}`; // YYYYMMDD 형식으로 반환
};

/**
 * 내일의 날짜를 YYYYMMDD 형식으로 반환하는 함수
 */
export const getTomorrowDate = (): string => {
  const now = new Date();
  now.setDate(now.getDate() + 1); // 날짜를 하루 증가
  const year = now.getFullYear();
  const month = (now.getMonth() + 1).toString().padStart(2, '0');
  const date = now.getDate().toString().padStart(2, '0');
  return `${year}${month}${date}`;
};
