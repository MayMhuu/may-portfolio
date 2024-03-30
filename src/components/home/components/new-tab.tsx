import type { ILinkItem } from "@/interfaces";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareArrowUpRight, faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const NewTab = ({ url, text }: ILinkItem) => {
    return (
        <Link
            href={url}
            target="_blank"
            className="flex flex-row space-x-4  text-[var(--textColorLight90)]  group-hover:text-[var(--primaryColor80)] "
        >
            <p className=" text-base/6 font-medium  ">
                {text}
            </p>
            <span className=" text-[var(--textColor)] ">
                <FontAwesomeIcon
                    icon={faSquareArrowUpRight}
                    className="text-sm text-[var(--textColorLight90)] group-hover:text-[var(--primaryColor80)]  "
                />

            </span>
        </Link>
    );
};

export default NewTab;
