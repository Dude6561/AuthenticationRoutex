import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div>
      <h1> Click to Go to Login</h1>
      <Link href="/login">Click</Link>
    </div>
  );
}
