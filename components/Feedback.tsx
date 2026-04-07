"use client";
import { useEffect, useState } from "react";

export default function Feedback() {
  const feedbacks = [
    {
      name: "Nguyễn Văn A",
      content: "Dịch vụ rất tốt, hỗ trợ nhanh và chuyên nghiệp.",
    },
    {
      name: "Trần Thị B",
      content: "Website đẹp, đúng yêu cầu, rất hài lòng.",
    },
    {
      name: "Lê Văn C",
      content: "Đội ngũ nhiệt tình, làm việc hiệu quả.",
    },
  ];

  const [index, setIndex] = useState(0);

  // Auto chạy 3s
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % feedbacks.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-3xl mx-auto px-6 text-center">
        {/* Title */}
     <h2 className="text-3xl font-bold mb-10">
  Ý kiến khách hàng đã đồng hành 
  <br />
  <span className="text-lg font-normal text-gray-500">
    Không ngừng cải thiện để mang tới trải nghiệm tốt nhất
  </span>
</h2>

        {/* Slider */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-700"
            style={{
              transform: `translateX(-${index * 100}%)`,
            }}
          >
            {feedbacks.map((item, i) => (
              <div
                key={i}
                className="min-w-full bg-white p-8 rounded-xl shadow"
              >
                <p className="text-gray-600 mb-4">"{item.content}"</p>
                <h4 className="font-semibold">{item.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
