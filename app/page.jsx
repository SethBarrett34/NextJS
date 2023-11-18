"use client"
import CountButton from "./CountButton";
import Search from "./Search";

export default function Page() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>NextJS Page</h1>
      <div>
        <p>Number Counters</p>
        <div style={{ display: "flex", justifyContent: "center" }}></div>
        <CountButton step={1} />
        <CountButton step={2} />
      </div>
      
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <p>
          <a href="https://github.com/Sethbarrett34/NextJS">My GitHub Repository</a>
        </p>
      </div>

      <div>
        <p>Search bar</p>
        <Search />
      </div>
    </div>
  );
}