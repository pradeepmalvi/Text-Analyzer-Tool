import './index.scss'
import { useEffect, useState } from 'react'

const ResultBox = ({
  words,
  characters,
  sentences,
  paragraphs,
  pronouns
}: {
  words: number
  characters: number
  sentences: number
  paragraphs: number
  pronouns: number
}) => {
  const [resultBar, setResultBar] = useState([
    {
      title: 'Words',
      value: 0,
    },
    {
      title: 'Characters',
      value: 0,
    },
    {
      title: 'Sentences',
      value: 0,
    },
    {
      title: 'Paragraphs ',
      value: 0,
    },
    {
      title: 'Pronouns',
      value: 0,
    },
  ])

  useEffect(() => {
    let latestResult
    latestResult = resultBar.map((result) =>
      result.title === 'Words' ? { ...result, value: words } : result
    )

    latestResult = latestResult.map((result) =>
      result.title === 'Characters' ? { ...result, value: characters } : result
    )

    latestResult = latestResult.map((result) =>
      result.title === 'Sentences' ? { ...result, value: sentences } : result
    )

    latestResult = latestResult.map((result) =>
      result.title === 'Paragraphs' ? { ...result, value: paragraphs } : result
    )

    latestResult = latestResult.map((result) =>
      result.title === 'Pronouns' ? { ...result, value: pronouns } : result
    )

    setResultBar(latestResult)
  }, [words, characters, sentences, paragraphs, pronouns])

  return (
    <div className="result-bar">
      {resultBar.map(({ title, value }) => (
        <div className="result-box" key={title}>
          <span className="box-title">{title}</span>
          <span className="box-value">{value}</span>
        </div>
      ))}
    </div>
  )
}

export default ResultBox
