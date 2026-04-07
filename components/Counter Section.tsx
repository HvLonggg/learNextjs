export default function CounterSection() { 
return(
    <section className="bg-blue-500 text-white py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
                <h2 className="text-4xl font-bold">2+</h2>
                <p className="text-lg">Năm kinh nghiệm</p>
            </div>
            <div>
                <h2 className="text-4xl font-bold">99+</h2>
                <p className="text-lg">Đối tác lâu dài</p>
            </div>
            <div>
                <h2 className="text-4xl font-bold">200+</h2>
                <p className="text-lg">Nhân lực tiềm năng</p>
            </div>
            <div>
                <h2 className="text-4xl font-bold">10+</h2>
                <p className="text-lg">Đội ngũ luật sư</p>
            </div>
        </div>
    </section>
);
}
