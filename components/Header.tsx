export default function Header() {
  return (
    <header className="flex justify-between p-4 shadow">
      <div className="font-bold text-xl">Logo</div>
      <ul className="flex gap-6">
        <li>Trang chủ</li>
        <li>Về chúng tôi</li>
        <li>Dịch vụ</li>
        <li>Liên hệ</li>
      </ul>
      <button className="bg-blue-500 text-white px-4 py-2 rounded">Đăng nhập</button>
    </header>
  );
}