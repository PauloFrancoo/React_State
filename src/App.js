import React,{useState} from "react";
import Numero from "./componentes/Numero"; 
import Led from "./componentes/Led";
import './App.css';


export default function App() {

 const [ligado,setLigado]= useState(false);
 
  const[num, setNum]=useState(10);
  
  
  const cumprimento=()=>{
    const hora= new Date().getHours();
   // const hora= 12;
    if(hora >=0 && hora < 13){
      return  <p>BOM DIA</p>
    }else if(hora >= 13 && hora <=18){
      return  <p>BOA TARDE</p>
    }else{
      return  <p>BOA NOITE</p>
    }
 };

const [log, setLog]= useState(false);
 const msglogin=()=>{
  return "Usuário Logado";
 };
 const msglogoff=()=>{
  return "Favor Logar";
 };


const [cor,setCor]=useState(1);
const vermelho={color:"#f00"};
const verde={color:"#0f0"};
const azul={color:"#00f"};
const laranja={color:"#FF6A00"};
const marrom={color:"#722D00"};
const maravilha={color:"#FF00DC"};
const amarelo={color:"#FFD800"};
const verde_oliva={color:"#84FF61"};
const azul_claro={color:"#5EFFF9"};
const preto={color:"#000000"};
const retornaCor=(c)=>{
  if(c === 1){
    return vermelho;
  }else if(c ===2){
    return verde;
  }else if(c === 3){
    return laranja;
  }else if(c ===4){
    return marrom;
  }else if(c === 5){
    return maravilha;
  }else if(c ===6){
    return amarelo;
  }else if(c === 7){
    return verde_oliva;
  }else if(c === 8){
    return azul;
  }else{
    return preto;
  }
};
const mudaCor=()=>{
  setCor(cor+1);
  
  if(cor > 8){
    setCor(1);
  }
}
setInterval(mudaCor,3000);
////CÓDIGO ABAIXO PRECISA RESOLVER
/*const [nome,setNome]=useState(1);
const n="{{'PAULO FRANCO', 'LUCIA' ,'FÁBIO','VIIANE','ROMILDO','ADRIANA',{'FELIPE','CLAUDIA','RENATO','BERNARDO'}}";

const retornaNome=(nome)=>{
  if(nome === 1){
    return n[0];
  }else if(nome === 2){
    return n[1];
  }else if(nome===3){
      return n[2];  
  }else if(nome===4){
    return n[3];
  }else if(nome === 5){
    return n[4];
  }else if(nome===6){
    return n[5];
  }else if(nome === 7){
    return n[6];
  }else if(nome===8){
    return n[7];
  }else if(nome === 9){
    return n[8];
  }else{
    return n[9];
  }
}
const mudaNome=()=>{
  setNome(nome+1);
  if(nome >10){
    setNome(nome);
}
}
setInterval(mudaNome(),3000);*/


  return (
    <>
      <h1 style={retornaCor(cor)}>PAULO FRANCO</h1>
     
     

      {cumprimento()}
      <p>{log ? msglogin() : msglogoff()}</p>
      <button onClick={()=>setLog(!log)}>{log ? "Logoff" : msglogoff()}</button>

      <p>Valor do state num em App:{num}</p>
      <Numero num={num}setNum={setNum}/>
      
      <Numero/>
      <Led/>
    </>
  )
  }


