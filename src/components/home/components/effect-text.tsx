import type { IEffectText } from "@/interfaces";
import Link from "next/link";

const EffectText = ({ text, url }: IEffectText) => {
  return (

    <Link

      href={url}
      target="_blank"
    >
      <span className="text-[var(--textColor)]  hover:text-[var(--primaryColor)]">{text}</span>
    </Link>
  );
};

export default EffectText;
