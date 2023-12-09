"use client";
import React from "react";
import Link from "next/link";
import { useGetProductByCategoryQuery } from "../redux/productApi";
import { useDispatch } from "react-redux";
import { addtocart } from "../redux/cartSlice";
import Loading from "./loading";

function page() {
  const dispatch = useDispatch();
  const { isError, isLoading, isSuccess, data } =
    useGetProductByCategoryQuery("womens-bags");

  if (isLoading) {
    return <Loading />;
  }

  const AddToCart = (data) => {
    dispatch(addtocart(data));
  };

  const getAllProducts = data.products.map((data) => {
    return (
      <div
        key={data.id}
        className="md:w-[25vw] sm:w-[49vw] h-[full] md:my-8 sm:my-2 border-slate-300 md:p-4 sm:p-2 shadow-lg border-2 overflow-hidden"
      >
        <Link href={`/women/${data.id}`}>
          <div className="">
            <img
              className="object-cover hover:scale-[1.03] hover:transition-all hover:delay-[120ms] md:w-full md:h-[40vh] sm:h-[25vh] sm:w-full "
              src={data.thumbnail}
            />
          </div>
          <div className="mt-2">
            <p className="font-medium">{data.title}</p>
            <h4 className="font-bold">
              ${data.price}
              <span className=" text-red-700 text-xs">
                {" "}
                ({Math.round(data.discountPercentage)}% off)
              </span>
            </h4>
          </div>
        </Link>
        <button
          onClick={() => {
            AddToCart(data);
          }}
          className="bg-black rounded-md text-white px-3 py-1 m-2"
        >
          Add to cart
        </button>
      </div>
    );
  });

  return (
    <>
      <div className="flex justify-center sm:my-[4.5rem] my-10">
        {
          <div className="grid md:grid-cols-2 sm:grid-cols-2 sm:gap-x-5 sm:gap-y-0 md:gap-x-10">
            {getAllProducts}
          </div>
        }
      </div>
    </>
  );
}

export default page;
