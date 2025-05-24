import { Input } from "@/components/atoms/Input"
import { Label } from "@/components/atoms/Label"
import React from "react"

interface Props {
  id?: string
  text: string
}

const InputLabel = ({ id, text }: Props) => {
  return (
    <div className="flex flex-col gap-y-3">
      <Label htmlFor={id}>{text}</Label>
      <Input id={id} />
    </div>
  )
}

export default InputLabel
