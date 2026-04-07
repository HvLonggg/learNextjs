export default function Banner() {
  return (
    <section className="flex items-center justify-between px-10 py-20 bg-gray-100">
      
      {/* Left */}
      <div className="max-w-xl">
        <h1 className="text-5xl font-bold mb-6 leading-tight">
          Slogan/ Tagline công ty 
        </h1>
        <p className="text-gray-600 mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus deleniti atque, beatae omnis placeat recusandae minus iure repellendus quis voluptate suscipit dolor expedita, fugit magnam molestias! Deserunt mollitia voluptatem labore.
        </p>

        <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition">
          Tìm hiểu về các dịch vụ →
        </button>
      </div>

    </section>
  );
}