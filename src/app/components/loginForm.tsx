const LoginForm = () => {
  return (
    <form className="flex flex-col gap-2 items-center justify-center border-2 border-gray-300 p-4 rounded-md">
      <input
        className="border-2 rounded-sm outline-gray-300 px-2 py-1"
        type="text"
        placeholder="email"
      />
      <input
        className="border-2 rounded-sm outline-gray-300 px-2 py-1"
        type="text"
        placeholder="password"
      />
      <button className="bg-gray-200 rounded-sm w-full p-1 hover:bg-gray-300">
        login
      </button>
    </form>
  );
};

export default LoginForm;
