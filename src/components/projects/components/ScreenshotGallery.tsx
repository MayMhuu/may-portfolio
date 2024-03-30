"use client";

import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Row from "@/components/layout/row";
import Column from "@/components/layout/column";
import { IScreenshotItem } from "@/interfaces";

const ScreenshotGallery = ({
  imageList,
}: Readonly<{ imageList: Array<IScreenshotItem> }>) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  return (
    <Column classNames="w-full mt-4">
      <Row classNames="w-full gap-4 overflow-y-hidden overflow-x-auto no-scrollbar items-center">
        {imageList.map((img, index) => {
          return (
            <Link
              key={`screenshot-${index}`}
              className="hover:bg-zinc-600/10 hover:border-zinc-400/50 relative min-w-[12rem] lg:min-w-[14rem] max-w-[12rem] lg:max-w-[14rem] aspect-[9/16] border border-[var(--textColor10)] rounded-[var(--defaultRadius)] overflow-hidden drop_in"
              href={{
                pathname: pathname,
                query: {
                  id: searchParams.get("id"),
                  imgSrc: img.url,
                  description: img.description,
                },
              }}
              scroll={false}
            >
              <Image
                src={img.url}
                alt={`screenshot-${index}`}
                fill
                sizes="100%"
                priority={false}
                loading="lazy"
                placeholder="blur"
                blurDataURL="/images/placeholder.png"
                className="w-full h-full object-cover py-2 px-2 rounded-[var(--defaultRadius)]"
              />
            </Link>
          );
        })}
      </Row>
    </Column>
  );
};

export default ScreenshotGallery;
