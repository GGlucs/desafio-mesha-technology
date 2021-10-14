import { useState } from "react";

import { InputStyle } from "./style"
import { GetWheatherByCityName } from "../../api/services/wheaterServices/getWheaterByCityName";
import { GetPlaylistsService } from "../../api/services/playlistServices/getPlaylistsService"


const SearchInput = (props) => {
  const [cityName, setCityName] = useState('')
  const [lastName, setLastName] = useState('')
  const [errorMsg, setErrorMsg] = useState('')

  const fetchData = async (name) => {
    setErrorMsg('')
    try {
      const wheater = await GetWheatherByCityName(name)
      let tempCelsius = Math.round(wheater.main.temp - 273.15)
      let g;
      switch(true) {
        case (tempCelsius>32):
          g = 'Rock';
          break;
        case (24<tempCelsius && tempCelsius<=32):
          g = 'Pop';
          break;
        case (16<tempCelsius && tempCelsius<=24):
          g = 'Clássica';
          break;
        case (16>=tempCelsius):
          g = 'Lofi';
          break;
      }

      const playlist = await GetPlaylistsService(g,'100')
      let filteredList = playlist.tracks.hits.map((item)=>{
        return ({
          title:item.track.title,
          author:item.track.subtitle
          }
        )
      })
      props.getMusicData(filteredList)

      props.getData({
        name:cityName,
        temp:tempCelsius,
        genre:g
      })
    }catch (error) {
      setErrorMsg('Oops, verique se o nome está correto e digite outro nome')
      return(0)
    }
  }

  const handleInputChange = (event) => {
    setCityName(event.target.value)
    setErrorMsg('')
  }

  const handleKeyPress = async (event) => {
    if(event.key === 'Enter' && cityName !== lastName){
      await fetchData(cityName)
      setLastName(cityName)
    }
  }

  const handleButtonPress = async (event) => {
    if(cityName !== lastName){
      await fetchData(cityName)
      setLastName(cityName)
    }
  }

  return(
    <InputStyle>
      <div className="container">
        <input
          placeholder="Digite o nome da cidade e aperte Enter:"
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        ></input>
        <button onClick={handleButtonPress}><p>Search</p></button>
        <p>{errorMsg}</p>
      </div>
    </InputStyle>
  )
}

export default SearchInput;
