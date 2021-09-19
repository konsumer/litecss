import { MDXProvider } from '@mdx-js/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Head from 'next/head'

import Button from '../components/Button'
import * as components from '../components.js'

import '../style/normalize.css'
import '../style/global.css'
import '../style/button.css'
import '../style/panel.css'
import '../style/seperator.css'
import '../style/theme-default.css'
import '../style/docs.css'

function NavLink ({ children, href }) {
  const router = useRouter()
  const active = href === router.pathname
  return (
    <Link href={href}>
      <Button ghost={!active} primary={active}>{children}</Button>
    </Link>
  )
}

function MyApp ({ Component, pageProps }) {
  return (
    <MDXProvider components={components}>
      <Head>
        <title>litecss</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
        <meta name='msapplication-TileColor' content='#da532c' />
      </Head>
      <div className='docs'>
        <header>
          <img src='/logo.svg' height='32' alt='' />
          <h1>litecss</h1>
        </header>
        <div className='content'>
          <aside>
            <NavLink href='/'>Getting started</NavLink>
            <h4>Components</h4>
            <NavLink href='/button'>Button</NavLink>
            <NavLink href='/panel'>Panel</NavLink>
          </aside>
          <main>
            <Component {...pageProps} />
          </main>
        </div>
      </div>
    </MDXProvider>
  )
}

export default MyApp
