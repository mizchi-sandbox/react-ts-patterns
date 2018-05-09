import * as React from "react"
import styled from "styled-components"

type Props = {
  children: any
}

export default function DefaultLayout({ children }: Props) {
  return <Container>{children}</Container>
}

const Container = styled.div`
  background-color: #eee;
  width: 100%;
  height: 400px;
`
