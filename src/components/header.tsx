
'use client';

import { Logo } from "./logo";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Mail, Phone } from "lucide-react";

export function Header() {
  return (
    <header className="py-4 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto flex justify-between items-center">
        <Logo />
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">Contact Us</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Contact Us</DialogTitle>
              <DialogDescription>
                Get in touch with us for any inquiries or to start your next project.
              </DialogDescription>
            </DialogHeader>
            <div className="py-4 space-y-4">
              <div className="flex items-center gap-4">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <a href="mailto:contact@vimo.com" className="hover:underline">
                  contact@vimo.com
                </a>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="h-5 w-5 text-muted-foreground" />
                <span>(123) 456-7890</span>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </header>
  );
}
