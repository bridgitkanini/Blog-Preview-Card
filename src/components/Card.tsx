//import React from 'react'
import IllustrationImage from '/src/images/illustration-article.svg';

const Card = () => {
  return (
    <div className="bg-white p-4 rounded-2xl border border-black flex flex-col gap-4 max-w-[365px]">
        <img src={IllustrationImage} alt="Illustration Image" />
        <p>
            Card
        </p>
    </div>
  )
}

export default Card;


