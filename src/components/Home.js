import { useContext, useEffect, useState} from "react";
import AddNote from "./AddNote";
import Notes from "./Notes";
import Resubmisson from "./Resubmisson";
import noteContext from "../context/notes/NoteContext";

const Home = () => {
  let context=useContext(noteContext);
  let [item,setItem] = useState();
  
  const {fetchNote} =context;
  const fetch = async() =>{
    let res=await fetchNote();
    if(res){
      setItem([<AddNote key='2'/>,<Notes key='1'/>])
    }else{
      setItem(<Resubmisson/>)
    }
  }

  useEffect(()=>{
    fetch();
    //eslint-disable-next-line
  },[])

  return (
    <div className="container">
    {item}
    </div>
  );

};

export default Home;
