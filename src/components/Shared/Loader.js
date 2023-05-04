import React from 'react'

// Gif
import loadingGif from '../../gifs/loader2.gif'

export default function Loader() {
  return (
    <div style={{marginTop : "100px" , display:"flex" , flexDirection:"column" , justifyContent: "center" , alignItems: "center"}}>
        <img src={loadingGif} alt="Loading..." style={{width: "100px"}}/>   
        <h3>...سوال بعدی</h3>
    </div>
  )
}
