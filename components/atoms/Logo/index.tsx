import React from 'react';
import Image from 'next/image';

export type LogoProps = {
    src?: string,
    alt?: string
}

const Logo = function ({src, alt, ...restProps}: LogoProps) {
    return (
        src ? <Image src={src} alt={alt || ''}/> : <DefaultLogo {...restProps} />
    );
}

const DefaultLogo = function ({...restProps}: LogoProps) {
    return (
        <div className={"w-16 h-16 rounded-full border-2"}>
            <div className={"w-full h-full text-2xl font-thin flex items-center justify-center cursor-default"}>
                {process.env.NEXT_PUBLIC_FULL_NAME_ABBREVIATION}
            </div>
        </div>
    )
}

export default Logo;