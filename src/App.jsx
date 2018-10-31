import React from 'react'

const App = (): React$Element<'div'> => {
  const title = 'React Minimal Setup'

  return (
    <div className="App">
      <header className="App-header">{title}</header>
    </div>
  )
}

export default App
