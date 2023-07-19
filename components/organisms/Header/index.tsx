'use client'

import React from "react";
import Logo from "@/components/atoms/Logo";
import NavBar from "@/components/molecules/NavBar";
import {NavLinkProps} from "@/components/atoms/NavLink";
import DefaultHeaderItems from "@/components/organisms/Header/headerItems";

export type HeaderProps = {
    className?: string,
    navItems?: NavLinkProps[],
    logoSrc?: string
    socialItems?: NavLinkProps[]
}

const Header = function ({className, navItems, logoSrc, socialItems}: HeaderProps) {
    const defaultNavItems = DefaultHeaderItems;
    return (
        <header className={className}>
            <NavBar items={defaultNavItems}/>
            <Logo src={logoSrc}/>
            <NavBar items={socialItems || []}/>
        </header>
    );
}

export default Header;