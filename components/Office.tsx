export default function Office() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT */}
        <div>
          <h2 className="text-3xl font-bold text-blue-600 mb-6">
            Văn phòng đại diện
          </h2>

          <div className="space-y-4 text-gray-700">
            <p>
              <span className="font-semibold">SORAIIRO WORK</span>
            </p>

            <p>
              東京都新宿区百人町2丁目 <br />
              9番6竹内ビル3 - B号
            </p>

            <p>
              <span className="font-semibold">Giờ mở cửa:</span> 11:00 ~ 19:00
            </p>

            <p>
              <span className="font-semibold">Người đại diện:</span> Takashi Uchimura
            </p>

            <p>
              <span className="font-semibold">Điện thoại:</span> 03-5937-3934
            </p>

            <p>
              <span className="font-semibold">Fax:</span> 03-5937-3944
            </p>
          </div>
        </div>

        {/* RIGHT - MAP */}
        <div className="w-full h-[300px] rounded-xl overflow-hidden shadow">
          <iframe
            src="https://www.google.com/maps?q=Shinjuku+Tokyo&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
          ></iframe>
        </div>

      </div>
    </section>
  );
}