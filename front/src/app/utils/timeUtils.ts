// utils/timeUtils.ts

/**
 * 현재 시간을 기준으로 base_time을 반환하는 함수
 */
export const getBaseTime = (): string => {
  const now = new Date();
  let hour = now.getHours().toString().padStart(2, '0');
  let minutes = now.getMinutes().toString().padStart(2, '0');

  const nowTime = Number(hour + minutes); // 현재 시간을 숫자로 변환 (예: 1330)

  let baseTime = '';

  if (nowTime >= 210 && nowTime < 510) {
    baseTime = '0200';
  } else if (nowTime >= 510 && nowTime < 810) {
    baseTime = '0500';
  } else if (nowTime >= 810 && nowTime < 1110) {
    baseTime = '0800';
  } else if (nowTime >= 1110 && nowTime < 1410) {
    baseTime = '1100';
  } else if (nowTime >= 1410 && nowTime < 1710) {
    baseTime = '1400';
  } else if (nowTime >= 1710 && nowTime < 2010) {
    baseTime = '1700';
  } else if (nowTime >= 2010 && nowTime < 2310) {
    baseTime = '2000';
  } else {
    baseTime = '2300';
  }

  return baseTime;
};
