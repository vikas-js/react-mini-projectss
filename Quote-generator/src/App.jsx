import { useEffect, useRef, useState } from "react"
import axios from "axios"
import "./App.css"
function App() {
  const [quote, setQuote] = useState(null)
  const [author, setAuthor] = useState(null)
  const inputTag = useRef("")

  useEffect(() => {
    getQuote() //Generate Quotes when the page reloads
  }, [])
  const getQuote = async (e) => {
    try {
      const tag = inputTag.current.value
      const res = await axios.get(
        `https://api.quotable.io/quotes/random?tags=${tag}`
      )
      if (res.data && res.data.length > 0) {
        console.log(res)
        setQuote(res.data[0].content)
        setAuthor(res.data[0].author)
      } else {
        setQuote("Sorry No Quotes Found Related to the given tags")
        setAuthor(null)
      }
    } catch (e) {
      console.log(e)
    }
  }

  if (!quote) {
    return <div className="loader"></div>
  }

  return (
    <>
      <main>
        <h1>Quote Generator</h1>
        <div className="container">
          <div className="quote">{quote}</div>
          <p className="author">{author}</p>
          <div className="input-by-user">
            Tags:
            <input type="text" ref={inputTag} />
          </div>
          <button onClick={getQuote}>Generate</button>
        </div>
      </main>
    </>
  )
}
export default App

//   useEffect(() => {
//     axios
//       .get(`https://api.quotable.io/quotes/random?`)
//       .then(({ data }) => {

//         setQuote(data[0].content)
//         setAuthor(data[0].author)
//       })
//       .catch((err) => {
//         console.log(err)
//       })
//   }, [])
// useEffect(()=>{
//   getQuote()
// },[])
