import styled from "styled-components";

export const PlaylistStyle = styled.section`
  .container {
    display: flex;
    flex-direction: column;
    border-bottom: black solid 2px;
    padding-bottom: 15px;
    margin-bottom: 120px;
    margin-top: 120px;
    justify-content: center;
    align-items: center;
    button{
      margin:0 auto;
    }
    h2{
      margin-bottom: 60px;
    }
  }
  .musics{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 30px;
    width: 100%;
    max-height: 420px;
    overflow-y: scroll;
  }
  .none{
    display: none;
  }
  .active{
    display: block;
    opacity: 1;
    animation-name: active;
    animation-duration: 2s;
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
