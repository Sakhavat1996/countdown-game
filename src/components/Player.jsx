import { useState , useRef } from "react";
import { createPortal } from "react-dom";

export default function Player() {
  const [name ,setName] = useState('');
  const ref = useRef()
  // const [submitted , setSubmitted] = useState(false)
  // function changeHandle(e){
  //   setName(e.target.value);
  //   setSubmitted(false);
  // }
  function handleClick(e){
    setName(ref.current.value);
    // imperative codding
    ref.current.value = '';
     // Diqqetli olmaq lazimdir , sehifedeki butun nov valuelarda refden 
    // istifadeye baslamamaga , cunki Reactin  temelinde yatan idea bu deyil
  }
  return (
    <section id="player">
      <h2>Xos gelmisiniz {name || 'entity'}</h2>
      {createPortal(<p>Antecin qaymaqlari Fuad , Sara, Aytac</p> , document.body)}
      <p>
        <input ref={ref} type="text"/>
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
