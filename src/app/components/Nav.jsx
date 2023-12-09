"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { UserLogout } from "../redux/authSlice";

import toast, { Toaster } from "react-hot-toast";

function Nav() {
  const IsLogedIn = useSelector((state) => state.auth.isLogedIn);
  const User = useSelector((state) => state.auth.user);
  const item = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const pathname = usePathname();
  const [toggle, settoggle] = useState(false);
  const Toggle = () => {
    settoggle(!toggle);
  };
  const handleLogOut = () => {
    dispatch(UserLogout());
    toast.success("User logged out");
  };
  return (
    <>
      <nav className="relative ">
        <div className="flex backdrop-blur-lg bg-slate-200 bg-opacity-50 flex-row justify-between z-50 md:h-20 sm:h-[10vh] top-0 fixed w-full px-10">
          <div className="w-20 self-center ">
            <Link href={"/"}>
              <img
                className=" grayscale sepia brightness-0 sm:w-10"
                src="https://cdn.iconscout.com/icon/free/png-512/free-puma-3421676-2854595.png?f=webp&w=256"
              />
            </Link>
          </div>
          <div className={`Navigation-menu  md:mt-[3.5vh]`}>
            <ul
              className={`flex-row flex  gap-4 text-black  text-lg font-bold`}
            >
              <li className="">
                <Link
                  className={`link ${
                    pathname === "/"
                      ? "underline decoration-2 underline-offset-4 decoratext-black"
                      : ""
                  } hover:underline decoration-2 underline-offset-4 decoration-orange-900 hover:text-black`}
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li className="">
                <Link
                  className={`link ${
                    pathname === "/men"
                      ? "underline decoration-2 underline-offset-4 decoratext-black"
                      : ""
                  } hover:underline decoration-2 underline-offset-4 decoration-orange-900 hover:text-black`}
                  href={"/men"}
                >
                  Men
                </Link>
              </li>
              <li className="">
                <Link
                  className={`link ${
                    pathname === "/women"
                      ? "underline decoration-2 underline-offset-4 decoratext-black"
                      : ""
                  } hover:underline decoration-2 underline-offset-4 decoration-orange-900 hover:text-black`}
                  href={"/women"}
                >
                  women
                </Link>
              </li>
              <li className="">
                <Link
                  className={`link ${
                    pathname === "/kid"
                      ? "underline decoration-2 underline-offset-4 decoratext-black"
                      : ""
                  } hover:underline decoration-2 underline-offset-4 decoration-orange-900 hover:text-black`}
                  href="/kid"
                >
                  kids
                </Link>
              </li>
              <li className="">
                <Link
                  className={`link ${
                    pathname === "/about"
                      ? "underline decoration-2 underline-offset-4 decoratext-black"
                      : ""
                  } hover:underline decoration-2 underline-offset-4 decoration-orange-900 hover:text-black`}
                  href="/about"
                >
                  about
                </Link>
              </li>
              <li className="">
                <Link
                  className={`link ${
                    pathname === "/contact"
                      ? "underline decoration-2 underline-offset-4 decoratext-black"
                      : ""
                  } hover:underline decoration-2 underline-offset-4 decoration-orange-900 hover:text-black`}
                  href="/contact"
                >
                  contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-row gap-5  items-center ld:order-1 sm:order-none md:order-1">
            <div className="w-6 sm:justify-self-end">
              <Link href={"/wishlist"}>
                <FavoriteBorderIcon className="text-black" fontSize="medium" />
              </Link>
            </div>
            <div className="w-6">
              <Link href={"/cart"}>
                <p className="text-black bg-slate-200 rounded-3xl absolute font-extrabold  px-2 sm:top-[7%] md:top-[15%] text-sm">
                  {item.length}
                </p>
                <ShoppingCartIcon className="text-black" fontSize="medium" />
              </Link>
            </div>
            <div className="sm:hidden md:block w-6">
              {IsLogedIn ? (
                <button onClick={handleLogOut}>hello {User.name}</button>
              ) : (
                <Link href={"/account/Login"}>
                  <AccountCircleIcon className="text-black" fontSize="medium" />
                </Link>
              )}
            </div>
            <div>
              <button onClick={Toggle} className="text-black Hamburger">
                {toggle ? "X" : "Menu"}
              </button>
            </div>
          </div>
        </div>
      </nav>
      {toggle && (
        <div
          className={`pt-24 z-50 mobile-Nav fixed top-[10vh] backdrop-blur-[7px] bg-gradient-to-br from-black text-white bg-opacity-40  h-[100vh] ${toggle}`}
        >
          <ul className={`ml-[5vw] flex-col flex text-lg font-bold`}>
            {IsLogedIn ? (
              <li>
                <Link href="/account/profile">
                  <img className="w-[20vw] rounded-full" src={User.profile} />
                  <h1>Hello {User.name}</h1>
                </Link>
              </li>
            ) : null}
            <li className="pb-3">
              <Link
                className={`link ${
                  pathname === "/"
                    ? "underline decoration-2 underline-offset-4 "
                    : ""
                } hover:underline decoration-2 underline-offset-4 decoration-orange-900 hover:text-black`}
                href="/"
              >
                Home
              </Link>
            </li>
            <li className="pb-3">
              <Link
                className={`link ${
                  pathname === "/men"
                    ? "underline decoration-2 underline-offset-4 "
                    : ""
                } hover:underline decoration-2 underline-offset-4 decoration-orange-900 hover:text-black`}
                href={"/men"}
              >
                Men
              </Link>
            </li>
            <li className="pb-3">
              <Link
                className={`link ${
                  pathname === "/women"
                    ? "underline decoration-2 underline-offset-4 "
                    : ""
                } hover:underline decoration-2 underline-offset-4 decoration-orange-900 hover:text-black`}
                href={"/women"}
              >
                women
              </Link>
            </li>
            <li className="pb-3">
              <Link
                className={`link ${
                  pathname === "/kid"
                    ? "underline decoration-2 underline-offset-4 "
                    : ""
                } hover:underline decoration-2 underline-offset-4 decoration-orange-900 hover:text-black`}
                href="/kid"
              >
                kids
              </Link>
            </li>
            <li className="pb-3">
              <Link
                className={`link ${
                  pathname === "/about"
                    ? "underline decoration-2 underline-offset-4 "
                    : ""
                } hover:underline decoration-2 underline-offset-4 decoration-orange-900 hover:text-black`}
                href="/about"
              >
                about
              </Link>
            </li>
            <li className="mb-4">
              <Link
                className={`link ${
                  pathname === "/contact"
                    ? "underline decoration-2 underline-offset-4 "
                    : ""
                } hover:underline decoration-2 underline-offset-4 decoration-orange-900 hover:text-black`}
                href="/contact"
              >
                contact
              </Link>
            </li>
            {IsLogedIn ? (
              <li>
                <button
                  onClick={handleLogOut}
                  className="text-ltext-black  font-bold  px-4 py-2 border-solid border-2 "
                >
                  Logout
                </button>
              </li>
            ) : (
              <div>
                <li className="mb-6">
                  <Link
                    className="text-lg font-bold  px-4 py-2 border-solid border-2 "
                    href={"/account/Login"}
                  >
                    Login
                  </Link>
                </li>
                <li className="mt-1">
                  <Link
                    className=" text-ltext-black  font-bold  px-4 py-2 border-solid border-2 "
                    href={"/account/Register"}
                  >
                    Register
                  </Link>
                </li>
              </div>
            )}
          </ul>
          <Toaster />
        </div>
      )}
    </>
  );
}

export default Nav;
