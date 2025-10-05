import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import './globals.css';

export const metadata = {
    title: 'OMMA Engenharia — Hero + Second Section',
    description: 'Site institucional OMMA Engenharia',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="pt-BR" className='dark'>
            <head>
                {/* Google Fonts (match original) */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                <link
                    href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,500;1,9..40,600&family=Exo:wght@400;600;700;800&family=Inter:wght@400;500;600&family=Manrope:wght@600;700;800&family=Roboto:wght@400;500&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body className="antialiased min-h-screen text-[var(--text)] bg-[var(--theme)]" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, Apple Color Emoji, Segoe UI Emoji' }}>
                {/* Background ambiance */}
                <div className="pointer-events-none fixed inset-0 -z-10">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-30 saturate-0" />
                    <div className="absolute -top-[20%] -left-[10%] h-[40rem] w-[40rem] rounded-full bg-amber-400/20 blur-[160px]" />
                    <div className="absolute -bottom-[10%] -right-[10%] h-[36rem] w-[36rem] rounded-full bg-white/10 blur-[140px]" />
                    <div className="absolute inset-0 bg-gradient-to-b from-[var(--theme)] via-[rgba(0,0,0,0.8)] to-[var(--theme)]" />
                </div>

                <Navbar />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}