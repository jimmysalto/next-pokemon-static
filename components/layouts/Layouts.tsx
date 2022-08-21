import React, { FC } from 'react'
import Head from 'next/head'
import { Navbar } from '../ui';

interface Props {
    title?: string;
    children?: any
}

const origin = (typeof window === 'undefined' ? '' : window.origin);
export const Layout: FC<Props> = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>{title || 'PokemonApp'}</title>
                <meta name="author" content="Fernando Herrera" />
                <meta name="description" content={`Informacipon sobre el pokémon ${title}`} />
                <meta name="keywords" content={`${title},pokemon,pokedex`} />

                <meta property="og:title" content={`${title} information`} />
                <meta property="og:description" content={`Esta es la información sobre pokemon`} />
                <meta property="og:image" content={`${origin}/img/banner.png`} />
            </Head>

            <Navbar />

            <main style={{
                padding: '0px 20px'
            }}>
                {children}
            </main>
        </>
    )
}
