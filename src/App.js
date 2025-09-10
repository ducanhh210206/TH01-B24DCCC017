import React from "react";
import Bai1 from "./Bai1";
import Bai2 from "./Bai2";
import Bai3 from "./Bai3";
import Bai4 from "./Bai4";
import Bai5 from "./Bai5";

function App() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Các bài tập React</h1>
      <Bai1 />
      <hr className="my-6" />
      <Bai2 />
      <hr className="my-6" />
      <Bai3 />
      <hr className="my-6" />
      <Bai4 />
      <hr className="my-6" />
      <Bai5 />
    </div>
  );
}

export default App;

