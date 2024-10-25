import { useRef, useState } from 'react'
import './App.css'

interface ItemProps {
  id: number,
  name: string,
  search: string,
  listid: number,
  priority: number,
  setPriority(priority: number | string, id: number): void,
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
    props.setPriority(e.target.value, id)
  }
  function handleBlur(e: any, id: number) {
    if (e.target.value == '') {
      props.setPriority(0, id)
    } else {
      props.setPriority(Number(e.target.value), id)
    }
  }
  function handleFocus(e: any, id: number) {
    if (e.target.value == 0) {
      props.setPriority('', id)
    }
  }
  return (
    <div className={searched.current ? 'student searched' : 'student'}>
      <div className="namecont">
        <p className="name">{String(props.listid) + ')' + props.name}</p>
      </div>
      <div className="inputcont">
        <label htmlFor="prior">Приоритет</label>
        <input name='prior' onFocus={(e) => handleFocus(e, props.id)} onBlur={(e) => handleBlur(e, props.id)} onChange={(e) => handleCounter(e, props.id)} value={props.priority} className='priorinput' type="number"/>
        <button onClick={() => props.removeItem(props.id)} className="delete">
        <svg className='binsvg' fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 408.483 408.483">
        <g>
          <g>
            <path d="M87.748,388.784c0.461,11.01,9.521,19.699,20.539,19.699h191.911c11.018,0,20.078-8.689,20.539-19.699l13.705-289.316
              H74.043L87.748,388.784z M247.655,171.329c0-4.61,3.738-8.349,8.35-8.349h13.355c4.609,0,8.35,3.738,8.35,8.349v165.293
              c0,4.611-3.738,8.349-8.35,8.349h-13.355c-4.61,0-8.35-3.736-8.35-8.349V171.329z M189.216,171.329
              c0-4.61,3.738-8.349,8.349-8.349h13.355c4.609,0,8.349,3.738,8.349,8.349v165.293c0,4.611-3.737,8.349-8.349,8.349h-13.355
              c-4.61,0-8.349-3.736-8.349-8.349V171.329L189.216,171.329z M130.775,171.329c0-4.61,3.738-8.349,8.349-8.349h13.356
              c4.61,0,8.349,3.738,8.349,8.349v165.293c0,4.611-3.738,8.349-8.349,8.349h-13.356c-4.61,0-8.349-3.736-8.349-8.349V171.329z"/>
            <path d="M343.567,21.043h-88.535V4.305c0-2.377-1.927-4.305-4.305-4.305h-92.971c-2.377,0-4.304,1.928-4.304,4.305v16.737H64.916
              c-7.125,0-12.9,5.776-12.9,12.901V74.47h304.451V33.944C356.467,26.819,350.692,21.043,343.567,21.043z"/>
          </g>
        </g>
        </svg>
        </button>
      </div>
    </div>
  )
}

function App() {

  let group = [
    [{id: 1, name: 'Акимушкина Мария', prior: 0}],
    [{id: 2, name: 'Андреянов Георгий', prior: 0}],
    [{id: 3, name: 'Афонина Елена', prior: 0}],
    [{id: 4, name: 'Давлатов Амирхан', prior: 0}],
    [{id: 5, name: 'Зюбин Матвей', prior: 0}],
    [{id: 6, name: 'Кагадеев Василий', prior: 0}],
    [{id: 7, name: 'Кондратов Григорий', prior: 0}],
    [{id: 8, name: 'Королев Артем', prior: 0}],
    [{id: 9, name: 'Косарев Сергей', prior: 0}],
    [{id: 10, name: 'Кречетников Артем', prior: 0}],
    [{id: 11, name: 'Кузнецов Иван', prior: 0}],
    [{id: 12, name: 'Куликов Алексей', prior: 0}],
    [{id: 13, name: 'Лашков Юрий', prior: 0}],
    [{id: 14, name: 'Лебедева Елизавета', prior: 0}],
    [{id: 15, name: 'Махмудов Ахмад', prior: 0}],
    [{id: 16, name: 'Медведько Вадим', prior: 0}],
    [{id: 17, name: 'Натесов Гавриил', prior: 0}],
    [{id: 18, name: 'Подлуцкий Никита', prior: 0}],
    [{id: 19, name: 'Подъельников Михаил', prior: 0}],
    [{id: 20, name: 'Пшеничный Алексей', prior: 0}],
    [{id: 21, name: 'Раматиллаев Кубатбек', prior: 0}],
    [{id: 22, name: 'Рахматуллин Камиль', prior: 0}],
    [{id: 23, name: 'Редько Евгения', prior: 0}],
    [{id: 24, name: 'Семенченко Максим', prior: 0}],
    [{id: 25, name: 'Сесицкий Иван', prior: 0}],
    [{id: 26, name: 'Сорокин Георгий', prior: 0}],
    [{id: 27, name: 'Титов Дмитрий', prior: 0}],
    [{id: 28, name: 'Толибов Руслан', prior: 0}],
    [{id: 29, name: 'Холявко Анна', prior: 0}],
    [{id: 30, name: 'Хусейнов Санжарбек', prior: 0}],
    [{id: 31, name: 'Чуклов Михаил', prior: 0}],
  ]

  const [randlist, setRandlist] = useState(group)
  const [edit, setEdit] = useState('Лаба')
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
      let temp = copyarr[currentIndex]
      copyarr[currentIndex] = copyarr[randomIndex]
      copyarr[randomIndex] = temp
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
    let keys: string[] = Object.keys(subs)
    let numkeys: number[] = []
    for (let i = 0; i < keys.length; i++) {
      numkeys.push(Number(keys[i]))
    }
    numkeys = quickSort(numkeys)
    numkeys.reverse()
    let sub: any = []
    let p_shuffle: any = []
    for (let i = 0; i < numkeys.length; i++) {
      sub = shuffle(subs[numkeys[i]])
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

  function setPriority(priority: any, id: number) {
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
    setRandlist(group)
    setEdit('Лаба')
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
  function handleCopy() {
    let date = new Date()
    let year = date.getFullYear()
    let month = '0'.repeat(2 - String(date.getMonth()).length) + date.getMonth()
    let day = '0'.repeat(2 - String(date.getDate()).length) + date.getDate()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()
    let time = day + '.' + month + '.' + year + ', ' + hours + ':' + minutes + ':' + seconds
    let copytext = edit + ', ' + "Рандомизировано: " + time + "\n"
    for (let i = 0; i < randlist.length; i++) {
      if (randlist[i][0].prior != 0) {
        copytext += String(i + 1) + ') ' + randlist[i][0].name + ', ' + 'Приоритет: ' + String(randlist[i][0].prior) + "\n"  
      } else {
        copytext += String(i + 1) + ') ' + randlist[i][0].name + "\n"  
      }
    }
    navigator.clipboard.writeText(copytext)
  }
  return (
    <>
    <div className="title">Shuffler</div>
    <div className="cont">
      <div className="btns">
        <button onClick={() => handleReset()} className="reset">Сброс</button>
        <button onClick={() => handleShuffle()} className="shuffle">Рандом</button>
        <button onClick={() => handleCopy()} className="copy"><p>Копировать в буфер</p></button>
      </div>
      <div className="searchcont">
        <input value={searching} onChange={(e) => handleSearch(e)} type="text" className="search" placeholder='Поиск студента'/>
      </div>
      <div className="items">
        <div className="editcont">
          {editing ? 
          <input maxLength={30} value={edit} onChange={(e) => handleEdit(e)} type="text" className="tablename" placeholder='Table Name'/> : 
          <div className='sncont'><p className="shufflename">{edit}</p></div>}
          <button onClick={() => handleEditing()} className="editbtn delete">
<svg className='editsvg' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
          </button>
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
