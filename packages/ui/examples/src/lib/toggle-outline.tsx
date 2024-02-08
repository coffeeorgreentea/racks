import { FontItalicIcon } from "@radix-ui/react-icons"

import { Toggle } from "@racks/ui/core/components/toggle"

export default function ToggleOutline() {
  return (
    <Toggle variant="outline" aria-label="Toggle italic">
      <FontItalicIcon className="h-4 w-4" />
    </Toggle>
  )
}
