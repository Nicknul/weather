import { useEffect } from 'react';

export const useGoogleMapsLoader = () => {
  useEffect(() => {
    const existingScript = document.getElementById('google-maps-script');
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = 'google-maps-script';
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);

      script.onload = () => {
        console.log('Google Maps API 스크립트 로드 완료');
      };

      script.onerror = () => {
        console.error('Google Maps API 로드 중 오류 발생');
      };
    }
  }, []);
};
