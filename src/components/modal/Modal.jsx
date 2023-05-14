import React from 'react';
import { styled } from 'styled-components';
import Button from '../UI/button/Button';
import { Link } from 'react-router-dom';

const Modal = ( {closeModalHandler} ) => {
  return (
    <div style={{display: "flex", justifyContent: "center"}}>
        <Wrapper onClick={closeModalHandler}></Wrapper>
        <StyledModal>
            <h1>Вы уверены, что хотите выйти в главное меню?</h1>
            <NoAndYesButtons>
                <Button w="170px" h="50px" bgColor="#202020" onClick={closeModalHandler} title="Отмена"/>
                <Link style={
                    {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",

                    color: "white",
                    fontSize: "25px",
                    textDecoration: "none",
                    border: "solid",
                    backgroundColor: 'red',
                    width: "170px", 
                    height: "50px"}} 
                    to="/" 
                    onClick={closeModalHandler}>Выход</Link>
            </NoAndYesButtons>

        </StyledModal>
    </div>
  )

}

const NoAndYesButtons = styled.div`
    /* border: solid; */
    display: flex;
    justify-content: space-around;
    align-items: end;
    height: 100px;

`
const StyledModal = styled.div`
    padding: 70px;
    border: solid;
    position: fixed;
    z-index: 20;
    text-align: center;
    top: 20%;
`

const Wrapper = styled.div`
    position: fixed;
    z-index: 10;
    width: 100%;
    height: 100%;
    border: solid;

    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    background-color: rgb(0, 0, 0, 0.9)
`

export default Modal