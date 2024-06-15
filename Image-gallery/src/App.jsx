import { useState } from "react"
import ImageCard from "./components/imageCard"
import img1 from "./assets/images/img-1.png"
import img2 from "./assets/images/img-2.png"
import img3 from "./assets/images/img-3.png"
import img4 from "./assets/images/img-4.png"
import "./App.css"

export default function App() {
  const [selectedImage, setSelectedImg] = useState("")

  const showLargeImg = (e) => {
    console.log(e.target.src)
    setSelectedImg(e.target.src)
  }
  return (
    <>
      <h1>Image Gallery</h1>
      <p className="instruction">Click on an image</p>

      <div className="container">
        <ImageCard imgSrc={img1} onClick={showLargeImg} />
        <ImageCard imgSrc={img2} onClick={showLargeImg} />
        <ImageCard imgSrc={img3} onClick={showLargeImg} />
        <ImageCard imgSrc={img4} onClick={showLargeImg} />
      </div>

      {selectedImage && (
        <div>
          <p className="p">Selected Image</p>

          <div className="selected-img-container">
            <img src={selectedImage} alt="" />
          </div>
        </div>
      )}
    </>
  )
}
