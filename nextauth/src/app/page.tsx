import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div>
      <h1> This is Home</h1>
      <Link href="/articles">Blog News Read</Link>
    </div>
  );
}
