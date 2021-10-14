import { useState } from "react"
import { useRouter } from 'next/router'

import { PlaylistStyle } from "./style"
import Button from "../button"
import ContentBlock from "../ContentBlock"


const ListOf = (props) => {
  const [salvas,setSalvas] = useState([])
  const router = useRouter()

  const savePlaylist = () => {
    let copy = salvas
    copy.push([props.cityData,props.musicData])
    setSalvas(copy)
    router.replace(router.asPath)
  }

  const getMusics = (index) => {
    try {
      return(
        salvas[index][1].map((item)=>item.title)
      )
    } catch (error) {
      return([])
    }
  }

  const deletItem = (index) =>{
    let copy = salvas
    copy.splice(index,1)
    console.log(copy)
    console.log(salvas)
    setSalvas(copy)

    router.replace(router.asPath)
  }
  return (
    <PlaylistStyle>
      <div className={"container " + props.state}>
        <h2>Musicas</h2>
        <div className="musics">
          {
           props.musicData.map((item,index)=>
           <ContentBlock
             key={index}
             buttons={props.buttonsMusic}
             title={item.title}
             author={item.author}
             list={getMusics}
             />
             )
          }
        </div>
        <a href="#list"><Button onClick={savePlaylist} text={props.textButton}/></a>
      </div>
      <div className={"container " + props.state}>
        <h2>Playlists</h2>
        <div id="list" className="musics">
          {
            salvas.map((item, index) =>
              <ContentBlock
                key = {index}
                num = {index}
                buttons={props.buttonsPlaylist}
                title={`playlist ${index+1}: ${item[0].name}`}
                author={`${item[0].genre}`}
                list={getMusics}
                delete={deletItem}
                />
              )
          }
        </div>
      </div>
    </PlaylistStyle>
  )
}
export default ListOf
