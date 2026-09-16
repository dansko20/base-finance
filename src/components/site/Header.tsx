import { Link } from "@tanstack/react-router";

import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="fixed left-1/2 top-5 z-50 h-[60px] w-[calc(100%-2rem)] max-w-[860px] -translate-x-1/2 rounded-xl bg-primary shadow-header md:top-7">
      <Link
        to="/"
        aria-label="BASE FINANCE home"
        className="grid h-full place-items-center"
      >
        <Logo />
      </Link>
    </header>
  );
}
