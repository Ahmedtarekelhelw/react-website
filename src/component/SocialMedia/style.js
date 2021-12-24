import styled from "styled-components"


export let SCR = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
`
export let SCRC = styled.div`
padding: 100px 0px;
background-color:${props => props.id ===1 ? "#3b5998": ""};
background-color:${props => props.id ===2 ? "#498cbf": ""};
background-color:${props => props.id ===3 ? "#cc2127": ""};
`

export let SCRCC = styled.div`
display: flex;
justify-content: center;
align-items: center;
`
export let SCRCCI = styled.i`
  font-size: 50px;
  margin-right: 15px;
  color: #fff;
`
export let SCRCCP = styled.p`
  color: #fff;
  font-size: 20px;
  line-height: 1.4;
  font-weight: bold;
`
export let SCRCCPS = styled.span`
  display: block;
  font-weight: lighter;
`
