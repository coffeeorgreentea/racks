import { Label } from "@racks/ui/core/components/label"
import { Textarea } from "@racks/ui/core/components/textarea"

export default function TextareaWithLabel() {
  return (
    <div className="grid w-full gap-1.5">
      <Label htmlFor="message">Your message</Label>
      <Textarea placeholder="Type your message here." id="message" />
    </div>
  )
}
