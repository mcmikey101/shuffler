import { useState } from 'react'
import './App.css'

interface ItemProps {
  id: number,
  name: string,
  listid: number,
  priority: number,
  setPriority(priority: number, id: number): void
}

function Item(props: ItemProps) {

  function handleCounter(e: any, id: number) {
    props.setPriority(e.target.value, id)
  }

  return (
    <div className="student">
      <p className="listid">{String(props.listid) + ')'}</p>
      <p className="name">{props.name}</p>
      <div className="inputcont">
        <label htmlFor="priority">Priority</label>
        <input onChange={(e) => handleCounter(e, props.id)} value={props.priority} className='priorinput' name='priority' type="number"/>
      </div>
    </div>
  )
}

function App() {

  let group = [
    [{id: 1, name: 'Joe', prior: 0}],
    [{id: 2, name: 'Jon', prior: 0}],
    [{id: 3, name: 'Jok', prior: 0}],
    [{id: 4, name: 'Jom', prior: 0}],
    [{id: 5, name: 'Job', prior: 0}],
  ]
  const [randlist, setRandlist] = useState(group)

  function shuffle(array: any) {
    let copyarr = array.slice()
    let currentIndex = copyarr.length
    while (currentIndex != 0) {
      let randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex--
      [copyarr[currentIndex], copyarr[randomIndex]] = [copyarr[randomIndex], copyarr[currentIndex]]
    }
    return copyarr
  }

  function setPriority(priority: number, id: number) {
    let copyarr = randlist.slice()
    for (let i = 0; i < copyarr.length; i++) {
      if (copyarr[i][0].id == id) {
        copyarr[i][0].prior = priority
      }
    }
    setRandlist(copyarr)
  }

  function handleShuffle() {
    setRandlist(shuffle(randlist))
  }
  function handleReset() {
    for (let i = 0; i < group.length; i++) {
      group[i][0].prior = 0
    }
    setRandlist(group)
  }
  return (
    <>
    <div className="cont">
      <button onClick={() => handleReset()} className="reset">Reset</button>
      <div className="items">
        <p className="shufflename">Shuffle Name</p>
        {randlist.map((i) => {
          return (
            <Item setPriority={setPriority} priority={i[0].prior} listid={randlist.indexOf(i) + 1} id={i[0].id} key={i[0].id} name={i[0].name}/>
          )
        })}
      </div>
      <button onClick={() => handleShuffle()} className="shuffle">Shuffle</button>
    </div>
    </>
  )
}

export default App
