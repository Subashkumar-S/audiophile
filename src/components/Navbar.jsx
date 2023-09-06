import Link from "next/link"
import {FaOpencart} from "react-icons/fa"
export default function Navbar(){
    return (
        <header>
            <nav>
                <h2>audiophile</h2>
                <div>
                <Link href="/">Home</Link>
                <Link href="/speakers">Speakers</Link>
                <Link href="/headphones">Headphones</Link>
                <Link href="/earphones">Earphones</Link>
                </div>
                <FaOpencart />
            </nav>
        </header>
    )
}