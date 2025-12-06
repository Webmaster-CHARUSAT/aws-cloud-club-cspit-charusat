"use client";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";
import React from "react";
import { toast } from "sonner";

export default function Login() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());
    console.log(payload);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const response = await res.json();
      if (res.status !== 200) throw new Error(response.message);
      window.location.href = "/admin/collaborate-responses";
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <div className="container flex flex-col mx-auto bg-white rounded-lg pt-12 my-5">
      <div className="flex justify-center w-full h-full my-auto xl:gap-14 lg:justify-normal md:gap-5 draggable">
        <div className="flex items-center justify-center w-full lg:p-12">
          <div className="flex items-center xl:p-10">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col w-full h-full pb-6 text-center bg-white rounded-3xl"
            >
              <h3 className="mb-3 text-4xl font-extrabold text-dark-grey-900">
                Sign In
              </h3>
              <div className=" flex justify-start flex-col">
                <label
                  htmlFor="email"
                  className="mb-2 text-sm text-start text-grey-900"
                >
                  Email*
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  placeholder="mail@loopple.com"
                  className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-primary focus:ring-primary"
                />
              </div>
              <div className="mt-7 flex justify-start flex-col">
                <label
                  htmlFor="password"
                  className="mb-2 text-sm text-start text-grey-900"
                >
                  Password*
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter a password"
                  className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-primary focus:ring-primary"
                />
              </div>

              <Button type="submit" className="w-72 mt-7">
                Sign In
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
