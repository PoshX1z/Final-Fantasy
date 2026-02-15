import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex gap-20 justify-center">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/store">Store</Link>
        </li>
        <li>
          <Link href="/games">Games</Link>
        </li>
        <li>
          <Link href="/pc">PC</Link>
        </li>
        <li>
          <Link href="/playstation">Playstation</Link>
        </li>
        <li>
          <Link href="/xbox">Xbox</Link>
        </li>
        <li>
          <Link href="/daily-quests">Daily Quests</Link>
        </li>
        <li>
          <Link href="/news">News</Link>
        </li>
        <li>
          <Link href="/events">Events</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
