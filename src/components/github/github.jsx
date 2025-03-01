import React, { useState, useEffect} from 'react'

function github() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/Dhyey2143')
        .then(Response => Response.json())
        .then(data => {
            console.log(data)
            setData(data)
        })
    }, [])

  return (
    <div className='text-center text-white m-4 bg-gray-500 p-4 text-3xl'>github followers: {data.followers}</div>
  )
}

export default github