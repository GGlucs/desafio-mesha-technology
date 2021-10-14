import styled, {keyframes} from "styled-components";

export const CitySectionStyle = styled.section`
  margin-top: 60px;
  .container {
    transition: 0.3s;
  }
  .separator{
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-bottom: black solid 2px;
    margin:0 auto;
    padding-bottom: 15px;
  }

  ul{
    padding-left: 0;
    text-align: left !important;
    margin-bottom: 30px;
    margin-top: 15px;
    p{
      margin:0;
      text-align:center;
      color:#37A4A6 ;
      margin-bottom: 15px;
    }
  }
  .none{
    display: none;
    opacity: 0;
  }
  .active{
    display: block;
    opacity: 1;
    animation-name: active;
    animation-duration: 1s;
  }
  @keyframes active {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
