import Form from "./Form";
import Forms from "./Forms";
import Timer from "./Timer";

export default function Home() {
  return (
    <main className="grid place-items-center h-screen">
      <div className="flex flex-col items-center gap-8">
        <Timer />
        <Forms />
      </div>
    </main>
  );
}
