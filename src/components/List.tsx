import React, { useState, useEffect } from 'react'
function List() {
  const [list, setList] = useState([])
  const [active, setActive] = useState(null)
  const fetchData = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((json) => setList(json))
      .catch((e) => console.log(e))
  }
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div>
      <h2 className="mb-3">React Js Active Class on List Item Example</h2>
      <ul className="list-group">
        {list.map((item:any) => {
          return (
            <li
              key={item.id}
              onClick={() => setActive(item)}
              className={` ${active == item && 'active'}`}
            >
              {item.name}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
export default List