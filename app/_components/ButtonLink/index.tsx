// ButtonLink.tsx
import React from "react";
import Link from "next/link";

interface Props {
  href: string;
  children: React.ReactNode;
  className?: string; // className をオプションに追加
}

const ButtonLink: React.FC<Props> = ({ href, children, className }) => {
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
};

export default ButtonLink;
