"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";


export function BookingDialog({ children }: { children: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white rounded-lg">
        <DialogHeader>
          <DialogTitle style={{ fontFamily: "var(--font-space-grotesk)" }}>
            Book a Meeting
          </DialogTitle>
          <DialogDescription style={{ fontFamily: "var(--font-lato)" }}>
            Fill in your details and we&rsquo;ll be in touch to schedule a meeting.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Input
              id="name"
              placeholder="Name"
              className="col-span-4"
              style={{ fontFamily: "var(--font-lato)" }}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Input
              id="email"
              placeholder="Email Address"
              className="col-span-4"
              style={{ fontFamily: "var(--font-lato)" }}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Input
              id="phone"
              placeholder="Mobile Number"
              className="col-span-4"
              style={{ fontFamily: "var(--font-lato)" }}
            />
          </div>
        </div>
        <DialogFooter>
          <button
            type="submit"
            className="group flex items-center justify-center gap-2 rounded-full px-8 py-3 font-medium text-white shadow-lg transition-all duration-300 text-base whitespace-nowrap bg-gradient-to-r from-[#a0a3e8] to-[#888ae0] hover:from-[#888ae0] hover:to-[#a0a3e8]"
            style={{
              fontFamily: "var(--font-lato)",
              fontWeight: 500,
              boxShadow: "0 4px 24px 0 rgba(160, 163, 232, 0.3)",
            }}
          >
            Submit
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
} 