'use client'

import React from "react";
import Link from 'next/link'

export type NavLinkProps = {
    children: React.ReactNode,
    href: string,
    isActive?: boolean
}

const NavLink = function ({children, href, ...restProps}: NavLinkProps) {
    return (
        <Link {...restProps} href={href} className={""}>
            {children}
        </Link>
    )
}

export default NavLink;