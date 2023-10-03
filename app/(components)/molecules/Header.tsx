import Link from "next/link";

const Header = () => (
  <header>
    <nav className="flex justify-center gap-16 bg-green-300 py-4">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/todos">Todos</Link>
      <Link href="/todos/completed">Completed Todos</Link>
    </nav>
  </header>
);

export default Header;
