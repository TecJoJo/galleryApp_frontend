import React from 'react'
interface IPicture  {
    title:string
    description:string
    date:string
}

function DisplayCard(props: IPicture) {
  return (
    <ul>
        <li>{props.title}</li>
        <li>{props.description}</li>
        <li>{props.date}</li>
    </ul>
  )
}

export default DisplayCard