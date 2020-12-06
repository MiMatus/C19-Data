import React from "react"
import { ImageTag, ImageWrapper } from "./Image.style"

interface ImageProps {
  src: string
  alt?: string
  className?: string
}

export const Image: React.FC<ImageProps> = ({ src, alt, className }) => {
  return (
    <ImageWrapper className={className}>
      <ImageTag src={src} alt={alt} />
    </ImageWrapper>
  )
}
