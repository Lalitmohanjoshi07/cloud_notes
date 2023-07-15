import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState=(props) =>  {
  const x = [
    {
      "_id": "64abee58732f5b7d95b30c8e",
      "user": "64a99c639b705f38cf37948d",
      "title": "updated hai",
      "description": "hello ye mera pehle note hai.dfvhbv",
      "tag": "general",
      "date": "2023-07-10T11:41:12.228Z",
      "__v": 0
    },
    {
      "_id": "64ac225ae454bfb4319dee67",
      "user": "64a99c639b705f38cf37948d",
      "title": "my note",
      "description": "hello ye mera pehle note hai",
      "tag": "general",
      "date": "2023-07-10T15:23:06.790Z",
      "__v": 0
    },
    {
      "_id": "64ac225ce454bfb4319dee69",
      "user": "64a99c639b705f38cf37948d",
      "title": "my note",
      "description": "hello ye mera pehle note hai",
      "tag": "general",
      "date": "2023-07-10T15:23:08.117Z",
      "__v": 0
    },
    {
      "_id": "64ac225de454bfb4319dee6b",
      "user": "64a99c639b705f38cf37948d",
      "title": "my note",
      "description": "hello ye mera pehle note hai",
      "tag": "general",
      "date": "2023-07-10T15:23:09.027Z",
      "__v": 0
    }
  ];

  const[note,setNote] = useState(x);
  return(
     <NoteContext.Provider value={{note, setNote}}>
        {props.children}
     </NoteContext.Provider>
     );
}

export default NoteState;
