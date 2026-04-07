"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function EventAnnouncementPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsOpen(true);
    }, 400);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="w-[95vw] max-w-3xl overflow-hidden border border-emerald-300/30 bg-gradient-to-r from-emerald-950/60 via-black to-emerald-900/50 p-0 shadow-2xl shadow-emerald-900/30">
        <div className="grid grid-cols-1 items-center gap-4 p-4 sm:p-6 md:grid-cols-[220px_1fr] md:gap-6">
          <div className="relative mx-auto aspect-[3/4] w-full max-w-[220px] overflow-hidden rounded-xl border border-white/20">
            <span className="absolute left-3 top-3 z-10 rounded-full bg-emerald-500/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
              Event Completed
            </span>
            <Image
              src="/images/events/aws-community-day-2026.jpeg"
              alt="AWS Community Day 2026 poster"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 220px, 220px"
            />
          </div>

          <div>
            <DialogHeader className="text-center md:text-left">
              <p className="inline-flex w-fit items-center self-center md:self-start rounded-full border border-emerald-300/40 bg-emerald-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-200">
                Thank You
              </p>
              <DialogTitle className="mt-3 text-2xl font-extrabold text-white sm:text-3xl">
                AWS Community Day 2026
              </DialogTitle>
              <DialogDescription className="mt-2 text-sm leading-relaxed text-emerald-100/90 sm:text-base">
                Thank you to everyone who joined us and made this event memorable. Your energy, participation, and support meant a lot to the AWS Club community.
              </DialogDescription>
            </DialogHeader>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
