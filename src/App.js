import './App.css';

function App() {

  const colors = ['red', 'blue', 'yellow', 'white'];
  const boxes = [];
  let columnNumber = 0;
  
const getRandomInt = (max)=> {
  return parseInt(Math.floor(Math.random() * Math.floor(max)));
}

const createBoxesReverse = () => {
  for (let i = 1; i < 11; i++) {
    if( i % 2 === 0 && columnNumber <= 10) {
      columnNumber = columnNumber + 1;
      boxes.push(
        <div className={`box ${colors[getRandomInt(4)]}`} onClick={(e)=>{
          e.target.className = `box ${colors[getRandomInt(4)]} ${(getRandomInt(2) === 0)? "rotate" : console.log("no rotation")}`;}}> 
          <div className = 'vertical-line'></div> 
        </div>
      );
    } else {
      boxes.push(
      <div className={`box ${colors[getRandomInt(4)]}`} onClick={(e)=>{
        e.target.className = `box ${colors[getRandomInt(4)]} ${(getRandomInt(2) === 0)? "rotate" : console.log("no rotation")}`;}}> 
        <div className = 'horizontal-line'></div> 
      </div>);
    }
  }
}

const createBoxes = () => {
  for (let i = 1; i < 11; i++) {
    if (i % 2 === 0 && columnNumber <= 10) {
      columnNumber = columnNumber + 1;
      boxes.push(
        <div className={`box ${colors[getRandomInt(4)]}`} onClick={(e)=>{
          e.target.className = `box ${colors[getRandomInt(4)]} ${(getRandomInt(2) === 0)? "rotate" : console.log("no rotation")}`; }}> 
          <div className = 'horizontal-line'></div> 
        </div>
      );
    } else {
      boxes.push(
        <div className={`box ${colors[getRandomInt(4)]}`} onClick={(e)=>{
          e.target.className = `box ${colors[getRandomInt(4)]} ${(getRandomInt(2) === 0)? "rotate" : console.log("no rotation")}`;}}> 
          <div className = 'vertical-line'></div> 
        </div>
      );
    }
  }
}

const generateBoxes = () => {
  for (let i = 1; i < 7; i++) {
    if (i % 2 === 0) {
      createBoxes();
      columnNumber = 0;
    } else {
      createBoxesReverse();
      columnNumber = 0;
    }
  }
}

generateBoxes();


  return (
    <div className="App">
      <div className='grid'>
        {boxes}
      </div>
    </div>
  );
}

export default App;
