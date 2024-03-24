import Image from "next/image";
import Column from "../layout/column";
import Row from "../layout/row";

const GalleryView = ({
  src,
  alt,
  description
}: Readonly<{ src: string; alt?: string, description?: string }>) => {
  return (
  
        <Image
          src={src}
          alt={alt || `img`}
          width={1080}
          height={1080}
          sizes="100%"
          priority={false}
          loading="lazy"
          placeholder="blur"
          blurDataURL="/images/placeholder.png"
          className="w-full h-auto max-h-[calc(100vh-8rem)] object-contain m-auto pt-2"
        />
  );
};

export default GalleryView;
