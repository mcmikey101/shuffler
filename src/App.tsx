import { useRef, useState } from 'react'
import './App.css'

interface ItemProps {
  id: number,
  name: string,
  search: string,
  listid: number,
  priority: number,
  setPriority(priority: number, id: number): void,
  removeItem(id: number): void
}

function Item(props: ItemProps) {
  const searched = useRef(false)

  if (props.name.toLowerCase().includes(props.search) && props.search != '') {
    searched.current = true
  } else {
    searched.current = false
  }

  function handleCounter(e: any, id: number) {
    if (e.target.value > 5) {
      props.setPriority(5, id)
    } 
    else if (e.target.value < -5) {
      props.setPriority(-5, id)
    } else {
      props.setPriority(e.target.value, id)
    }
    
  }

  return (
    <div className={searched.current ? 'student searched' : 'student'}>
      <div className="namecont">
        <p className="name">{String(props.listid) + ') ' + props.name}</p>
      </div>
      <div className="inputcont">
        <input min={-5} max={5} onChange={(e) => handleCounter(e, props.id)} value={props.priority} className='priorinput' type="number"/>
        <button onClick={() => props.removeItem(props.id)} className="delete">Del</button>
      </div>
    </div>
  )
}

function App() {

  let group = [
    [{id: 1, name: '1', prior: 0}],
    [{id: 2, name: '2', prior: 0}],
    [{id: 3, name: '3', prior: 0}],
    [{id: 4, name: '4', prior: 0}],
    [{id: 5, name: '5', prior: 0}],
    [{id: 6, name: 'Рахматуллин Камиль', prior: 0}],
    [{id: 7, name: '6', prior: 0}],
    [{id: 8, name: '7', prior: 0}],
    [{id: 9, name: '8', prior: 0}],
    [{id: 10, name: '9', prior: 0}],
    [{id: 11, name: '10', prior: 0}],
    [{id: 12, name: '11', prior: 0}],
    [{id: 13, name: '12', prior: 0}],
    [{id: 14, name: '13', prior: 0}],
    [{id: 15, name: '14', prior: 0}],
    [{id: 16, name: '15', prior: 0}],
    [{id: 17, name: '16', prior: 0}],
    [{id: 18, name: '17', prior: 0}],
    [{id: 19, name: '19', prior: 0}],
    [{id: 20, name: '19', prior: 0}],
    [{id: 21, name: '20', prior: 0}],
    [{id: 22, name: '21', prior: 0}],
    [{id: 23, name: '22', prior: 0}],
    [{id: 24, name: '23', prior: 0}],
    [{id: 25, name: '24', prior: 0}],
    [{id: 26, name: '25', prior: 0}],
    [{id: 27, name: '26', prior: 0}],
    [{id: 28, name: '27', prior: 0}],
    [{id: 29, name: '28', prior: 0}],
    [{id: 30, name: '29', prior: 0}],
    [{id: 31, name: '30', prior: 0}],
  ]
  const [randlist, setRandlist] = useState(group)
  const [edit, setEdit] = useState('Default Table Name')
  const [editing, setEditing] = useState(false)
  const [searching, setSearching] = useState('')

  function quickSort(arr: number[]): number[] {
    if (arr.length <= 1) {
      return arr;
    }
  
    const pivot = arr[arr.length - 1];
    const leftArr = [];
    const rightArr = [];
  
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < pivot) {
        leftArr.push(arr[i]);
      } else {
        rightArr.push(arr[i]);
      }
    }
  
    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
  }

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
    let keys: (string)[] = Object.keys(subs)
    let numkeys: number[] = []
    for (let i = 0; i < keys.length; i++) {
      numkeys.push(Number(keys[i]))
    }
    numkeys = quickSort(numkeys)
    numkeys.reverse()
    let p_shuffle: any = []
    for (let i = 0; i < numkeys.length; i++) {
      let sub = shuffle([subs[numkeys[i]]][0])
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
    if (!localStorage.getItem('test')) {
      localStorage.setItem('test', '1')
    } else {
      let temp = Number(localStorage.getItem('test')) + 1
      localStorage.setItem('test', String(temp))
    }
  }
  function handleReset() {
    for (let i = 0; i < group.length; i++) {
      group[i][0].prior = 0
    }
    setRandlist(group)
    setEdit('Default Table Name')
    setEditing(false)
    setSearching('')
  }
  function handleEdit(e: any) {
    setEdit(e.target.value)
  }
  function handleEditing() {
    setEditing(!editing)
  }
  function handleSearch(e: any) {
    setSearching(e.target.value)
  }

  return (
    <>
    <div className="cont">
      <p className="reshuffles">Reshuffles on this device: {localStorage.getItem('test')}</p>
      <div className="btns">
        <button onClick={() => handleReset()} className="reset">Reset</button>
        <button onClick={() => handleShuffle()} className="shuffle">Shuffle</button>
      </div>
      <div className="searchcont">
        <input onChange={(e) => handleSearch(e)} type="text" className="search" placeholder='Search for a student'/>
      </div>
      <div className="items">
        <div className="editcont">
          {editing ? 
          <input maxLength={30} value={edit} onChange={(e) => handleEdit(e)} type="text" className="tablename" placeholder='Table Name'/> : 
          <p className="shufflename">{edit}</p>}
          <button onClick={() => handleEditing()} className="editbtn delete">Edit</button>
        </div>
        {randlist.map((i) => {
          return (
            <Item 
            search={searching}
            removeItem={removeItem} 
            setPriority={setPriority} 
            priority={i[0].prior} 
            listid={randlist.indexOf(i) + 1} 
            id={i[0].id} 
            key={i[0].id} 
            name={i[0].name}/>
          )
        })}
      </div>
    </div>
    </>
  )
}

export default App
