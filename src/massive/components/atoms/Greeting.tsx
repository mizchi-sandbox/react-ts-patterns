import * as React from "react"

type Props = {
  name: string
}

export default function Greeting({ name }: Props) {
  return (
    <div className="hello">
      <div className="greeting">Hello {name}</div>
    </div>
  )
}
