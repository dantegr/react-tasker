import React from 'react'
import ReactDOM from 'react-dom'

const Modal = ({ appears, hide, content}) => 
appears ? ReactDOM.createPortal(
    <React.Fragment>
        {/* <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog"> */}
            <div className="modal">
                <div className="modal-main">
                <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
                    <span aria-hidden="true">&times;</span>
                </button>        
            <div>{content}</div>
            </div>
      </div>
    {/* </div> */}
    </React.Fragment>,document.body
) : null




export default Modal