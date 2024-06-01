import React from "react";
import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/nextjs";

const Header = () => {
  return (
    <header>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="text-center sm:text-left">
            <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              ExpenseTracker
            </h3>
          </div>

          <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
            <SignInButton>
              <button
                className="block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
                type="button"
              >
                Start Now!
              </button>
            </SignInButton>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
