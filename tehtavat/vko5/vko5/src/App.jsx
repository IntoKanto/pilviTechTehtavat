import { useState, useEffect } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    var _mtm = window._mtm = window._mtm || [];
    _mtm.push({'mtm.startTime': (new Date().getTime()), 'event': 'mtm.Start'});
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.async=true; g.src='https://pilvipalvelut-matomo.rahtiapp.fi/js/container_1yEYcJ3Y_dev_9a0299c34af640421ad792f5.js'; s.parentNode.insertBefore(g,s);
}, [])

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="https://intokanto.github.io/pilviTechTehtavat/tehtavat/assets/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src="https://intokanto.github.io/pilviTechTehtavat/tehtavat/assets/react.svg" className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
