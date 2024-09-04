// utils/dateUtils.ts

// 현재 날짜를 YYYYMMDD 형식으로 반환
export const getCurrentDate = (): string => {
  const now = new Date();
  const year = now.getFullYear();
  const month = (now.getMonth() + 1).toString().padStart(2, '0'); // 2자리 숫자
  const date = now.getDate().toString().padStart(2, '0'); // 2자리 숫자
  return `${year}${month}${date}`; // YYYYMMDD 형식으로 반환
};

/**
 * YYYYMMDD 형식의 날짜를 받아 요일을 반환
 */
export const getDayOfWeek = (dateStr: string): string => {
  const year = parseInt(dateStr.slice(0, 4));
  const month = parseInt(dateStr.slice(4, 6)) - 1; // 0부터 시작하므로 -1 필요
  const day = parseInt(dateStr.slice(6, 8));

  const date = new Date(year, month, day);
  const dayOfWeek = date.getDay(); // 0: 일요일, 1: 월요일, ..., 6: 토요일

  const dayNames = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];

  return dayNames[dayOfWeek]; // 해당 요일 반환
};
