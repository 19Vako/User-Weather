"use client";
import { useEffect, useState } from "react";
import { useStore } from "@/store/store";
import axios from "axios";
import Saved_User_Card from "./Saved_User_Card";

export function Save_users_list() {
  const { savedUsers, setUsers } = useStore();
  const [showModal, setShowModal] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get("https://randomuser.me/api/?results=20");
        const usersData: any = [];

        for (const user of res.data.results) {
          try {
            const weatherRes = await axios.get(
              `https://api.open-meteo.com/v1/forecast?latitude=${user.location.coordinates.latitude}&longitude=${user.location.coordinates.longitude}&current_weather=true`,
            );
            usersData.push({
              ...user,
              current_weather: weatherRes.data.current_weather,
            });
          } catch (e) {
            console.error("Weather error:", e);
          }
        }

        setUsers(usersData);
      } catch (error) {
        console.error("Failed to fetch users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="flex flex-col items-center">
      {savedUsers.length <= 0 ? (
        <h1 className="text-white text-center text-[2vw]">
          There are no saved users
        </h1>
      ) : (
        savedUsers.map((user: any) => (
          <Saved_User_Card
            key={user.login.uuid}
            user={user}
            isModalOpen={showModal === user.login.uuid}
            openModal={() => setShowModal(user.login.uuid)}
            closeModal={() => setShowModal(null)}
          />
        ))
      )}
    </div>
  );
}
