import { useStore } from "@/store/store";

export default function SaveButton({ user }: { user: Object }) {
  const { savedUsers, setSavedUsers } = useStore();

  const existUser = savedUsers.find((u) => u === user);

  function saveUser() {
    if (!existUser) {
      setSavedUsers((prev) => [...prev, user]);
    }
  }
  return (
    <button
      className="font-sans w-[11vw]  text-white bg-gray-500 border-[0.2vw] rounded-[1vw] border-black p-[0.5vw]"
      onClick={() => saveUser()}
    >
      {!existUser ? "Save user" : "User been added!"}
    </button>
  );
}
