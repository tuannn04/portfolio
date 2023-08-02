"use client";

import {Context, createContext, ReactNode, useCallback, useState, useContext} from "react";
import useEventListener from "@/hooks/useEventListener";
import useThrottle from "@/hooks/useThrottle";

export enum MaxWindowSizes {
    MOBILE = 640,
    TABLET = 1024,
    DESKTOP = 1000000
}

interface IWindowContext {
    width: number;
    height: number;
}

const getSize = (): IWindowContext => {
    return {
        width: globalThis.innerWidth,
        height: globalThis.innerHeight
    }
}

const WindowContext: Context<IWindowContext> = createContext<IWindowContext>(getSize())

const useWindowResizeListener = (): IWindowContext => {
    const [windowSize, setWindowSize] = useState<IWindowContext>(getSize);
    const onResize = useCallback(() => {
        setWindowSize(getSize());
    }, [setWindowSize])

    const onResizeThrottle = useThrottle(onResize, 100);

    useEventListener(globalThis.window, 'resize', onResizeThrottle);

    return windowSize;
}

interface IWindowContextProviderProps {
    children: ReactNode
}

export const WindowContextProvider = ({children}: IWindowContextProviderProps): ReactNode => {
    const windowSize = useWindowResizeListener();
    return (
        <WindowContext.Provider value={windowSize}>
            {children}
        </WindowContext.Provider>
    )
}

export const useWindowContext = (): IWindowContext => useContext<IWindowContext>(WindowContext);