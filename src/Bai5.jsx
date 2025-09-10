import React, { useEffect, useState } from "react";

function TimeDisplay({ time }) {
    return <h2 className="text-xl font-bold">{time}</h2>;
}

export default function Bai5() {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(timer); 
    }, []);

    return (
        <div className="flex flex-col items-center gap-4 p-6">
            <h2 className="text-xl font-semibold">Bài 5: Đồng hồ</h2>
            <TimeDisplay time={time} />
        </div>
    );
}
