import * as React from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import Button from "../../atoms/Button"
import DefaultLayout from "../../templates/DefaultLayout"

type Props = {
  value: number
  add(n: number): void
  increment(): void
}

export default function Counter(props: Props) {
  const { value, add, increment } = props
  return (
    <DefaultLayout>
      <Container>
        <Title>Counter</Title>
        <Value>value: {props.value}</Value>
        <ButtonsContainer>
          <Button
            text="add:3"
            onClick={(ev: any) => {
              add(3)
            }}
          />
          &nbsp;
          <Button
            text="increment"
            onClick={(ev: any) => {
              increment()
            }}
          />
        </ButtonsContainer>
      </Container>
    </DefaultLayout>
  )
}

const Container = styled.div`
  padding: 10px;
`

const Title = styled.h1`
  color: #333333;
`

const Value = styled.span`
  color: #333333;
`

const ButtonsContainer = styled.div`
  padding: 20px;
`
