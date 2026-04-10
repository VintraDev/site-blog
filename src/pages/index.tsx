import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-screen text-center font-bold text-3xl p-4">
      <h1 className="">
        Seja bem vindo!
      </h1>
      <Link href="/blog">Ir para o Blog</Link>
    </div>
  );
}
