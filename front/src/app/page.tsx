'use client';
import RequestButton from './components/RequestButton';
import WeatherButton from './components/WeatherButton';

export default function Home() {
  return (
    <>
      <div className="m-5 bg-blue">
        <button className="bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700">Hello World</button>
        <h1>프론트에서 메인 서버로 요청 보내기</h1>
        <RequestButton />
        <WeatherButton />
      </div>
    </>
  );
}
