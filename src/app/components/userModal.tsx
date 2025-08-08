import React, { use } from "react";
import { getWeatherIconAndLabel } from "../services/weatherUtils";

type Weather = {
  time: string;
  interval: number;
  temperature: number;
  windspeed: number;
  winddirection: number;
  is_day: number;
  weathercode: number;
};

export default function UserModal({
  current_weather,
  user,
  onClose,
}: {
  current_weather: Weather;
  user: any;
  onClose: () => void;
}) {
  const { icon, label, video } =
    getWeatherIconAndLabel(current_weather.weathercode) || {};

  return (
    <div className="absolute left-[4.5vw] font-sans flex flex-col h-[30vw] w-[60vw] p-[2vw]">
      <video
        className="absolute z-10 top-0 left-0 w-full h-full object-cover z-0 blur-100 rounded-[1.8vw] bg-black"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={video} type="video/mp4" />
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10 rounded-[1.8vw]" />

      <div className="z-20 flex justify-end">
        <button>
          <img
            onClick={() => onClose()}
            className=" w-[3vw] h-[3vw]"
            src="/reject.png"
            alt="Close"
          />
        </button>
      </div>

      <div className="z-20 flex flex-col justify-center h-full w-full">
        <div className="flex justify-center ">
          <div className="z-20 w-[20vw] flex flex-col items-center justify-center text-white w-full mr-[2vw]">
            <h1 className="flex text-[15vw] items-center justify-center h-[10vw]">
              {icon}
            </h1>
            <h1 className="text-[2vw] text-center mt-[2vw]">{label}</h1>
          </div>

          <div className="z-20 text-white text-[2vw] w-full">
            <div className="flex">
              <h1 className="mr-[1vw]">🌡️ Температура: </h1>
              <h1 className="">{current_weather.temperature}°C</h1>
            </div>

            <div className="flex">
              <h1 className="mr-[1vw]">💨 Вітер:</h1>
              <h1 className="">{current_weather.windspeed} км/год</h1>
            </div>

            <div className="flex">
              <h1 className="flex items-center mr-[1vw] min-w-[10.3vw]">📍 Локація:</h1>
              <h1 className="flex">
                {user.location.country} {user.location.city}
              </h1>
            </div>

            <div className="flex">
              <h1 className="mr-[1vw]">☀️ День/Ніч:</h1>
              <h1 className="">{current_weather.is_day ? "День" : "Ніч"}</h1>
            </div>

            <div className="w-full">
              {new Date(current_weather.time).toLocaleString("uk-UA", {
                dateStyle: "short",
                timeStyle: "short",
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
