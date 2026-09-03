import Link from "next/link";
import { ArrowIcon } from "./Icons";

const colorMap = {
  primary: "bg-ink text-white hover:bg-black",
  "primary-inverse": "bg-white text-ink hover:bg-mist",
  secondary:
    "bg-transparent text-ink border border-ink/15 hover:border-ink hover:bg-ink hover:text-white",
  "secondary-inverse":
    "bg-transparent text-white border border-white/20 hover:bg-white hover:text-ink",
};

export default function Button({
  text,
  href,
  type = "button",
  color = "primary",
  className = "",
  iconAfter = true,
  onClick,
}) {
  const classes = [
    "group inline-flex items-center justify-center gap-[1.2rem] rounded-full",
    "px-[2.4rem] py-[1.4rem] md:px-[3.2rem] md:py-[1.8rem]",
    "text-[1.4rem] md:text-[1.8rem] font-medium leading-none tracking-[-0.01em]",
    "transition-colors duration-300",
    colorMap[color] ?? colorMap.primary,
    className,
  ].join(" ");

  const content = (
    <>
      <span>{text}</span>
      {iconAfter ? (
        <ArrowIcon className="w-[1.6rem] h-[1.6rem] md:w-[2rem] md:h-[2rem] rtl:rotate-180 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-[0.2rem] rtl:group-hover:-translate-x-[0.2rem]" />
      ) : null}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
