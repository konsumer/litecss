import { serialize } from 'next-mdx-remote/serialize'
import rehypePrism from 'rehype-prism-plus'
import { promises as fs } from 'fs'

export { default } from '../lib/Page.js'

export async function getStaticProps () {
  const source = await fs.readFile('articles/getting_started.mdx')
  const mdxSource = await serialize(source, { mdxOptions: { rehypePlugins: [rehypePrism] } })
  return { props: { source: mdxSource } }
}
