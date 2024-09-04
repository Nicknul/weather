'use client';
import Weather from './weather/Weather';

export default function Home() {
  return (
    <>
      <div className="m-5 bg-blue">
        <Weather />
      </div>
    </>
  );
}
