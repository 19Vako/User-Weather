"use client";
import { useEffect, useState } from "react";
import { useStore } from "@/store/store";
import axios from "axios";
import User_card from "./user_card";

export default function User_list() {
  const { users, setUsers } = useStore();
  const [showModal, setShowModal] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [weatherErrors, setWeatherErrors] = useState<
    { id: string; msg: string }[]
  >([]);

  const fetchUsers = async () => {
    setLoading(true);
    setError(null);
    setWeatherErrors([]);
    try {
      const res = await axios.get("https://randomuser.me/api/?results=20");
      const usersData: any[] = [];

      for (const user of res.data.results) {
        try {
          const lat = user.location.coordinates.latitude;
          const lon = user.location.coordinates.longitude;
          const weatherRes = await axios.get(
            `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`,
          );
          usersData.push({
            ...user,
            current_weather: weatherRes.data.current_weather,
          });
        } catch (e: any) {
          const msg =
            e?.message ||
            "Failed to fetch weather for this user (unknown error)";
          setWeatherErrors((prev) => [...prev, { id: user.login.uuid, msg }]);
          usersData.push({
            ...user,
            current_weather: null,
            weather_error: msg,
          });
          console.error("Weather error for user", user.login.uuid, e);
        }
      }

      setUsers(usersData);
    } catch (e: any) {
      const msg = e?.message || "Failed to fetch users (unknown error)";
      setError(msg);
      console.error("Failed to fetch users:", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!users.length) fetchUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const retryFetchUsers = () => {
    fetchUsers();
  };

  const retryWeatherForUser = async (uuid: string) => {
    const user = users.find((u: any) => u.login.uuid === uuid);
    if (!user) return;
    const lat = user.location.coordinates.latitude;
    const lon = user.location.coordinates.longitude;
    try {
      const weatherRes = await axios.get(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`,
      );
      setUsers((prev: any[]) =>
        prev.map((u) =>
          u.login.uuid === uuid
            ? {
                ...u,
                current_weather: weatherRes.data.current_weather,
                weather_error: undefined,
              }
            : u,
        ),
      );
      setWeatherErrors((prev) => prev.filter((e) => e.id !== uuid));
    } catch (e: any) {
      const msg = e?.message || "Retry failed";
      setWeatherErrors((prev) =>
        prev.map((we) => (we.id === uuid ? { ...we, msg } : we)),
      );
      console.error("Retry weather failed for", uuid, e);
    }
  };

  return (
    <div className="flex flex-col items-center">
      {loading ? (
        <h1 className="text-white text-[2vw]">Loading...</h1>
      ) : error ? (
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-red-400 text-[1.6vw]">
            Помилка загрузки: {error}
          </h1>
          <button
            onClick={retryFetchUsers}
            className="px-4 py-2 rounded-md bg-white text-black"
          >
            Повторити
          </button>
        </div>
      ) : (
        <>
          {weatherErrors.length > 0 && (
            <div className="w-full max-w-3xl bg-yellow-100 border border-yellow-300 p-3 rounded mb-4">
              <h2 className="font-medium mb-2">
                Помилка при отриманні погоди:
              </h2>
              <ul className="space-y-2">
                {weatherErrors.map((we) => (
                  <li key={we.id} className="flex items-center justify-between">
                    <span className="text-sm">
                      Пользователь {we.id}: {we.msg}
                    </span>
                    <button
                      onClick={() => retryWeatherForUser(we.id)}
                      className="ml-4 px-2 py-1 rounded text-sm bg-white"
                    >
                      Повторить
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {users.length <= 0 ? (
            <h1 className="text-white text-[2vw]">No users found</h1>
          ) : (
            users.map((user: any) => (
              <User_card
                key={user.login.uuid}
                user={user}
                isModalOpen={showModal === user.login.uuid}
                openModal={() => setShowModal(user.login.uuid)}
                closeModal={() => setShowModal(null)}
              />
            ))
          )}
        </>
      )}
    </div>
  );
}
