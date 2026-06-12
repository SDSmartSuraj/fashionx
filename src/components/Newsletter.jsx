function Newsletter() {
  return (
    <section className="bg-black text-white py-20 text-center">
      <h2 className="text-4xl font-bold mb-5">
        Subscribe
      </h2>

      <input
        type="email"
        placeholder="Enter Email"
        className="p-3 text-black rounded-lg w-72"
      />
    </section>
  );
}

export default Newsletter;