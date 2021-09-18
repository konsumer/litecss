// this is just for demo-text
import LoremGibson from '../../lib/LoremGibson'

import Panel from 'litecss/components/Panel.jsx'

export default () => (
  <>
    <Panel>
      <h4>Title</h4>
      <LoremGibson />
    </Panel>

    <Panel shaded>
      <h4>Title</h4>
      <LoremGibson />
    </Panel>

    <Panel border>
      <h4>Title</h4>
      <LoremGibson />
    </Panel>
  </>
)
