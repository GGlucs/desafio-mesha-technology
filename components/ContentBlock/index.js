import { BlockStyle } from "./style"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from "@fortawesome/free-solid-svg-icons";


const ContentBlock = (props) => {

  const deletePlay = () =>{
    props.delete(props.num)
  }

  return(
    <BlockStyle>
        <div>
          <h2>{props.title}</h2>
          <p>{`- ${props.author}`}</p>
        </div>
        <div className={"divIcon " +props.buttons}>
          <div onClick={deletePlay}><FontAwesomeIcon className = "trash" icon={faTrash}/></div>
          <div className="info">
              <span className="box">
                <p>Musicas:</p>
                {
                  props.list(props.num).map((item,index)=>
                  <p key={index} className='hit'>{item}</p>
                  )
                }
              </span>
            <div className="circle">i</div>
          </div>
        </div>


    </BlockStyle>
  )
}
export default ContentBlock
