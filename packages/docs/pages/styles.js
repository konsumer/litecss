import { serialize } from 'next-mdx-remote/serialize'
import { promises as fs } from 'fs'
import { promisify } from 'util'
import { glob as g } from 'glob'
const glob = promisify(g)

export { default } from '../lib/Page.js'

export async function getStaticProps () {
  const mdx = await fs.readFile('articles/styles.mdx')
  const styles = (await glob('../litecss/style/!(font|normalize.css|global.css|theme-default.css)')).map(f => f.replace('../litecss/style/', ''))
  styles.sort()
  styles.unshift('global.css')
  styles.push('theme-default.css')
  const source = await serialize(mdx)
  return { props: { source, scope: { styles } } }
}
