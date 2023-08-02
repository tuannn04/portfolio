import {useRef, useCallback} from "react";

const getCurrentTime = (): number => {
    return new Date().getTime();
}

const useThrottle = (callBack: any, interval: number = 0): any => {
    const lastCallTime = useRef<number>(getCurrentTime());
    const waitFunction = useRef<number>(0);

    const fn = useCallback((...args: any[]) => {
        const currentTime = getCurrentTime();
        const timeOut = interval - (currentTime - lastCallTime.current);
        if (waitFunction.current) {
            clearTimeout(waitFunction.current);
        }
        if (timeOut < 0) {
            callBack(...args);
            lastCallTime.current = currentTime;
        } else {
            waitFunction.current = window.setTimeout(() => {
                callBack(...args);
                lastCallTime.current = getCurrentTime();
            }, timeOut);
        }
    }, [callBack, interval]);
    return fn;
}

export default useThrottle;