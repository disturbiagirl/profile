import { logout } from "@/actions";

const LogoutForm = () => {
  return (
    <form
      action={logout}
      className="flex flex-col gap-2 items-center justify-center p-4 rounded-md pt-6"
    >
      <button className=" bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-4 border border-gray-400 rounded shadow">
        Logout
      </button>
    </form>
  );
};

export default LogoutForm;
