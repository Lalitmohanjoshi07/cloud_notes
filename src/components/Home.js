import { useContext, useEffect, useState} from "react";
import AddNote from "./AddNote";
import Notes from "./Notes";
import Resubmisson from "./Resubmisson";
import noteContext from "../context/notes/NoteContext";

const Home = (props) => {
  let context=useContext(noteContext);
  let [item,setItem] = useState();
  
  const {fetchNote} =context;
  const fetch = async() =>{
    let res=await fetchNote();
    if(res){
      setItem([<AddNote key='2' salert={props.salert}/>,<Notes key='1' salert={props.salert}/>])
    }else{
      setItem(<Resubmisson/>)
    }
  }

  useEffect(()=>{
    document.title='CLOUDnotes-home'
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
