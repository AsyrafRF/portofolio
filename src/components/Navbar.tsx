import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between p-6 sticky top-0 bg-black/80 backdrop-blur">
      <div className="text-xl font-bold text-white">Asyraf.Portfolio</div>
      <div className="space-x-6 text-white">
        <Link href="#about">About</Link>
        <Link href="#projects">Projects</Link>
        <Link href="#contact">Contact</Link>
      </div>
    </nav>
  );
}
