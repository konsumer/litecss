import { serialize } from 'next-mdx-remote/serialize'
import rehypePrism from 'rehype-prism-plus'
import remarkCode from 'remark-code-import'
import { promises as fs } from 'fs'

export { default } from '../lib/Page.js'

export async function getServerSideProps ({ query: { slug } }) {
  let mdx = ''
  try {
    mdx = await fs.readFile(`articles/${slug}.mdx`)
  } catch (e) {
    console.error(e.message)
    mdx = await fs.readFile('articles/404.mdx')
  }
  const mdxSource = await serialize(mdx, { mdxOptions: { rehypePlugins: [rehypePrism], remarkPlugins: [remarkCode], filepath: `articles/${slug}.mdx` } })
  return { props: { source: mdxSource } }
}
