import { useState } from "react"

import Header from "../components/Header"
import SearchInput from "../components/SearchInput"
import CityInfo from "../components/CityInfo"
import ListOf from "../components/ListOf"


export default function Home() {
  const [cityData, setcityData] = useState([])
  const [musicData, setMusicData] = useState([])
  const [cityInfoState, setCityInfoState] = useState('none')
  const [ListOfState, setListOfState] = useState('none')

  const getData = (data) => {
    setcityData(data)
    setCityInfoState('active')
  }
  const getMusicData = (data) => {
    setMusicData(data)
    setListOfState('active')
  }


  return (
    <div>
      <Header/>
      <SearchInput getMusicData={getMusicData} getData={getData}/>
      <CityInfo info={cityData} state={cityInfoState}/>
      <ListOf
        textButton='salvar'
        buttonsMusic='none'
        buttonsPlaylist='active'
        state={ListOfState}
        musicData={musicData}
        cityData={cityData}
      />
    </div>
  )
}
