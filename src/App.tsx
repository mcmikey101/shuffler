import { useState } from 'react'
import './App.css'

interface ItemProps {
  id: number,
  name: string,
  listid: number,
  priority: number,
  setPriority(priority: number, id: number): void,
  removeItem(id: number): void
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
        <input min={-5} max={5} onChange={(e) => handleCounter(e, props.id)} value={props.priority} className='priorinput' name='priority' type="number"/>
        <button onClick={() => props.removeItem(props.id)} className="delete">Del</button>
      </div>
    </div>
  )
}

function App() {

  let group = [
    [{id: 1, name: 'a', prior: 0}],
    [{id: 2, name: 'b', prior: 0}],
    [{id: 3, name: 'c', prior: 0}],
    [{id: 4, name: 'd', prior: 0}],
    [{id: 5, name: 'e', prior: 0}],
    [{id: 6, name: 'f', prior: 0}],
    [{id: 7, name: 'i', prior: 0}],
    [{id: 8, name: 'j', prior: 0}],
    [{id: 9, name: 'k', prior: 0}],
    [{id: 10, name: 'l', prior: 0}],
    [{id: 11, name: 'm', prior: 0}],
    [{id: 12, name: 'n', prior: 0}],
    [{id: 13, name: 'o', prior: 0}],
    [{id: 14, name: 'p', prior: 0}],
    [{id: 15, name: 'r', prior: 0}],
    [{id: 16, name: 'a', prior: 0}],
    [{id: 17, name: 'b', prior: 0}],
    [{id: 18, name: 'c', prior: 0}],
    [{id: 19, name: 'd', prior: 0}],
    [{id: 20, name: 'e', prior: 0}],
    [{id: 21, name: 'f', prior: 0}],
    [{id: 22, name: 'i', prior: 0}],
    [{id: 23, name: 'j', prior: 0}],
    [{id: 24, name: 'k', prior: 0}],
    [{id: 25, name: 'l', prior: 0}],
    [{id: 26, name: 'm', prior: 0}],
    [{id: 27, name: 'n', prior: 0}],
    [{id: 28, name: 'o', prior: 0}],
    [{id: 29, name: 'p', prior: 0}],
    [{id: 30, name: 'r', prior: 0}],
    [{id: 31, name: 'r', prior: 0}],
  ]
  const [randlist, setRandlist] = useState(group)
  const [edit, setEdit] = useState('Default Table Name')
  const [editing, setEditing] = useState(false)

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
    let p_shuffle: any = []
    for (let i = 0; i < keys.length; i++) {
      let sub = shuffle([subs[keys[i]]][0])
      p_shuffle.push(sub)
    }
    let newarr: any = []
    for (let i = 0; i < p_shuffle.length; i++) {
      for (let j = 0; j < p_shuffle[i].length; j++) {
        newarr.push([p_shuffle[i][j]])
      }
    }
    setRandlist(newarr)
  }

  function removeItem(id: number) {
    let copyarr = randlist.slice()
    console.log()
    for (let i = 0; i < randlist.length; i++) {
      if (randlist[i][0].id == id) {
        copyarr.splice(i, 1)
      }
    }
    setRandlist(copyarr)
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
    // if (!localStorage.getItem('reshuffles')) {
    //   localStorage.
    //   localStorage.setItem('reshuffles', '1')
    // } else {
    //   let num = Number(localStorage.getItem('reshuffles')) + 1
    //   localStorage.setItem('reshuffles', String(num))
    //   let temp = localStorage.getItem('reshuffles')
    //   setReshuffles(temp)
    // }
    if (!localStorage.getItem('test')) {
      localStorage.setItem('test', '1')
    } else {
      let temp = Number(localStorage.getItem('test')) + 1
      localStorage.setItem('test', String(temp))
    }
    console.log(localStorage.getItem('test'))
  }
  function handleReset() {
    for (let i = 0; i < group.length; i++) {
      group[i][0].prior = 0
    }
    setRandlist(group)
    setEdit('Default Table Name')
    setEditing(false)
  }
  function handleEdit(e: any) {
    setEdit(e.target.value)
  }
  function handleEditing() {
    setEditing(!editing)
  }
  return (
    <>
    <div className="cont">
      <div className="btns">
        <button onClick={() => handleReset()} className="reset">Reset</button>
        <button onClick={() => handleShuffle()} className="shuffle">Shuffle</button>
      </div>
      <p className="reshuffles">Reshuffles on this device: {localStorage.getItem('test')}</p>
      <div className="items">
        <div className="editcont">
          {editing ? 
          <input value={edit} onChange={(e) => handleEdit(e)} type="text" className="tablename" placeholder='Table Name'/> : 
          <p className="shufflename">{edit}</p>}
          <button onClick={() => handleEditing()} className="editbtn delete">Edit</button>
        </div>
        {randlist.map((i) => {
          return (
            <Item removeItem={removeItem} setPriority={setPriority} priority={i[0].prior} listid={randlist.indexOf(i) + 1} id={i[0].id} key={i[0].id} name={i[0].name}/>
          )
        })}
      </div>
    </div>
    </>
  )
}

export default App
