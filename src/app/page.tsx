"use client"

import { TopBar } from "@components/top-bar"
import { Button } from "@heroui/react"

export default function Page() {
  return (
    <div>
      <TopBar />
      <h1>Simples RPG</h1>
      <Button color="primary">Start</Button>
    </div>
  )
}
