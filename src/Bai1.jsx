import React, { useState } from "react";

function Display({ value }) {
    return <h2>Giá trị hiện tại: {value}</h2>;
}

export default function Bai1() {
    const [count, setCount] = useState(0);

    return (
        <div className="flex flex-col items-center gap-4 p-6">
            <Display value={count} />
            <div className="flex gap-4">
                <button
                    onClick={() => setCount(count - 1)}
                    className="px-4 py-2 bg-red-500 text-white rounded-xl"
                >
                    -
                </button>
                <button
                    onClick={() => setCount(count + 1)}
                    className="px-4 py-2 bg-green-500 text-white rounded-xl"
                >
                    +
                </button>
            </div>
        </div>
    );
}

