import classNames from "classnames";
import React from "react";
import BurgerMenu from "./BurgerMenu";

function Header() {
  const [isOpenMenu, setIsOpenMenu] = React.useState(false);

  return (
    <header className="fixed w-full h-12 bg-customBlue text-white p-2 sm:h-auto">
      {/* label */}
      <div className="fixed w-full h-12 bg-customBlue z-50 top-0 left-0 border-b-2 sm:hidden" />
      <nav
        aria-label="Main Navigation"
        className="relative container mx-auto size-full flex justify-between items-center">
        <BurgerMenu open={isOpenMenu} setOpen={setIsOpenMenu} />
        <div className="absolute top-1/2 -translate-y-1/2 z-50 text-lg font-bold sm:static sm:translate-y-0 shrink-0">
          Fictional App
        </div>
        {/* menu */}
        <div
          className={classNames(
            "fixed pt-16 pb-3 transition-all z-10 left-0 size-full bg-customBlue items-center text-center flex flex-col gap-5 -top-full overflow-y-auto sm:relative sm:top-0 sm:p-0 sm:sm:flex-row sm:justify-end",
            { "top-0": isOpenMenu, "-top-full": !isOpenMenu }
          )}>
          <ul className="sm:relative z-50 flex flex-col gap-4 sm:flex-row">
            <li>
              <a href="#features" className="hover:underline">
                Features
              </a>
            </li>
            <li>
              <a href="#about" className="hover:underline">
                About
              </a>
            </li>
          </ul>
          <button className="bg-white text-customBlue px-4 py-1 rounded hover:bg-gray-200">
            Get Started
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
