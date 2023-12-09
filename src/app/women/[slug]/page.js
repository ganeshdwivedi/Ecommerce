import ReviewProduct from "../../components/ReviewProduct";
import React from "react";

function page({ params }) {
  return (
    <div>
      <ReviewProduct params={params} />
    </div>
  );
}

export default page;
