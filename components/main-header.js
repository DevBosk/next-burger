import Link from "next/link";
import headerLogo from "@/assets/logo.png";
import classes from "./main-header.module.css";
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";

export default function MainHeader() {
    return <>
        <MainHeaderBackground />
        <Link className={classes.logo} href='/'>
            <Image src={headerLogo.src} alt="A plate with food on it" width={1024} height={1024} priority />
            NextLevel Food

            <nav className={classes.nav}>
                <ul>
                    <li>
                        <Link href="/meals">Meals</Link>
                    </li>
                    <li>
                        <Link href="/community">Foodies Community</Link>
                    </li>
                </ul>
            </nav>
        </Link>
    </>
};