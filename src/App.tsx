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
      <div className="namecont">
        <p className="name">{String(props.listid) + ') ' + props.name}</p>
      </div>
      <div className="inputcont">
        <label htmlFor="priority">Priority</label>
        <input onChange={(e) => handleCounter(e, props.id)} value={props.priority} className='priorinput' name='priority' type="number"/>
      </div>
    </div>
  )
}

function App() {

  let group = [
    [{id: 1, name: 'JoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoe', prior: 0}],
    [{id: 2, name: 'JonJonJonJonJonJonJonJonJonJon', prior: 0}],
    [{id: 3, name: 'JokJokJokJokJokJokJokJokJokJokJok', prior: 0}],
    [{id: 4, name: 'JomJomJomJomJomJom', prior: 0}],
    [{id: 5, name: 'JobJobJobJobJobJobJobJob', prior: 0}],
    [{id: 6, name: 'JoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoe', prior: 0}],
    [{id: 7, name: 'JonJonJonJonJonJonJonJonJonJon', prior: 0}],
    [{id: 8, name: 'JokJokJokJokJokJokJokJokJokJokJok', prior: 0}],
    [{id: 9, name: 'JomJomJomJomJomJom', prior: 0}],
    [{id: 10, name: 'JobJobJobJobJobJobJobJob', prior: 0}],
    [{id: 11, name: 'JoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoe', prior: 0}],
    [{id: 12, name: 'JonJonJonJonJonJonJonJonJonJon', prior: 0}],
    [{id: 13, name: 'JokJokJokJokJokJokJokJokJokJokJok', prior: 0}],
    [{id: 14, name: 'JomJomJomJomJomJom', prior: 0}],
    [{id: 15, name: 'JobJobJobJobJobJobJobJob', prior: 0}],
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
  function subgroup() {
    let subs: any = {}
    for (let i = 0; i < randlist.length; i++) {
      if (!subs[randlist[i][0].prior]) {
        subs[randlist[i][0].prior] = [randlist[i][0]]
      } else {
        subs[randlist[i][0].prior].push(randlist[i][0])
      }
    }
    let keys: (string | number)[] = Object.keys(subs)
    for (let i = 0; i < keys.length; i++) {
      keys[i] = Number(keys[i])
    }
    keys.sort()
    keys.reverse()
    let p_shuffle: string[][] = []
    for (let i = 0; i < keys.length; i++) {
      p_shuffle.push(shuffle([subs[keys[i]]]))
    }
    let newarr: any = []
    console.log(p_shuffle)
    for (let i = 0; i < p_shuffle.length; i++) {
      for (let j = 0; j < p_shuffle[i].length; j++) {
        for (let q of p_shuffle[i][j]) {
          newarr.push([q])
        }
      }
    }
    setRandlist(newarr)
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
    subgroup()
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
      <div className="btns">
        <button onClick={() => handleReset()} className="reset">Reset</button>
        <button onClick={() => handleShuffle()} className="shuffle">Shuffle</button>
      </div>
      <div className="items">
        <p className="shufflename">Shuffle Name</p>
        {randlist.map((i) => {
          return (
            <Item setPriority={setPriority} priority={i[0].prior} listid={randlist.indexOf(i) + 1} id={i[0].id} key={i[0].id} name={i[0].name}/>
          )
        })}
      </div>
    </div>
    </>
  )
}

export default App
