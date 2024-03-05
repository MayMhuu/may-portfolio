import type { ILinkItem } from "@/interfaces";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareArrowUpRight,faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const NewTab = ({ url }: ILinkItem) => {
    return (
        <Link
            href={url}
            target="_blank"
        >
            <span className=" text-[var(--textColor)]">
                <FontAwesomeIcon
                    icon={faSquareArrowUpRight}
                    className="text-sm text-[var(--textColorLight90)] hover:text-[var(--primaryColor)]"
                />
                
            </span>
        </Link>
    );
};

export default NewTab;
