import Image from "next/image";
import Link from "next/link";

export default function Blog() {
    return (
        <div>
            <div>
                <h1>
                    Blog
                </h1>
                <Image
                    src="/assets/primeiro-post.png"
                    width={400}
                    height={400}
                    alt="Imagem"
                />
            </div>
            <Link href="/">Home</Link>
        </div>
    )
}