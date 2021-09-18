import { MDXRemote } from 'next-mdx-remote'
import Link from 'next/link'
import Code from '../lib/Code'
import LoremGibson from '../lib/LoremGibson'

import Button from 'litecss/components/Button.jsx'

import ExampleButton1 from '../articles/examples/Button1.js'
import ExamplePanel1 from '../articles/examples/Panel1.js'

const ListStyle = ({ styles, type }) => {
  let code = ''
  if (type === 'css') {
    code = styles.map(s => `@import 'litecss/style/${s}';`).join('\n')
  }
  if (type === 'html') {
    code = styles.map(s => `<link rel="stylesheet" href="https://unpkg.com/litecss/style/${s}" />`).join('\n')
  }
  if (type === 'js') {
    code = styles.map(s => `import from 'litecss/style/${s}'`).join('\n')
  }
  return (
    <Code language={type} code={code} />
  )
}

const components = {
  Link,
  Code,
  ListStyle,
  LoremGibson,
  ExampleButton1,
  ExamplePanel1
}

export default function Page ({ source, scope }) {
  return (
    <>
      <aside>
        <h1>
          <img src='/logo.svg' alt='' height={30} />
          litecss
        </h1>
        <nav>
          <Link href='/'>
            <Button>Getting Started</Button>
          </Link>
          <Link href='/styles'>
            <Button>Style</Button>
          </Link>
          <Link href='/button'>
            <Button>Buttons</Button>
          </Link>
          <Link href='/panel'>
            <Button>Panels</Button>
          </Link>
        </nav>
      </aside>
      <main>
        <MDXRemote {...source} components={components} scope={scope} />
      </main>
    </>
  )
}
