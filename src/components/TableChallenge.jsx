import { useState, useRef } from "react";
import Modal from "./Modal";

export default function TableChallenge({ title, targetTime }) {
  // started<-->TimerisActive
  // const [started , setStarted] = useState(false);
  // const [expired , setExpired] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
  const timer = useRef();
  const dialog = useRef();
  // let timer;
  // function handleStart(){
  //     timer.current = setTimeout(() => {
  //         setExpired(true);
  //         dialog.current.showModal()
  //     }, targetTime * 1000);
  //     setStarted(true);
  // }
  // function handleStop(){
  //     clearTimeout(timer.current);
  //     setStarted(false);
  // }
  // if (timeRemaining <= 0) {
    //   clearInterval(timer.current);
    //   // setTimeRemaining(targetTime * 1000);
    //   dialog.current.showModal();
    // }
    // function handleReset() {
      //   setTimeRemaining(targetTime * 1000);
  // }
  if(timeRemaining <= 0){
    clearInterval(timer.current);
    dialog.current.open();
  }
  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;
  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemaining(prevTime => prevTime - 10);
    }, 10);
  }
  function handleStop() {
    clearInterval(timer.current);
    dialog.current.open();
  }
  function handleReset(){
    setTimeRemaining(targetTime*1000);
  }
  return (
    <>
      {/* {expired && <Modal ref={dialog} result="meglub" targetTime={targetTime}/>} */}
      <Modal 
        ref={dialog} 
        remaingTime={timeRemaining} 
        targetTime={targetTime}
        onReset={handleReset}
      />
      <section className="challenge">
        <h2>{title}</h2>

        <p className="challenge-time">
          {targetTime} second{targetTime ? "s" : ""}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? "Stop" : "Start"}
          </button>
        </p>
        <p>{timerIsActive ? "Vaxt gedir" : "Saygac aktiv deyil"}</p>
      </section>
    </>
  );
}
