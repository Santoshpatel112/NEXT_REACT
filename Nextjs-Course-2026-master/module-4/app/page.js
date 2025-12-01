import Image from "next/image";


export default async function Home() {
 
  const res = await fetch("https://api.github.com/users/aestheticsuraj234");
  const data = await res.json();


  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
    <p>
      {JSON.stringify(data)}
    </p>
    <button >
      Click Me
    </button>
    </div>
  );
}
