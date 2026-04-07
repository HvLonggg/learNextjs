export default function Footer() {
  return (
    <footer className="bg-white py-10 border-t">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        {/* Logo */}
        <h2 className="text-xl font-bold text-gray-800 mb-2">
          SORAIIRO WORK
        </h2>

        {/* Địa chỉ */}
        <p className="text-gray-600 text-sm mb-2">
          東京都新宿区百人町2丁目 9番6竹内ビル3-B号
        </p>

        {/* Contact */}
        <p className="text-gray-600 text-sm mb-2">
          TEL: 03-5937-3934
        </p>

        {/* Copyright */}
        <p className="text-gray-400 text-xs mt-6">
          © 2026 SORAIIRO WORK. All rights reserved.
        </p>

      </div>
    </footer>
  );
}