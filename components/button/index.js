import { ButtonStyle } from "./style"


const Button = (props) => {
  return(
    <ButtonStyle>
      <button onClick={props.onClick}>
        <p>{props.text}</p>
      </button>
    </ButtonStyle>
  )
}
export default Button;
