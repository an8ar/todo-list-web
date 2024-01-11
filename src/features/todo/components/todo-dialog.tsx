import { Dialog, DialogContent } from "@/components/ui/dialog";
import React, { useState } from "react";

export function TodoDialog() {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={() => setOpen(!open)}>
      <DialogContent></DialogContent>
    </Dialog>
  );
}
