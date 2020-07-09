import React, { useState, useEffect} from 'react'
import Header from '../../layout/Header/Header'
import Footer from '../../layout/Footer/Footer'
import axios from 'axios'

function Home() {
    const [marc, setMarc] = useState ('');
    const URL = 'https://www.scorebat.com/video-api/v1/';
    useEffect (()=>{
      axios.get(URL)
        .then((response)=>{
          let allMarc = response.data.competition
          setMarc(allMarc)
          console.log(marc)
        }).catch((err)=>{
          console.log(err);
        });
});
    return (
        <>
        <Header />
        <h3>Marcadores de Hoy</h3>
        <p>{marc}</p>
        
            
        <Footer />
        </>
    )
}

export default Home
