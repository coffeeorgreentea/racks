import { ChevronRightIcon } from "@radix-ui/react-icons"

import { Button } from "@racks/ui/core/components/button"

export default function ButtonIcon() {
  return (
    <Button variant="outline" size="icon">
      <ChevronRightIcon className="h-4 w-4" />
    </Button>
  )
}
