import axios from 'axios'
import React , {useState , useEffect} from 'react'
import {SCR , SCRC ,SCRCC , SCRCCI , SCRCCP ,SCRCCPS} from "./style"

function SocialMedia() {
    const[social , setSocial] = useState([])
    useEffect(() => {
        axios.get("./json/data.json")
        .then(res => setSocial(res.data.social))
        .catch(err => console.log(err))
    })
    const column = social.map(S => {
        return (
            <SCRC key={S.id} id={S.id}>
                <SCRCC>
                    <SCRCCI className={S.icon}></SCRCCI>
                    <SCRCCP>{S.mainText}<SCRCCPS> {S.secText}</SCRCCPS></SCRCCP>
                </SCRCC>
            </SCRC>
        )
    })

    return (
        <div className="social">
            <SCR>
                {column}
            </SCR>
        </div>
    )
}

export default SocialMedia