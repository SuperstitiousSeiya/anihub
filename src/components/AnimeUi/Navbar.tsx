"use client";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import SearchModal from "./SearchModal";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Categories",
      href: "/categories",
    },
    {
      name: "Genres",
      href: "/genres",
    },
    {
      name: "About",
      href: "/about",
    },
  ];

  console.log(pathname);

  return (
    <header className="bg-white dark:bg-background shadow-md top-0 fixed z-50 w-full">
      <div className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-semibold"
          prefetch={false}
        >
          <MountainIcon className="w-6 h-6" />
          <span className="sr-only">Anime Hub</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link, index) => (
            <Link
              key={link.name + index}
              href={link.href}
              className={`text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors ${
                (pathname.startsWith(link.href) && link.name !== "Home") ||
                (link.name === "Home" && pathname == "/")
                  ? "dark:text-white"
                  : ""
              }`}
              prefetch={false}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <SearchModal></SearchModal>

          {/* <Button variant="ghost" size="icon" className="rounded-full"> */}

          <Sheet>
            <SheetTrigger>
              {" "}
              <Menu className="flex md:hidden" />
            </SheetTrigger>
            <SheetContent className="">
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <SheetClose asChild>
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors ${
                        (pathname.startsWith(link.href) &&
                          link.name !== "Home") ||
                        (link.name === "Home" && pathname == "/")
                          ? "dark:text-white"
                          : ""
                      }`}
                      prefetch={false}
                    >
                      {link.name}
                    </Link>
                  </SheetClose>
                ))}
              </div>
            </SheetContent>
          </Sheet>

          {/* <Button variant="ghost" size="icon" className="rounded-full">
            <Image
              src="/placeholder.svg"
              width="32"
              height="32"
              className="rounded-full"
              alt="Avatar"
            />
            <span className="sr-only">User Menu</span>
          </Button> */}
        </div>
      </div>
    </header>
  );
}

function ArrowLeftIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  );
}

function ArrowRightIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function MountainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function SearchIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
