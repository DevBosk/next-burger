import Link from "next/link";
import headerLogo from "@/assets/logo.png";
import classes from "./main-header.module.css";
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";
import NavLink from "./nav-link";

export default function MainHeader() {
    return <>
        <MainHeaderBackground />
        <Link className={classes.logo} href='/'>
            <Image src={headerLogo} alt="A plate with food on it" priority />
            NextLevel Food

            <nav className={classes.nav}>
                <ul>
                    <li>
                        <NavLink 
                            href='/meals'
                        >
                            Meals
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            href='/community'
                        >
                            Foodies Community
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </Link>
    </>
};