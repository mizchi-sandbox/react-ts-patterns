import * as React from "react"
import styled from "styled-components"

type Props = {
  text: string
  onClick: (event: any) => void
}

export default function Button({ text, onClick }: Props) {
  return <StyledButton onClick={onClick}>{text}</StyledButton>
}

const StyledButton = styled.button`
  display: inline-block;
  padding: 0.5em 1em;
  text-decoration: none;
  background: #668ad8;
  color: #fff;
  border-bottom: solid 4px #627295;
  border-radius: 3px;

  :active {
    -ms-transform: translateY(4px);
    -webkit-transform: translateY(4px);
    transform: translateY(4px);
    border-bottom: none;
  }
`
