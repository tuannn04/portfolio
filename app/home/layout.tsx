import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Home Page',
    description: 'Home Page',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}