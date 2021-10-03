import {useState} from "react"
import './App.css';


const menu = ["Cycle", "Running", "Outdoor", "Swim", "triathlon", "GYM", "sportswear", "Nutrition"]
function App() {
  const [isOpen, setIsOpen] = useState(false)
  const handleClick = () => !isOpen ? setIsOpen(true) : setIsOpen(false)
  const [startingX, setstartingX] = useState(0);
  const [movingX, setmovingX] = useState(0);
  const [startingY, setstartingY] = useState(0);

  const [movingY, setmovingY] = useState(0);

  const touchStart = (e) => {
    setstartingX(e.touches[0].clientX);
    setstartingY(e.touches[0].clientY);
  }

  const touchMove = (e) => {
    setmovingX(e.touches[0].clientX) ;
    setmovingY(e.touches[0].clientY) ;
    console.log(movingY)
  }

  const touchEnd = (e) => {
 if(startingX-100 > movingX && movingY > 100){
     setIsOpen(false)
  }
  }


  return (
    <div className="App main" onTouchStart={touchStart} onTouchMove={touchMove} onTouchEnd={touchEnd}>
      {!isOpen && <button onClick={handleClick} className="open"><span>OpenMenu</span></button>}
      {
      <div className={isOpen ? "menu-content animate" : "menu-content"}>
      <button onClick={handleClick} className="close"><span>X</span></button>
      <ul>
      {menu.map((m, i)=> <li key={i}>{m}</li>)}
      </ul>
      </div>
      }
      <div>
        <p>
          Content
        </p>
      </div>
    </div>
  );
}

export default App;
