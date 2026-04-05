"use client";

import type { ReactNode } from "react";
import Link from "next/link";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const emailAddress = "amraouiaminei89@gmail.com";
const whatsappNumber = "+8613625719863";
const whatsappHref = "https://wa.me/8613625719863";

type ContactOptionsDialogProps = {
  trigger: ReactNode;
};

export function ContactOptionsDialog({
  trigger,
}: ContactOptionsDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Contact</DialogTitle>
          <DialogDescription>
            Contact in email or WhatsApp.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-3">
          <Link
            href={`mailto:${emailAddress}`}
            className="rounded-xl border border-border px-4 py-3 text-sm transition-colors hover:bg-accent"
          >
            Email: {emailAddress}
          </Link>
          <Link
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-border px-4 py-3 text-sm transition-colors hover:bg-accent"
          >
            WhatsApp: {whatsappNumber}
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  );
}
