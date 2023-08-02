'use client'

import React, {memo, ReactNode} from "react";
import Link from 'next/link'

export type NavLinkProps = {
    children: React.ReactNode,
    href: string,
    isActive?: boolean,
    onClick?: React.MouseEventHandler<HTMLAnchorElement>,
}

const NavLink = ({children, href, isActive, onClick, ...restProps}: NavLinkProps): ReactNode => {
    return (
        <Link {...restProps} href={href} className={""}>
            {children}
        </Link>
    )
}

export default memo(NavLink);