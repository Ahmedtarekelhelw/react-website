import styled from "styled-components"

export let SC = styled.div`
  background-color: #eee;
  text-align: center;
  padding-top: 50px;
`

export let SCT = styled.h2`
font-size: 50px;
` 

export let SCUL = styled.ul`
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
padding: 20px 0;
` 
export let SCLI = styled.li`
cursor: pointer;
padding: 10px 0;
width: 120px;
margin-bottom: 10px;
transition: 0.2s;
background-color:${props => props.active ?"#eb5424" : ""};
color: ${props => props.active ? "#fff": ""};
&:hover {
  background-color: #eb5424;
  color: #fff;
}
&:not(:last-child) {
  margin-right: 5px;

}

` 

export let SCIC = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));

`


export let SCCI = styled.div`
position: relative;
&:hover > div {
  opacity: 1;
  transition:0.3s;
}
`

export let SCI = styled.img`
width:100%;
height:100%
`
export let SCIO = styled.div`
position:absolute;
width: 100%;
height: 100%;
top: 0;
background-color: rgba(235,84,36 , 0.5);
opacity: 0;
`
export let SCIOB = styled.button`
position:absolute;
left: 50%;
top: 50%;
transform: translate(-50% , -50%);
background-color: red;
border:none;
padding:10px 15px;
color:#fff;
text-transform:capitalize;
cursor: pointer;
`