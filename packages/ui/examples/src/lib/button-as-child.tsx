import Link from "next/link"

import { Button } from "@racks/ui/core/components/button"

export default function ButtonAsChild() {
  return (
    <Button asChild>
      <Link href="/login">Login</Link>
    </Button>
  )
}
