"use server";

import Link from "next/link";
import Logo from "./logo";
import { ModeToggle } from "./mode-toggle";
import { Page, allPages } from "@/.contentlayer/generated";
import { ReactNode } from "react";

/**
 * Builds a menu of links for the header component.
 *
 * @param pages An array of page objects containing the title and URL of each page.
 * @returns An array of React Link components.
 */
const buildMenu = (pages: Page[]): ReactNode[] => {
  //   const sortedPages = pages.sort((a, b) => a.);

  const bpages = pages.map((page) => (
    <Link
      key={page.slugAsParams}
      className="p-4 hover:bg-bondi_blue-500 rounded-sm"
      href={page.slugAsParams}
    >
      {page.title}
    </Link>
  ));
  return bpages;
};

const Header = () => {
  const menu = buildMenu(allPages);
  return (
    <header className="shadow-2xl p-8 w-full">
      <div className="flex items-center justify-between">
        <Logo />
        <div>
          <h2>
            <Link href="/" className="text-2xl font-bold">
              Timo D
            </Link>
          </h2>
          <p className="text-lg font-thin">Loan Specialist</p>
        </div>
        <nav className="ml-auto text-sm font-medium space-x-6 px-4">{menu}</nav>
        <ModeToggle />
      </div>
    </header>
  );
};
export default Header;
