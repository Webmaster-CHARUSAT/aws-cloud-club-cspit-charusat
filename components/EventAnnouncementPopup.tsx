"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const ANNOUNCEMENT_KEY = "aws-community-day-2026-popup-seen";

export default function EventAnnouncementPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [showLauncher, setShowLauncher] = useState(false);

  useEffect(() => {
    const hasSeenPopup = window.localStorage.getItem(ANNOUNCEMENT_KEY);

    if (!hasSeenPopup) {
      const timer = window.setTimeout(() => {
        setIsOpen(true);
      }, 500);

      return () => window.clearTimeout(timer);
    }

    setShowLauncher(true);
  }, []);

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);

    if (!open) {
      window.localStorage.setItem(ANNOUNCEMENT_KEY, "true");
      setShowLauncher(true);
    }
  };

  const dismissPopup = () => {
    window.localStorage.setItem(ANNOUNCEMENT_KEY, "true");
    setIsOpen(false);
    setShowLauncher(true);
  };

  const reopenPopup = () => {
    setIsOpen(true);
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={handleOpenChange}>
        <DialogContent className="w-[95vw] max-w-3xl p-0 overflow-hidden border border-purple-400/40 bg-gradient-to-br from-black via-gray-950 to-purple-950 shadow-2xl shadow-purple-500/30">
          <div className="relative">
            <div className="absolute -top-20 -left-16 h-40 w-40 rounded-full bg-purple-500/30 blur-3xl" />
            <div className="absolute -bottom-20 -right-16 h-40 w-40 rounded-full bg-pink-500/20 blur-3xl" />

            <div className="relative grid grid-cols-1 gap-4 p-4 sm:p-6 md:grid-cols-[1.1fr_1fr] md:gap-6">
              <div className="rounded-xl border border-purple-300/30 bg-black/40 p-2 backdrop-blur-sm">
                <div className="relative mx-auto aspect-[3/4] w-full max-w-[320px] overflow-hidden rounded-lg sm:max-w-none">
                  <span className="absolute left-3 top-3 z-10 rounded-full border border-white/30 bg-gradient-to-r from-amber-500 to-orange-500 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-lg">
                    Happening Soon
                  </span>
                  <Image
                    src="/images/events/aws-community-day-2026.jpeg"
                    alt="AWS Community Day 2026 poster"
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 768px) 90vw, 40vw"
                  />
                </div>
              </div>

              <div className="flex flex-col justify-center">
                <DialogHeader className="space-y-2 text-left">
                  <p className="inline-flex w-fit items-center rounded-full border border-purple-300/40 bg-purple-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-purple-200">
                    New Event Announcement
                  </p>
                  <DialogTitle className="text-2xl font-extrabold leading-tight text-white sm:text-3xl">
                    AWS Community Day 2026
                  </DialogTitle>
                  <DialogDescription className="text-sm leading-relaxed text-purple-100/90 sm:text-base">
                    Be part of an inspiring day with cloud experts, builders, and the AWS community. Seats are limited, so secure your registration now.
                  </DialogDescription>
                </DialogHeader>

                <DialogFooter className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-start">
                  <Link
                    href="https://aws-community-day-rose.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-purple-500 to-fuchsia-500 px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:from-purple-400 hover:to-fuchsia-400 focus:outline-none focus:ring-2 focus:ring-purple-300"
                  >
                    Click Here Registration
                  </Link>
                  <button
                    type="button"
                    onClick={dismissPopup}
                    className="inline-flex items-center justify-center rounded-md border border-purple-300/40 bg-white/5 px-4 py-2.5 text-sm font-semibold text-purple-100 transition-colors hover:bg-white/10"
                  >
                    Maybe Later
                  </button>
                </DialogFooter>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {showLauncher && !isOpen ? (
        <button
          type="button"
          onClick={reopenPopup}
          className="fixed bottom-4 right-4 z-40 inline-flex items-center gap-2 rounded-full border border-emerald-200/40 bg-gradient-to-r from-emerald-600 to-green-600 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white shadow-xl shadow-emerald-900/40 transition-all duration-300 hover:scale-[1.03] hover:from-emerald-500 hover:to-green-500 sm:bottom-6 sm:right-6 sm:text-sm"
        >
          <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-80" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-red-500 ring-2 ring-white/90" />
          </span>
          Community Day 2026
        </button>
      ) : null}
    </>
  );
}
