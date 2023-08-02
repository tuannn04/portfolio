"use client";

import {NavLinkProps} from "@/components/atoms/NavLink";
import {usePathname} from "next/navigation";
import {useCallback, useEffect, useState, useMemo} from "react";

export const DefaultNavItems: NavLinkProps[] = [
    {
        href: "/",
        children: "Home Page"
    },
    {
        href: "/home/test",
        children: "Test Page"
    },
    {
        href: "/home/demo",
        children: "Demo Page"
    }
]

export const useNavItems = (): NavLinkProps[] => {
    const pathName = usePathname();
    return useMemo(() => {
        return DefaultNavItems.map(item => {
            item.isActive = item.href === pathName;
            return item;
        })
    }, [pathName]);
}