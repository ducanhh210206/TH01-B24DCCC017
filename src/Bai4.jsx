import React, { useState } from "react";

function StudentCard({ name, age, className }) {
    const [showDetail, setShowDetail] = useState(false);

    return (
        <div className="border p-4 rounded-xl shadow-md flex flex-col gap-2 w-64">
            <h3 className="font-bold">{name}</h3>
            {showDetail ? (
                <>
                    <p>Tuổi: {age}</p>
                    <p>Lớp: {className}</p>
                    <button
                        onClick={() => setShowDetail(false)}
                        className="px-3 py-1 bg-red-500 text-white rounded-lg"
                    >
                        Ẩn chi tiết
                    </button>
                </>
            ) : (
                <button
                    onClick={() => setShowDetail(true)}
                    className="px-3 py-1 bg-blue-500 text-white rounded-lg"
                >
                    Xem chi tiết
                </button>
            )}
        </div>
    );
}

export default function Bai4() {
    const students = [
        { name: "Nguyễn Văn A", age: 20, className: "CNTT1" },
        { name: "Trần Thị B", age: 21, className: "CNTT2" },
        { name: "Lê Văn C", age: 22, className: "CNTT3" },
    ];

    return (
        <div className="flex flex-col items-center gap-4 p-6">
            <h2 className="text-xl font-semibold">Bài 4: Thẻ thông tin sinh viên</h2>
            <div className="flex gap-4">
                {students.map((s, i) => (
                    <StudentCard
                        key={i}
                        name={s.name}
                        age={s.age}
                        className={s.className}
                    />
                ))}
            </div>
        </div>
    );
}
