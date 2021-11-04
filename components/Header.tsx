
import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <section>
      <header>
        <div>
          <Image
            src="/img/headerIcon/menu.png"
            alt="menu icon"
            loading="eager"
            width={35}
            height={35}
            priority
          />
        </div>
        <h1 style={{ letterSpacing: "1px", textAlign: "left" }}>
          <nav>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/todos">Todo</Link>
              </li>
            </ul>
          </nav>
        </h1>
      </header>
    </section>
  );
}

export default Header;
