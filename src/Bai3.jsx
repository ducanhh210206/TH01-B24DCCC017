import React, { useState } from "react";

function ColorBox({ color }) {
    return (
        <div
            style={{
                width: "200px",
                height: "100px",
                backgroundColor: color,
                borderRadius: "8px",
                border: "1px solid #ccc",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white", 
                fontWeight: "bold",
                fontSize: "18px",
                textTransform: "capitalize",
            }}
        >
            {color}
        </div>
    );
}

export default function Bai3() {
    const colors = ["red", "green", "blue", "yellow"];
    const [color, setColor] = useState("red");

    return (
        <div className="flex flex-col items-center gap-4 p-6">
            <h2 className="text-xl font-semibold">Bài 3: Ứng dụng đổi màu nền</h2>
            <ColorBox color={color} />
            <div className="flex gap-2">
                {colors.map((c) => {
                    const isActive = c === color; 
                    return (
                        <button
                            key={c}
                            onClick={() => setColor(c)}
                            className="px-4 py-2 rounded-lg font-bold capitalize border transition"
                            style={{
                            backgroundColor: isActive ? c : "white",
                            color: isActive ? "white" : c,
                            borderColor: c,
                            }}
                        >
                            {c}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}