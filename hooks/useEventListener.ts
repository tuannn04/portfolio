import {useEffect} from "react";

const useEventListener = (targetElement: Window | HTMLElement, eventType: string, listener: EventListenerOrEventListenerObject): void => {
    useEffect(() => {
        targetElement.addEventListener(eventType, listener);

        return () => {
            targetElement.removeEventListener(eventType, listener);
        }
    }, [targetElement, eventType, listener])
}

export default useEventListener;