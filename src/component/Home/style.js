import styled from "styled-components";

export let SC=styled.div`
  min-height: 75vh;
  position: relative;
  background-image: url(./images/Home/home-bg.jpg);
  background-size: cover;
  background-position:center
`

export let SCC=styled.div`
  text-align: center;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
`


export let SCT=styled.h2`
  color: #5e5e5e;
  font-size: 58px;
`


export let SCST=styled.h3`
  color: #eb5424;
  font-size: 35px;
  padding: 15px 0;
`


export let SCP=styled.p`
  color: #888;
  font-size: 25px;
  line-height: 1.3;
  padding-bottom: 15px;
`

export let SCPS=styled.span`
  color: #000;
`


export let SCB=styled.button`
  background-color: #eb5424;
  color: #fff;
  padding: 15px 30px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 18px;
  &:hover {
  background-color: #fff;
  color: #eb5424;
  }
`

