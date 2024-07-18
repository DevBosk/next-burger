import Link from "next/link";

export default function AboutPage() {
    return (
        <main>
            <h1>About Us</h1>
            <h2><Link href='/about/a-1'>A1</Link></h2>
            <h2><Link href='/about/a-2'>A2</Link></h2>
        </main>
    )
}