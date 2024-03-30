import Image from "next/image";

const ImageEffect = ({
    src,
    alt,
}: Readonly<{ src: string; alt: string }>) => {
    return (

        <div className="relative  overflow-hidden bg-cover bg-no-repeat">
            <Image
                src={src}
                alt={alt}
                width={400}
                height={400}
                sizes="100%"
                priority
                placeholder="blur"
                blurDataURL="/images/photo.jpeg"
                style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                    aspectRatio: "1 / 1",
                }}
                className="transition duration-300 ease-in-out hover:scale-110"
            />

        </div>
    
    );
};

export default ImageEffect;



