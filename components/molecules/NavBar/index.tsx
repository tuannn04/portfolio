'use client'

import React, {JSX} from "react";
import NavLink, {NavLinkProps} from "../../atoms/NavLink";

export type NavBarProps = {
    items: NavLinkProps[]
}

const NavBar = ({items}: NavBarProps): JSX.Element => {
    const classNames = [
        getDisplay(),
        getSize(),
        getFlexContent(),
        getPosition(),
        getBorder(),
        getSpacing()
    ];
    return (
        <div className={"w-full h-full"}>
            <div className={classNames.join(' ')}>
                {
                    items.map((item, index) => {
                        const {children, ...restProps} = item;
                        return (
                            <div key={index}>
                                <NavLink {...restProps}>{item.children}</NavLink>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

const getDisplay = (): string => {
    return "flex w-fit flex-col sm:flex-row";
}

const getSize = (): string => {
    return "h-screen sm:w-full sm:h-full"
}

const getFlexContent = (): string => {
    return "justify-start sm:justify-center items-start sm:items-center";
}

const getPosition = (): string => {
    return 'fixed sm:relative'
}

const getBorder = (): string => {
    return 'border-r-2 sm:border-0'
}

const getSpacing = (): string => {
    return "pl-10 pr-10 sm:pl-0 sm:pr-0"
}

export default NavBar;