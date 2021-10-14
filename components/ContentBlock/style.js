import styled from "styled-components";

export const BlockStyle = styled.div`
  display: ${props => props.display === 'none' ? 'none' : 'block'};
  visibility: ${props => props.display === 'none' ? 'hidden' : 'visible'};
  background-color: #68BAD1;
  width: 30%;
  margin:10px;
  padding:15px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  h2 , p{
    text-align: left;
    margin:0
  }
  p{
    margin-top: 5px;
  }
  .divIcon {
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-evenly;
    align-items: center;
    .info{
      color: white;
      text-align: left;
      display: flex;
      flex-direction: row-reverse;
      .circle{
        width: 30px;
        height: 30px;
        background-color: gray;
        margin-bottom: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius:15px;
      }
      .box{
        display: none;
        transition: 0.3s;
        background-color: gray;
        padding: 10px;
        border-radius: 3px;
        .hit{
          font-weight: normal;
        }
      }
      :hover{
        .box{
          position: absolute;
          z-index: 1;
          margin-right: 10px;
          display: block;
        }
      }
    }
    .trash{
      color: white;
      font-size: 30px;
      transition: 0.3s;
      margin:10px;
      :hover{
        color:#C41F93 ;
        cursor: pointer;
      }

    }
  }
  .none{
    display: none;
  }
`;
