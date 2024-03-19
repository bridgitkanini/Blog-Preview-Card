//import React from 'react'
import IllustrationImage from "../images/illustration-article.svg";
import ImageAvatar from "../images/image-avatar.webp";

const Card = () => {
  return (
    <section className="relative group">
      <div className="relative z-20 bg-white p-4 rounded-2xl border border-black flex flex-col gap-4 max-w-[365px] text-left shadow-cardShadow">
        <img
          src={IllustrationImage}
          className="rounded-lg"
          alt="Illustration Image"
        />
        <div className="text-black bg-yellow-300 rounded px-3 py-1 text-sm w-fit font-bold">
          Learning
        </div>
        <p className="text-sm font-semibold text-gray-700">
          Published 11 March 2024
        </p>
        <h2 className="hover:text-yellow-300 text-2xl font-bold cursor-pointer">
          HTML & CSS Foundations
        </h2>
        <p className="text-gray-400">
          These languages are the backbone of every website, defining structure,
          content and presentation.
        </p>
        <div className="flex items-center gap-4">
          <img className="h-8 w-8" src={ImageAvatar} alt="Image Avatar" />
          <p className="font-bold text-sm">Greg Hooper</p>
        </div>
      </div>
      {/* <div className="absolute z-10 top-2 group-hover:top-4 left-2 group-hover:left-4 transition-all bg-black h-full w-full rounded-2xl" /> */}
    </section>
  );
};

export default Card;
