'use client'

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

const DefaultLogo = function (props: LogoProps) {
    return (
        <div {...props}>Logo</div>
    )
}

export default Logo;