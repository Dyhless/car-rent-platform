// import React, { useEffect } from "react";
// import ReactDOM from "react-dom";
// import PropTypes from "prop-types";

// import {
//   Backdrop,
//   Container,
//   CloseButton,
//   ContentWrapper,
// } from "./Modal.styled";
// import { IoCloseOutline } from "react-icons/io5";

// const Modal = ({ isModalOpened, closeModal, car }) => {
//   const { model, img, description } = car;

//   const onBackdropClick = (event) => {
//     if (event.target === event.currentTarget) {
//       closeModal();
//     }
//   };

//   useEffect(() => {
//     const onEscPress = (event) => {
//       if (isModalOpened && event.key === "Escape") {
//         closeModal();
//       }
//     };

//     document.body.style.overflow = isModalOpened ? "hidden" : "auto";
//     window.addEventListener("keydown", onEscPress);

//     return () => {
//       window.removeEventListener("keydown", onEscPress);
//       document.body.style.overflow = "auto";
//     };
//   }, [isModalOpened, closeModal]);

//   if (!isModalOpened) {
//     return null;
//   }
//   return ReactDOM.createPortal(
//     <Backdrop onClick={onBackdropClick}>
//       <Container>
//         <CloseButton onClick={closeModal}>
//           <IoCloseOutline />
//         </CloseButton>
//         <ContentWrapper>
//           <img src={img} alt={model} />
//           <p>{description}</p>
//         </ContentWrapper>
//       </Container>
//     </Backdrop>,
//     document.getElementById("modal")
//   );
// };

// Modal.propTypes = {
//   isModalOpened: PropTypes.bool.isRequired,
//   closeModal: PropTypes.func.isRequired,
//   children: PropTypes.node,
// };

// export default Modal;
