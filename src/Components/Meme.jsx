import React,{useEffect, useState} from 'react'
import "../index.css";
import memesData from '../memesData';

const Meme = () => {

  const [allMemes, setallMemes] = useState([]);
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });


//   useEffect(() => {
//  fetch("https://api.imgflip.com/get_memes")
//    .then((res) => res.json())
//    .then((data) => setallMemes(data.data.memes));
      
// },[])
  
  useEffect( () => {
    async function getMemes() {
      const res = await fetch("https://api.imgflip.com/get_memes")
      const data = await res.json()
      setallMemes(data.data.memes)
    }
    getMemes()
  },[])


    function getMemeImage() {
      const randomNumber = Math.floor(Math.random() * allMemes.length);
      const url = allMemes[randomNumber].url;
      setMeme((prevMeme) => ({
        ...prevMeme,
        randomImage: url,
      }));
    }
    
  const handleChange = (event) => {
    const { value, name } = event.target
    setMeme(prevMeme => ({
      ...prevMeme,
      [name] : value
    }) )
      }


  return (
    <div>
      <main>
        <div action="" className="form">
          <input
            type="text"
            placeholder="Top text"
            className="form--input"
            name="topText"
            value={meme.topText}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Bottom text"
            className="form--input"
            value={meme.bottomText}
            name="bottomText"
            onChange={handleChange}
          />
          <button className="form--button" onClick={getMemeImage}>
            Get a new meme image 🖼
          </button>
        </div>
        <div className="meme">
          <img src={meme.randomImage} className="meme--image" alt="" />
          <h2 className="meme--text top">{ meme.topText}</h2>
          <h2 className="meme--text bottom">{ meme.bottomText}</h2>
        </div>
      </main>
    </div>
  );
}

export default Meme;