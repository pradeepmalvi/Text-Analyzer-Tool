import './index.scss'

const TextArea = ({ text, onSetText }: { text: String; onSetText: Function }) => {
  const onInputChange = (e: any) => {
    onSetText(e.target.value)
  }
  return (
    <textarea
      onChange={onInputChange}
      className="text-area"
      placeholder="Paste your text here..."
    />
  )
}

export default TextArea
