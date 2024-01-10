import dynamic from "next/dynamic";
import Image from "next/image";

const DynamicMap = dynamic(() => import("../components/Map"), { ssr: false });

export default function Home() {
  return (
    <div>
      <header
        style={{
          textAlign: "center",
          padding: "15px",
          backgroundColor: "#2593A2",
          display: "flex",
          justifyContent: "center",
          gap: 20,
          alignItems: "center",
        }}
      >
        <Image
          src="/images/logo.png"
          alt="Train Logo"
          width={45}
          height={45}
        />

        <h1 style={{ color: "white", fontSize: 28 }}>
          Canada Line
        </h1>
      </header>
      <DynamicMap />
    </div>
  );
}
