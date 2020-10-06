import React from 'react'
import { ReactComponent as ReactLogo } from '../Assets/SVG/undraw_feeling_proud_qne1.svg'
import styled from 'styled-components'

const StyledLogo = styled(ReactLogo)`
  display: block;
  float: right;
  margin: 2.5% 5%;
`
export default function introSvg(){
    return(
        <StyledLogo />
    )
}