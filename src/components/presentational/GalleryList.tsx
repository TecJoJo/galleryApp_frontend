import React, { useEffect } from 'react'
import axios from "axios"
import { useState } from 'react';
import { log } from 'console';
import DisplayCard from "./DisplayCard"
function GalleryList() {
    interface IPicture {
        [key:string]:string
    }
    const [list,setList] = useState<Array<IPicture>>([])
    useEffect(()=>{
        axios.get("http://localhost:8000/gallery/list/").then((resp)=>{
            const picutures = resp.data
            setList(picutures)
            
        }).catch((error)=>{
            console.log(error);
            
        })
    },[])


    



    return (
      <>
        {list.map((picture: IPicture) => {
          const { title, description, publish_date: date } = picture;
          return (
            <DisplayCard
              key={title}
              title={title}
              description={description}
              date={date}
            />
          );
        })}
      </>
    );
}

export default GalleryList