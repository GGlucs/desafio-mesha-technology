import styled from "styled-components";

export const InputStyle = styled.div`
  input{
    width: 370px;
    padding:10px;
    font-size: 16px;
    outline: none;
    border-color: transparent;
    background-color: #E0E0E0;
    color:black ;
    transition: 0.3s;
    border-bottom: solid 2px black;
  }
  .container {
    display: flex;
    justify-content: center;
  }
  button{
    padding:15px;
    background-color: #C41F93;
    border:none;
    border-radius: 5px;
    transition: 0.3s;
    p{
      margin:0;
      color:#E0E0E0;
    }
    :hover{
      background-color:black;
      cursor: pointer;
    }
  }
  p{
    color: red;
    font-weight: normal;
    margin-left: 15px;
  }
`;
