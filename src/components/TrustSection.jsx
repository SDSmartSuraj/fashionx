function TrustSection() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 px-6">
        <div className="bg-white p-8 rounded-xl text-center shadow">
          🚚
          <h3 className="text-xl font-bold mt-4">
            Free Shipping
          </h3>
        </div>

        <div className="bg-white p-8 rounded-xl text-center shadow">
          🔒
          <h3 className="text-xl font-bold mt-4">
            Secure Payments
          </h3>
        </div>

        <div className="bg-white p-8 rounded-xl text-center shadow">
          ↩️
          <h3 className="text-xl font-bold mt-4">
            Easy Returns
          </h3>
        </div>
      </div>
    </section>
  );
}

export default TrustSection;