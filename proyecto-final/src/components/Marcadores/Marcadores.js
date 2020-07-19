import React, { useState } from 'react'
import axios from 'axios'

function Marcadores() {
    const [marc, setMarc] = useState ('');
    const URL = 'https://www.scorebat.com/video-api/v1/';
      axios.get(URL)
        .then((response)=>{
          let allMarc = response.data.title
          setMarc(allMarc)
          console.log(marc)
        }).catch((err)=>{
          console.log(err);
        });
        
        return
  
    }

export default Marcadores
