// hooks/useGeocoder.ts
import { useState, useEffect } from 'react';

interface GeocoderResult {
  address: string | null;
  error: string | null;
}

export const useGeocoder = (latitude: number | null, longitude: number | null) => {
  const [result, setResult] = useState<GeocoderResult>({ address: null, error: null });

  useEffect(() => {
    if (latitude !== null && longitude !== null) {
      // 구글 맵스 API가 로드되었는지 확인
      if (typeof window.google === 'undefined' || !window.google.maps) {
        setResult({ address: null, error: 'Google Maps API가 로드되지 않았습니다.' });
        return;
      }

      const geocoder = new google.maps.Geocoder();
      const latlng = { lat: latitude, lng: longitude };

      geocoder.geocode({ location: latlng }, (results, status) => {
        if (status === 'OK') {
          if (results && results.length > 0) {
            setResult({ address: results[0].formatted_address, error: null });
          } else {
            setResult({ address: null, error: '주소를 찾을 수 없습니다.' });
          }
        } else {
          setResult({ address: null, error: `Geocoder 실패: ${status}` });
        }
      });
    }
  }, [latitude, longitude]);

  return result;
};
