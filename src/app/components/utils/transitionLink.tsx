"use client";
import Link, { LinkProps } from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { useParallax } from "@/app/contexts/parallaxContext";

interface TransitionLinkProps extends LinkProps {
  children: React.ReactNode;
  href: string;
  className?: string;
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const TransitionLink: React.FC<TransitionLinkProps> = ({
  children,
  href,
  className,
  ...props
}) => {
  const router = useRouter();
  const { setParallaxEnabled } = useParallax();

  const handleTransition = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();

    setParallaxEnabled(false);

    const body = document.querySelector("body");
    body?.classList.add("page-transition"); // Add exit animation
    await sleep(500); // Allow exit transition to finish
    router.push(href); // Navigate to the new page

    const newBody = document.querySelector("body");
    newBody?.classList.add("page-enter"); // Add fade-in class to the new page
    await sleep(500); // Delay fade-in transition

    body?.classList.remove("page-transition"); // Remove transition classes
    newBody?.classList.remove("page-enter");

    setParallaxEnabled(true);
  };

  return (
    <Link {...props} href={href} onClick={handleTransition} className={className}>
      {children}
    </Link>
  );
};

