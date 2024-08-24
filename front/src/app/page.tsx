'use client';
import Weather from './weather/page';

export default function Home() {
  return (
    <>
      <div className="m-5 bg-blue">
        <Weather />
      </div>
    </>
  );
}
