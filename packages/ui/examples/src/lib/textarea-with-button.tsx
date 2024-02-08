import { Button } from "@racks/ui/core/components/button"
import { Textarea } from "@racks/ui/core/components/textarea"

export default function TextareaWithButton() {
  return (
    <div className="grid w-full gap-2">
      <Textarea placeholder="Type your message here." />
      <Button>Send message</Button>
    </div>
  )
}
