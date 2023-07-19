import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Demo Page',
    description: 'Demmo Page',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}