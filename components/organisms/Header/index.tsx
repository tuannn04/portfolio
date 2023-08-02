'use client'

import React, {memo, ReactNode} from "react";
import Logo from "@/components/atoms/Logo";
import NavBar from "@/components/molecules/NavBar";
import {NavLinkProps} from "@/components/atoms/NavLink";
import {DefaultNavItems, useNavItems} from "@/components/organisms/Header/headerItems";

export type HeaderProps = {
    className?: string,
    logoSrc?: string
    socialItems?: NavLinkProps[]
}

const Header = ({className, logoSrc, socialItems}: HeaderProps): ReactNode => {
    const navItems = useNavItems();

    return (
        <header className={"h-16 flex"}>
            <div className={"w-[calc((100vw_-_4rem)/2)]"}>
                <NavBar items={navItems}/>
            </div>
            <div>
                <Logo src={logoSrc}/>
            </div>
        </header>
    );
}

export default Header;