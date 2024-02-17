import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
// forwardRef - funnksiyadir ve bizim componentimizi qebul edir
const Modal = forwardRef(function Modal({remaingTime , targetTime , onReset} , ref) {
    const dialogRef = useRef();
    const formattedTime = (remaingTime / 1000).toFixed(2);
    useImperativeHandle(ref , ()=>{
        return {
            open(){
                dialogRef.current.showModal();
            }
        }
    })
    return createPortal(
      <dialog className="result-modal" ref={dialogRef}>
          <h2> Siz {remaingTime > 0 ? "Galib" : 'Meglub'} oldunuz</h2>
          <p>
              Hedeflenen zaman <strong>{targetTime} saniye</strong>
          </p>
          <p>
              Siz saygaci <strong>{formattedTime} saniye qalmis</strong> dayandirdiniz
          </p>
          <form method="dialog" onSubmit={onReset}>
              <button>Close</button>
          </form>
      </dialog>,
      document.querySelector('.modal')
    );
})
export default Modal;