import { useState, useEffect } from "react";

function Testimonials() {
  const reviews = [
    {
      name: "Rahul",
      review:
        "Amazing quality and premium feel. Highly recommended.",
    },
    {
      name: "Arjun",
      review:
        "Best fashion purchase I've made this year.",
    },
    {
      name: "Karan",
      review:
        "Excellent service and luxury products.",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(
        (prev) => (prev + 1) % reviews.length
      );
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center px-6">

        <h2 className="text-5xl font-black mb-10">
          What Our Customers Say
        </h2>

        <div className="bg-white rounded-3xl shadow-xl p-10">

          <p className="text-xl italic">
            "{reviews[current].review}"
          </p>

          <h3 className="mt-6 font-bold text-2xl">
            {reviews[current].name}
          </h3>

        </div>

      </div>
    </section>
  );
}

export default Testimonials;