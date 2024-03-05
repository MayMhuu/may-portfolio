import LocalConfig from "@/constants/config";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";

const ResumeButton = () => {
  return (
    <Link
      className="app__outlined_btn min-w-[12rem]"
      href={LocalConfig.values.NEXT_PUBLIC_RESUME_LINK}
      target="_blank"
    >
      <p className="text-sm font-semibold text-[var(--textColor)]"> View Full Résumé</p>
    </Link>
  );
};

export default ResumeButton;
