import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Type_List = [
    {id:1, type:"Frontend",level:'Beginner',duration: '1 Month'},
    {id:2, type:"Frontend",level:'Intermediate',duration: '2 Month'},
    {id:3, type:"Frontend",level:'GOD',duration: '3 Month'}
]

const Typelist = () => {
    const navigate = useNavigate()
  return (
    <div>
        <h1>Type List Page</h1>
        {Type_List.map(type => {
            return (
                <div key={type.id}>
                    <h2>{type.type}</h2>
                    <p>{type.duration} {type.level}</p>
                </div>
            )
        })}
        <Button variant='success' onClick={()=> navigate('/')} style={{marginTop: 50}}>Course List</Button>
    </div>
  )
}

export default Typelist