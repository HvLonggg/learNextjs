export default function LogoMarquee() {
  const slogans = [
    "Đồng hành cùng doanh nghiệp Nhật Bản",
  ];

  return (
    <section className="py-10 bg-blue-500 overflow-hidden">
      <div className="flex gap-10 animate-marquee whitespace-nowrap text-white font-semibold text-lg">
        
        {/* nhân đôi để loop mượt */}
        {[...slogans, ...slogans].map((text, index) => (
          <span key={index} className="mx-6">
            {text}
          </span>
        ))}

      </div>
    </section>
  );
}