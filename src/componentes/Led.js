import React,{useState} from "react";

import LedVerde from "./img/b2.png";
import LedVermelho from "./img/b1.png";



export default function Led() {
  
  const [ligado,setLigado]= useState(false);
  
  /*const cancelar=(obj)=>{ ///esta função cancela a exibição do site Peixes
    return obj.preventDefault();
  }*/
  //no return  href="https://zealous-kilby-f93f19.netlify.app/" target="_blank" onClick={(e)=>cancelar(e)}>
 
  
  return (
    <>
        <img style={{width:"50px"}} src={ligado ? LedVerde : LedVermelho}/>
        <button onClick={()=>setLigado(!ligado)}>{ligado ? "DESLIGAR" : "LIGAR"}</button>
        <a
            href="https://zealous-kilby-f93f19.netlify.app/" target="_blank" >
                PEIXES
        </a>


    </>
  )
}
