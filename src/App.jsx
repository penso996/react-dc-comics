import Header from './components/page_content/Header'
import Main from './components/page_content/Main'
import Footer from './components/page_content/Footer'

function App() {

  const linksData = [
    { id: 1, text: 'CHARACTERS', url: '#', current: false },
    { id: 2, text: 'COMICS', url: '#', current: false },
    { id: 2, text: 'MOVIES', url: '#', current: false },
    { id: 4, text: 'TV', url: '#', current: false },
    { id: 5, text: 'GAMES', url: '#', current: true },
    { id: 6, text: 'COLLECTIBLES', url: '#', current: false },
    { id: 7, text: 'VIDEOS', url: '#', current: false },
    { id: 8, text: 'FANS', url: '#', current: false },
    { id: 9, text: 'NEWS', url: '#', current: false },
    { id: 10, text: 'SHOP', url: '#', current: false },
  ]

  return (
    <>
      <Header links={linksData} />
      <Main />
      <Footer />
    </>
  )
}

export default App