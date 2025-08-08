import { getWeatherIconAndLabel } from "../../services/weatherUtils";
import UserModal from "../../components/userModal";

export default function Saved_User_Card({
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
    getWeatherIconAndLabel(user.current_weather?.weathercode) || {};

  return (
    <div className="relative bg-gray-400 flex text-[2vw] items-center justify-between w-[70vw] mb-[1vw] mt-[1vw] border-[0.2vw] rounded-[1vw] border-black p-[1vw]">
      <img
        className="h-[10vw] w-[10vw]"
        src={user.picture.large}
        alt="User photo"
      />

      <div className="text-[2vw] w-[30vw] ml-[1vw] font-sans">
        <h3>
          👤 {user.name.first} {user.name.last}
        </h3>
        <h3>🚻 {user.gender}</h3>
        <h3>
          📍 {user.location.country}: {user.location.city}
        </h3>
        <h3 className="truncate">✉️ {user.email}</h3>
      </div>

      <div className="flex flex-col w-[14vw]">
        <h1 className="text-[4vw]">{icon}</h1>
        <h1 className="text-[3vw]">{user.current_weather.temperature}℃ 🌡️</h1>
      </div>

      <div className="flex h-full justify-center  flex-col">
        <button
          onClick={() => openModal()}
          className="bg-gray-500 text-white  border-[0.2vw] rounded-[1vw] border-black p-[0.5vw]"
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
