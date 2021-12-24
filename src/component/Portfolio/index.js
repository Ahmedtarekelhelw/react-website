import axios from 'axios'
import React , {useState , useEffect } from 'react'
import {SC , SCT , SCUL ,SCLI , SCIC ,SCI , SCIO , SCCI, SCIOB}from "./style"

function Portfolio() {
    const [imgs , setImgs] = useState([])
    useEffect(() => {
        axios.get("./json/data.json")
        .then(res => setImgs(res.data.portfolio))
        .catch(err => console.log(err))
    }, [])

    let imgList = imgs.map(img => {
        return (
            <SCCI key={img.id}>
                <SCI src={img.src} alt="portfolio-img"/>
                <SCIO className="overlay">
                    <SCIOB>show photo</SCIOB>
                </SCIO>
            </SCCI>
        )
    })
    return (
        <SC>
            <div className="container">
                <SCT>My Portfolio</SCT>
                <SCUL>
                    <SCLI active>All</SCLI>
                    <SCLI>HLMl</SCLI>
                    <SCLI>Photoshop</SCLI>
                    <SCLI>Wordpress</SCLI>
                    <SCLI>Mobile</SCLI>
                </SCUL>
            </div>
            <SCIC>
                {imgList}
            </SCIC>
        </SC>
    )
}

export default Portfolio