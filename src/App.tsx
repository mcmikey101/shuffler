import { useState } from 'react'
import './App.css'

interface ItemProps {
  name: string,
  listid: number
}

function Item(props: ItemProps) {
  const [val, setVal] = useState(0)

  function handleCounter(e: any) {
    setVal(e.target.value)
  }

  return (
    <div className="student">
      <p className="listid">{String(props.listid) + ')'}</p>
      <p className="name">{props.name}</p>
      <div className="inputcont">
        <label htmlFor="priority">Priority</label>
        <input onChange={(e) => handleCounter(e)} value={val} className='priorinput' name='priority' type="number"/>
      </div>
    </div>
  )
}

function App() {

  const group = ['Ivan', 'Max', 'Joe', 'Bill', 'Henry']
  const [randlist, setRandlist] = useState(group)

  function shuffle(array: string[]) {
    let copyarr = array.slice()
    let currentIndex = copyarr.length
    while (currentIndex != 0) {
      let randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex--
      [copyarr[currentIndex], copyarr[randomIndex]] = [copyarr[randomIndex], copyarr[currentIndex]]
    }
    return copyarr
  }

  function handleShuffle() {
    setRandlist(shuffle(randlist))
  }
  function handleReset() {
    setRandlist(group)
  }
  function handleResetPriority() {

  }
  return (
    <>
    <div className="cont">
      <div className="resetbtns">
        <button onClick={() => handleReset()} className="reset">Reset</button>
        <button onClick={() => handleResetPriority()} className="reset">Reset Priority</button>
      </div>
      <div className="items">
        <p className="shufflename">Shuffle Name</p>
        {randlist.map((i) => {
          return (
            <Item listid={randlist.indexOf(i) + 1} key={i} name={i}/>
          )
        })}
      </div>
      <button onClick={() => handleShuffle()} className="shuffle">Shuffle</button>
    </div>
    </>
  )
}

export default App
