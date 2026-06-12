function Register() {
  return (
    <div className="max-w-md mx-auto mt-20">
      <h1 className="text-4xl font-bold mb-6">
        Register
      </h1>

      <input
        type="text"
        placeholder="Name"
        className="border p-3 w-full mb-4"
      />

      <input
        type="email"
        placeholder="Email"
        className="border p-3 w-full mb-4"
      />

      <input
        type="password"
        placeholder="Password"
        className="border p-3 w-full mb-4"
      />

      <button className="bg-black text-white w-full py-3">
        Register
      </button>
    </div>
  );
}

export default Register;