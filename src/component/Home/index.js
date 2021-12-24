import React from 'react'
import "./style.css"
import {SC , SCC , SCT , SCST , SCP , SCPS , SCB} from  "./style"

function Home() {
    return (
        <SC>
            <SCC>
                <SCT>Hamza Nabil</SCT>
                <SCST>Creative Director</SCST>
                <SCP>Iam a professional <SCPS> UX Designer</SCPS> and Front-End Developer
                    creating modern and resposive designs to Web and Mobile.
                    Let us work together. Thank you.
                </SCP>
                <SCB>Let's Begin</SCB>
            </SCC>
        </SC>
    )
}

export default Home