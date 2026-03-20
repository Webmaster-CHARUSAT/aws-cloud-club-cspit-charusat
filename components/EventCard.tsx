"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";

type Props = {
  title: string;
  image: string;
  description: string;
  DisplayDate: string;
  date: string;
  badge?: string;
};

export default function EventCard({ description, image, title, date, DisplayDate, badge }: Props) {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <div className="max-w-xs w-full bg-gray-900 border border-purple-600/30 rounded-lg shadow-lg shadow-purple-500/10 cursor-pointer mx-auto transition-transform hover:scale-102">
            <div className="relative aspect-1">
              {badge ? (
                <span className="absolute left-3 top-3 z-10 rounded-full border border-white/30 bg-gradient-to-r from-amber-500 to-orange-500 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-lg">
                  {badge}
                </span>
              ) : null}
              <Image
                width={500}
                height={800}
                className="rounded-t-lg h-full w-full object-cover"
                src={image}
                alt=""
              />
            </div>
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-purple-200 truncate">
                {title}
              </h5>
              <p className="mb-3 font-normal text-purple-300 truncate">
                {description}
              </p>
            </div>
          </div>
        </DialogTrigger>

        <DialogContent className="lg:max-w-screen-sm max-h-[36rem] overflow-y-scroll bg-gray-900 border-purple-600/30">
          <DialogHeader className="pt-3">
            <DialogTitle className="text-lg font-bold leading-6 text-purple-200">
              {title}
            </DialogTitle>
            <DialogDescription className="">
              <p className="text-sm text-purple-400">
                {DisplayDate}
              </p>
              <div className="w-96 object-cover my-3 mx-auto">
                <Image
                  src={image}
                  alt=""
                  width={500}
                  height={800}
                  className="w-full object-cover rounded-lg border border-purple-600/30"
                />
              </div>
              <p className="text-base text-purple-300">
                {description}
              </p>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}
