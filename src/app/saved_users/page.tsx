"use client";
import { Save_users_list } from "./components/save_users_list";
import { useRouter } from "next/navigation";

export default function Saved_users() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center">
      <header className="flex w-full items-end justify-between pt-[1vw] pl-[2vw] pr-[2vw]">
        <button className="h-[5vw] w-[10vw]" onClick={() => router.push("/")}>
          <img className="h-full w-[5vw] mb-[1vw]" src="/left-arrow.png" />
        </button>
        <h1 className="text-[5vw] text-white ">Saved Users</h1>
        <img className="h-[10vw] w-[10vw]" src="/sun.png" />
      </header>
      <Save_users_list />
    </div>
  );
}
