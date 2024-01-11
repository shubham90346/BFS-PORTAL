import React from "react";
import Styles from "./Styles.module.css";

const StaticModal = ({ heading, visibility, content, button1, button2 }) => {
  console.log(heading, visibility, content, button1, button2);
  return (
    <>
      {/* {visibility ? clicked() : null} */}
      {/* <button type="button" className="d-none" id="modal" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        Launch static backdrop modal
      </button> */}
      <div className="modal fade" id="staticBackdrop" 
      data-bs-backdrop="static" 
      data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true" data-bs-config="true" >
        <div className="modal-dialog modal-dialog-centered" style={{ width: "309px" }} >
          <div className="modal-content">
            <div className=" justify-content-center">
              <h1 className={`modal-title fs-5 ${Styles.ModalHeader}`} id="staticBackdropLabel">
                {heading}
              </h1>
              {/* <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
            </div>
            <div className={` ${Styles.ModalContent}`}>{content}</div>
            <div className={`d-flex justify-content-center gap-4  ${Styles.ModalFooter}`}>
              <button type="button" className={`${Styles.modalButton}`} data-bs-dismiss="modal">
                {button1}
              </button>
              {button2 && (
                <button type="button" className={`${Styles.modalButton}`} data-bs-dismiss="modal">
                  {button2}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StaticModal;
