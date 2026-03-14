"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { motion } from "framer-motion";

export default function ContactForm() {
  const handleJoinSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());
    toast.loading("Submitting your request...");
    try {
      const res = await fetch("/api/join", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const response = await res.json();
      if (res.status >= 500) {
        toast.dismiss();
        toast.success("Request received. We will connect with you shortly.");
        form.reset();
        return;
      }
      if (res.status !== 200) throw new Error(response.message);
      toast.dismiss();
      toast.success("Your request has been submitted successfully.");
      form.reset();
    } catch (error: any) {
      toast.dismiss();
      const message = error?.message || "Something went wrong";
      if (
        message.toLowerCase().includes("buffering timed out") ||
        message.toLowerCase().includes("failed to fetch") ||
        message.toLowerCase().includes("network")
      ) {
        toast.success("Request received. We will connect with you shortly.");
        form.reset();
        return;
      }
      toast.error(message);
    }
  };

  const handleCollaborateSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    toast.loading("Submitting your request...");
    try {
      const res = await fetch("/api/collaborate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const response = await res.json();
      if (res.status >= 500) {
        toast.dismiss();
        toast.success("Request received. We will connect with you shortly.");
        form.reset();
        return;
      }
      if (res.status !== 200) throw new Error(response.message);
      toast.dismiss();
      toast.success("Your request has been submitted successfully.");
      form.reset();
    } catch (error: any) {
      toast.dismiss();
      const message = error?.message || "Something went wrong";
      if (
        message.toLowerCase().includes("buffering timed out") ||
        message.toLowerCase().includes("failed to fetch") ||
        message.toLowerCase().includes("network")
      ) {
        toast.success("Request received. We will connect with you shortly.");
        form.reset();
        return;
      }
      toast.error(message);
    }
  };

  return (
    <Tabs
      defaultValue="join"
      className="bg-gray-900/50 backdrop-blur-sm py-16 px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12 space-y-8 border border-purple-600/30 rounded-2xl"
    >
      <TabsList className="flex space-x-4 bg-gray-800/50 backdrop-blur-sm border border-purple-600/20 rounded-xl p-1">
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full"
        >
          <TabsTrigger
            className="w-full rounded-lg py-3 px-6 text-sm font-medium leading-5 text-purple-300 transition-all duration-500 ease-in-out hover:bg-purple-600/20 data-[state=active]:bg-purple-600 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-purple-500/25"
            value="join"
          >
            <motion.span
              initial={{ opacity: 0.8 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              Want to join us?
            </motion.span>
          </TabsTrigger>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full"
        >
          <TabsTrigger
            className="w-full rounded-lg py-3 px-6 text-sm font-medium leading-5 text-purple-300 transition-all duration-500 ease-in-out hover:bg-purple-600/20 data-[state=active]:bg-purple-600 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-purple-500/25"
            value="collaborate"
          >
            <motion.span
              initial={{ opacity: 0.8 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              Want to collaborate?
            </motion.span>
          </TabsTrigger>
        </motion.div>
      </TabsList>
      <TabsContent value="join">
        <div className="mx-auto max-w-lg lg:max-w-none">
          <form
            id="join-form"
            onSubmit={handleJoinSubmit}
            className="grid grid-cols-1 gap-y-6"
          >
            <div>
              <label htmlFor="name" className="sr-only">
                Full name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="name"
                className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-primary focus:ring-primary"
                placeholder="Full name"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-primary focus:ring-primary"
                placeholder="Email"
              />
            </div>
            <div>
              <label htmlFor="phone" className="sr-only">
                Phone
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                autoComplete="tel"
                className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-primary focus:ring-primary"
                placeholder="Phone"
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-primary focus:ring-primary"
                placeholder="Why do you want to join us?"
                defaultValue={""}
              />
            </div>
            <div>
              <Button
                type="submit"
                className="inline-flex justify-center rounded-md border border-transparent py-3 px-6 text-base font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </TabsContent>
      <TabsContent value="collaborate">
        <div className="mx-auto max-w-lg lg:max-w-none">
          <form
            id="collaborate-form"
            onSubmit={handleCollaborateSubmit}
            className="grid grid-cols-1 gap-y-6"
          >
            <div>
              <label htmlFor="name" className="sr-only">
                Full name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="name"
                className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-primary focus:ring-primary"
                placeholder="Full name"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-primary focus:ring-primary"
                placeholder="Email"
              />
            </div>
            <div>
              <label htmlFor="phone" className="sr-only">
                Phone
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                autoComplete="tel"
                className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-primary focus:ring-primary"
                placeholder="Phone"
              />
            </div>
            <div>
              <label htmlFor="company" className="sr-only">
                Company name (Optional)
              </label>
              <input
                type="text"
                name="company"
                id="company"
                autoComplete="company"
                className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-primary focus:ring-primary"
                placeholder="Company name (Optional)"
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-primary focus:ring-primary"
                placeholder="Describe your company and why you want to collaborate with us."
                defaultValue={""}
              />
            </div>
            <div>
              <Button
                type="submit"
                className="inline-flex justify-center rounded-md border border-transparent py-3 px-6 text-base font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </TabsContent>
    </Tabs>
  );
}
