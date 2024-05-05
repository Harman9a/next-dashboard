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
      <div className="flex justify-center">
        <div
          className="card shadow-xl bg-neutral text-neutral-content cursor-pointer items-center hover:bg-[#2b3440cf]"
          onClick={hanldeClick}
          style={{ width: "60%", height: 120 }}
        >
          <div className="card-body justify-center">
            <h2 className="card-title" style={{ fontSize: "1rem" }}>
              {text}
            </h2>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="my-5">
      <MyTitle title="Products" />
      <div className="grid grid-cols-2 gap-4">
        <ProductCard text="MSME (Micro) CAPS Model" />
        <ProductCard text="MSME (Small) CAPS Model" />
        <ProductCard text="MSME (Medium) CAPS Model" />
        <ProductCard text="Large Company (LC) CAPS Model" />
      </div>
    </div>
  );
}

export default Products;
