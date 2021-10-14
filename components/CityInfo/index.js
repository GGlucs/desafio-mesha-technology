import { CitySectionStyle } from "./style";


const CityInfo = (props) => {
  return(
    <CitySectionStyle>
      <div className={"container " + props.state}>
        <div className="separator">
          <ul>
            <li><h2>Nome da cidade:</h2></li>
            <p>{props.info.name}</p>
            <li><h2>Temperatura:</h2></li>
            <p>{`${props.info.temp}°C`}</p>
            <li><h2>Gênero recomendado:</h2></li>
            <p>{props.info.genre}</p>
          </ul>
        </div>
      </div>
    </CitySectionStyle>
  )
}

export default CityInfo;
