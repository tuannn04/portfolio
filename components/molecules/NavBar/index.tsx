'use client'

import React from "react";
import NavLink, {NavLinkProps} from "../../atoms/NavLink";

export type NavBarProps = {
    items: NavLinkProps[],
}

const NavBar = function ({items}: NavBarProps) {
    return (
        <div>
            {
                items.map((item, index) => {
                    const {children, ...restProps} = item;
                    return <NavLink key={index} {...restProps}>{item.children}</NavLink>
                })
            }
        </div>
    )
}

export default NavBar;