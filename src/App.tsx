import { useState, useEffect } from 'react'
import './App.scss'
import BottomResultBox from './components/BottomResultBox'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ResultBox from './components/ResultBox'
import TextArea from './components/TextArea'
import { pronouns as data } from './data/pronouns'

const App = () => {
  const [text, setText] = useState('')
  const [words, setWords] = useState(0)
  const [characters, setCharacters] = useState(0)
  const [sentences, setSentences] = useState(0)
  const [paragraphs, setParagraphs] = useState(0)
  const [pronouns, setPronouns] = useState(0)

  useEffect(() => {
    const latestWords = text.split(' ')
    const filterWords = latestWords.filter((w) => w !== '')
    const latestSentences = text.split('.')
    const filterSentences = latestSentences.filter((w) => w !== '')
    const filterParagraphs = text.split('.')
    setWords(filterWords.length)
    setCharacters(text.length)
    setSentences(filterSentences.length)
    setParagraphs(filterParagraphs.length)

    const numberOfPronoun = checkPronoun(text)
    setPronouns(numberOfPronoun)
  }, [text])

  const checkPronoun = (text: String) => {
    const latestWords = text.split(' ')
    let count = 0
    data.map((d: String) => {
      if (latestWords.some((t) => t === d)) {
        count++
      }
    })

    return count
  }

  return (
    <>
      <Navbar />
      <div className="small-container">
        <div className="main-app">
          <ResultBox
            words={words}
            characters={characters}
            sentences={sentences}
            paragraphs={paragraphs}
            pronouns={pronouns}
          />
          <TextArea text={text} onSetText={(text: any) => setText(text)} />
          <BottomResultBox />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
