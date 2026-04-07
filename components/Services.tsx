export default function Services() {
  const services = [
    {
      id: "01",
      title: "Cung ứng nhân lực",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
      img: "/service1.jpg",
    },
    {
      id: "02",
      title: "Tuyển pháp lý",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
      img: "/service2.jpg",
    },
    {
      id: "03",
      title: "Hỗ trợ quản lý chất lượng",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
      img: "/service3.jpg",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Title */}
        <div className="text-center mb-16">
          <p className="text-blue-500 font-semibold">
            DỊCH VỤ CỦA SORAIRO WORK
          </p>
          <h2 className="text-3xl font-bold">
            Tự hào cung cấp đa dạng dịch vụ
          </h2>
        </div>

        {/* List */}
        <div className="space-y-16">
          {services.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-10 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              
              {/* Text */}
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-yellow-400 text-white font-bold px-4 py-2 rounded-lg">
                    {item.id}
                  </span>
                  <h3 className="text-xl font-semibold">
                    {item.title}
                  </h3>
                </div>

                <p className="text-gray-600 mb-4">
                  {item.desc}
                </p>

                <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded-full hover:bg-blue-500 hover:text-white transition">
                  Xem chi tiết →
                </button>
              </div>

              {/* Image */}
              <div className="flex-1">
                <img
                  src={item.img}
                  alt={item.title}
                  className="rounded-xl shadow"
                />
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}