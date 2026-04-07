export default function ProcessSection() {
  const steps = [
    {
      title: "Tiếp nhận yêu cầu",
      desc: "Lắng nghe và ghi nhận nhu cầu của khách hàng",
    },
    {
      title: "Phân tích",
      desc: "Đánh giá và đề xuất giải pháp phù hợp",
    },
    {
      title: "Lập kế hoạch",
      desc: "Xây dựng lộ trình triển khai chi tiết",
    },
    {
      title: "Triển khai",
      desc: "Thực hiện dự án theo kế hoạch",
    },
    {
      title: "Kiểm tra",
      desc: "Đảm bảo chất lượng và tối ưu hệ thống",
    },
    {
      title: "Bàn giao",
      desc: "Hoàn thiện và bàn giao cho khách hàng",
    },
  ];

  return (
    <section className="bg-blue-600 py-20 text-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Title */}
        <div className="text-center mb-16">
          <p className="uppercase text-sm opacity-80">
            Minh bạch trong quan hệ hợp tác
          </p>
          <h2 className="text-3xl font-bold">
            Quy trình triển khai dịch vụ
          </h2>
        </div>

        {/* Grid 6 bước */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white text-black rounded-xl p-6 text-center shadow"
            >
              {/* Số bước */}
              <div className="text-blue-500 font-bold text-lg mb-2">
                {index + 1}
              </div>

              {/* Title */}
              <h3 className="font-semibold mb-2">
                {step.title}
              </h3>

              {/* Desc */}
              <p className="text-sm text-gray-600">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}