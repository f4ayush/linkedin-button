"use client"
import React, { useState } from "react"
import likeImage from "../assets/like-main.png"
import celebrate from "../assets/celebrate.svg"
import funny from "../assets/funny.svg"
import heart from "../assets/heart.svg"
import insightful from "../assets/insightful.svg"
import like from "../assets/like.svg"
import Image, { StaticImageData } from "next/image"

function Like() {
  const imageData = [
    {
      text: "Like",
      image: like,
    },
    {
      text: "Celebrate",
      image: celebrate,
    },
    {
      text: "Heart",
      image: heart,
    },
    {
      text: "Insightful",
      image: insightful,
    },
    {
      text: "Funny",
      image: funny,
    },
  ]
  const [isLikeContainerHovered, setisLikeContainerHovered] = useState(false)
  const [reaction, setReaction] = useState<{
    image: StaticImageData
    text: string
  }>()

  const handleReactionSelection = (index: number) => {
    setisLikeContainerHovered(false)
    setReaction(imageData[index])
  }

  const handleLikeButtonClick = () => {
    if (reaction) {
      setReaction(undefined)
    } else {
      setReaction(imageData[0])
    }
    setisLikeContainerHovered(false)
  }
  return (
    <div
      className='like-wrapper'
      onMouseEnter={() => setisLikeContainerHovered(true)}
      onMouseLeave={() => setisLikeContainerHovered(false)}
    >
      <h3>This comment is done by Avinash Kumar</h3>

      {isLikeContainerHovered && (
        <div className='reactions'>
          {imageData.map((data, index) => (
            <Image
              key={index}
              src={data.image}
              className='icons'
              alt={data.text}
              onClick={() => handleReactionSelection(index)}
              height={25}
            />
          ))}
        </div>
      )}

      <div className='like-container' onClick={handleLikeButtonClick}>
        {reaction?.image ? (
          <>
            <Image src={reaction.image} alt='like' height={25} />
            <span>{reaction.text}</span>
          </>
        ) : (
          <>
            <Image src={likeImage} alt='like' height={25} />
            <span>like</span>
          </>
        )}
      </div>
    </div>
  )
}

export default Like
