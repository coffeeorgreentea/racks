

import { Button } from "@racks/ui/core/components/button"
import { ToastAction } from "@racks/ui/core/components/toast"
import { useToast } from "@racks/ui/core/components/use-toast"

export default function ToastWithAction() {
  const { toast } = useToast()

  return (
    <Button
      variant="outline"
      onClick={() => {
        toast({
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with your request.",
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        })
      }}
    >
      Show Toast
    </Button>
  )
}
