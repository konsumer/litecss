import { MDXProvider } from '@mdx-js/react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import Button from '../components/Button'
import * as components from './_components.js'

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
      <div className='docs'>
        <header>
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
