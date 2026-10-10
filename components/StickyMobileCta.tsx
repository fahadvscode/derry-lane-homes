"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function StickyMobileCta() {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  if (pathname === "/register" || pathname === "/thank-you") return null;

  return (
    <motion.div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-brand-deep p-3 md:hidden"
      initial={reduce ? false : { y: 12 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      <Link href="/register" className="btn w-full">
        Register for VIP Access
      </Link>
    </motion.div>
  );
}
