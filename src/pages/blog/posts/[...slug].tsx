import { useRouter } from "next/router";

export default function Post() {

  const router = useRouter();
  const segments = router.query.slug as string[];

  return (
    <div className="w-full h-screen text-center font-bold text-3xl p-4">
      <h1 className="">
        post: {segments?.join('/')}
      </h1>
    </div>
  );
}
