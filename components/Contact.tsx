"use client";

export default function Contact() {
  return (
    <section className="relative py-24 bg-gray-100 overflow-hidden">
      
      {/* Background wave (ảnh pattern) */}
      <div className="absolute left-0 bottom-0 w-full h-full bg-[url('/wave.png')] bg-no-repeat bg-bottom opacity-50"></div>

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        
        {/* Title */}
        <p className="text-blue-500 font-semibold mb-2">
          LIÊN HỆ CHÚNG TÔI
        </p>

        <h2 className="text-3xl font-bold mb-4">
          Hỗ trợ tư vấn dịch vụ nhân lực <br />
          tận tình và chi tiết
        </h2>

        <p className="text-gray-500 mb-10">
          Vui lòng điền thông tin để nhận được tư vấn sớm nhất
        </p>

        {/* Form */}
        <form className="bg-white p-8 rounded-2xl shadow-lg space-y-5 text-left">
          
          <div>
            <label className="text-sm text-gray-600">
              Họ và tên
            </label>
            <input
              type="text"
              placeholder="Nhập thông tin"
              className="w-full mt-2 p-3 rounded-full border focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">
              Số điện thoại
            </label>
            <input
              type="text"
              placeholder="Nhập số điện thoại"
              className="w-full mt-2 p-3 rounded-full border focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              placeholder="Nhập email"
              className="w-full mt-2 p-3 rounded-full border focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">
              Nội dung
            </label>
            <textarea
              placeholder="Nhập nội dung"
              className="w-full mt-2 p-3 rounded-xl border h-28 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <button className="w-full bg-blue-500 text-white py-3 rounded-full hover:bg-blue-600 transition">
            Gửi yêu cầu
          </button>

        </form>

      </div>
    </section>
  );
}