import React from 'react'
import Post from './components/Post'

const App = () => {
  return (
    <main>
    <Post name='Femi' text='React.js is awesome' />
    <Post name='Sam' text='check the course' />
    <Post name='Ayo' text='js is awesome' />
    <Post name='Dan' text='Vue.js is awesome' />
    </main>
  )
}

export default App