"use client";
import MyTitle from "@/app/ui/common/MyTitle";
import { useRouter } from "next/navigation";
import React from "react";

function Products() {
  const ProductCard = ({ text, han }: any) => {
    const router = useRouter();
    const hanldeClick = () => {
      router.push("/admin/caps/clients");
    };
    return (
      <div
        className="card w-50  shadow-xl bg-neutral text-neutral-content cursor-pointer"
        onClick={hanldeClick}
      >
        <div className="card-body">
          <h2 className="card-title" style={{ fontSize: "1rem" }}>
            {text}
          </h2>
        </div>
      </div>
    );
  };

  return (
    <div className="my-3">
      <MyTitle title="Products" />
      <div className="grid grid-cols-3 gap-4">
        <ProductCard text="MSME (Micro - I) CAPS Model" />
        <ProductCard text="MSME (Micro - II ) CAPS Model" />
        <ProductCard text="MSME (Small - I ) CAPS Model" />
        <ProductCard text="MSME (Small - II ) CAPS Model" />
        <ProductCard text="MSME (Medium - I ) CAPS Model" />
        <ProductCard text="Large Company (LC) CAPS Model" />
      </div>
    </div>
  );
}

export default Products;
