import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex ">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Manage Your Expense
            <strong className="font-extrabold text-primary sm:block">
              {" "}
              Control your Money.{" "}
            </strong>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed">
            Start Creating your budget and save tons of money..
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
              href="/sign-in"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-5">
        <Image
          src={"/dashboard.png"}
          alt="dashboard"
          width={1000}
          height={700}
          className="rounded-xl w-full max-w-screen-md"
        />
      </div>
    </section>
  );
};

export default Hero;
