
"use client";
import React from "react";

export const FeatureCard = (props) => {
  return (
    <div className="h-[234px] border border-gray-300 w-[410.67px] rounded-[14px] flex flex-col items-center gap-9 p-[25px]">
      <img src={props.icon} alt={props.title} />
      <p className="text-[15px] text-black">{props.title}</p>
      <p className="text-center text-[14px] text-[#4A5565]">{props.desc}</p>
    </div>
  );
};
