import Image from "next/image"
import Link from "next/link"


export const Nav = () => {
  return (
    <div>
        <header>
        <nav>
            <Link href='/' className="logo">
              <Image
            src="/icons/logo.png"
            alt="Logo"
            width={25}
            height= {24}
            priority
          />
          <p>HostEvent</p>
            </Link>
            <ul>
                <Link href="/">Home</Link>

                <Link href="/#features">Featured Events</Link>
                <Link href="/aboutus">About Us</Link>
                <Link href="/contact">Contact</Link>
            </ul>
        </nav>

        </header>
    </div>
  )
}
