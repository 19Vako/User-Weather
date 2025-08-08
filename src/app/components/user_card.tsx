import { getWeatherIconAndLabel } from "../services/weatherUtils";

import UserModal from "./userModal";
import SaveButton from "./saveButton";

export default function User_card({
  user,
  isModalOpen,
  openModal,
  closeModal,
}: {
  user: any;
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}) {
  const { icon } =
    getWeatherIconAndLabel(user.current_weather?.weathercode ?? null) ?? {};

  return (
    <div className="relative bg-gray-400 flex text-[2vw] items-center justify-between w-[70vw] mb-[1vw] mt-[1vw] border-[0.2vw] rounded-[1vw] border-black p-[1vw]">
      <img
        className="h-[10vw] w-[10vw]"
        src={user.picture.large}
        alt="User photo"
      />

      <div className="text-[2vw] w-[30vw] ml-[1vw] font-sans">
        <h1>
          👤 {user.name.first} {user.name.last}
        </h1>
        <h1>🚻 {user.gender}</h1>
        <h1>
          📍 {user.location.country}: {user.location.city}
        </h1>
        <h1 className="truncate">✉️ {user.email}</h1>
      </div>

      <div className="flex flex-col w-[15vw]">
        <h1 className="text-[4vw]">{icon}</h1>
        <h1 className="text-[3vw]">{user.current_weather.temperature}℃ 🌡️</h1>
      </div>

      <div className="flex h-full justify-between flex-col">
        <SaveButton user={user} />
        <button
          onClick={() => openModal()}
          className="bg-gray-500 text-white mt-[1vw] border-[0.2vw] rounded-[1vw] border-black p-[0.5vw]"
        >
          Weather
        </button>
      </div>

      {isModalOpen && (
        <UserModal
          current_weather={user.current_weather}
          user={user}
          onClose={() => closeModal()}
        />
      )}
    </div>
  );
}
