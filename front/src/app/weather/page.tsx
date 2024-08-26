'use client';
import WeatherButton from './components/WeatherButton';
import ZoneCodeSelect from './modules/ZoneCodeSelect';

export default function Weather() {
  return (
    <>
      <div className="m-5 bg-blue">
        <WeatherButton />
      </div>
    </>
  );
}
