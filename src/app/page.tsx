"use client";
import User_list from "./components/users_list";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="h-[100vh]">
      <header className="flex items-end w-full justify-between pt-[1vw] pl-[2vw] pr-[2vw]">
        <button
          onClick={() => router.push("/saved_users")}
          className="flex w-[8vw] flex-col justify-center"
        >
          <img className="w-[5vw] h-[5vw] mb-[1.5vw]" src="/profile.png" />
        </button>
        <h1 className="text-white text-[5vw]">User Weather</h1>
        <img className="h-[10vw] w-[10vw]" src="/sun.png" />
      </header>
      <User_list />
    </div>
  );
}
