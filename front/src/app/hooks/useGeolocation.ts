// hooks/useGeolocation.ts
import { useState, useEffect } from 'react';

export const useGeolocation = () => {
  const [location, setLocation] = useState<{ lat: number; lon: number } | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ lat: latitude, lon: longitude });
        },
        () => {
          setError('위치를 가져올 수 없습니다.');
        }
      );
    } else {
      setError('Geolocation을 지원하지 않는 브라우저입니다.');
    }
  }, []);

  return { location, error };
};
