// this exports the shared components for markdown parsing

import Highlight, { defaultProps } from 'prism-react-renderer'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'

import LoremGibson from '../components/LoremGibson.js'
import Button from '../components/Button.js'
import Panel from '../components/Panel.js'

// this syntax-highlights, but leaves off theme so I can use my own CSS
const CodeView = ({ children, language, ...props }) => {
  return (
    <Highlight {...defaultProps} code={children.trim()} language={language} theme={undefined} {...props}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}

export const pre = props => <div {...props} />

// this is the scope, for code-demos
const codeScope = {
  LoremGibson,
  Button,
  Panel
}

// add "live=true" to your code-block to make a react-live demo
export const code = ({ live, children, className, ...props }) => {
  const language = className.replace('language-', '')
  if (language === '') {
    return (<code className={className} {...props}>{children}</code>)
  } else {
    if (live) {
      return (
        <LiveProvider code={children.trim()} scope={codeScope} theme={undefined}>
          <LiveEditor />
          <div style={{ color: 'red', background: 'pink' }}>
            <LiveError />
          </div>
          <div style={{ marginTop: '1em' }}>
            <LivePreview />
          </div>
        </LiveProvider>
      )
    } else {
      return (
        <CodeView language={language}>{children}</CodeView>
      )
    }
  }
}
