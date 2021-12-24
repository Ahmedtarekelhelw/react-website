import axios from 'axios'
import React , {useState , useEffect} from 'react'
import {SC , SCT ,SCR , SCRC , SCRCI , SCRCT ,SCRCP} from "./style"

function Work() {
    const[works , setWorks] =useState([])

    useEffect(() =>{
        axios.get("json/data.json")
        .then(res => setWorks(res.data.work))
        .catch(err => console.log(err))
    },[])
    const worksList = works.map(workItem => {
        return (
            <SCRC key={workItem.id}>
                <SCRCI className={workItem.icon}></SCRCI>
                <SCRCT>{workItem.title}</SCRCT>
                <SCRCP>{workItem.pargraph}</SCRCP>
            </SCRC>
        )
    })
    return (
        <SC className="work">
            <div className="container">
                <SCT>My Work</SCT>
                <SCR className="row">
                    {worksList}
                </SCR>
            </div>
        </SC>
    )
}

export default Work