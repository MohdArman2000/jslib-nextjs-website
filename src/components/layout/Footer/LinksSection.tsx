import React from "react";
import { FooterLinks } from "./footer.types";
import Link from "next/link";
import { cn } from "@/lib/utils";

const footerLinksData: FooterLinks[] = [
  {
    id: 1,
    title: "company",
    children: [
      {
        id: 11,
        label: "about",
        url: "/about",
      },
      {
        id: 12,
        label: "features",
        url: "/shop",
      },
      {
        id: 13,
        label: "works",
        url: "/shop",
      },
      {
        id: 14,
        label: "career",
        url: "/contact",
      },
    ],
  },
  {
    id: 2,
    title: "help",
    children: [
      {
        id: 21,
        label: "customer support",
        url: "/contact",
      },
      {
        id: 22,
        label: "delivery details",
        url: "/shop",
      },
      {
        id: 23,
        label: "terms & conditions",
        url: "/about",
      },
      {
        id: 24,
        label: "privacy policy",
        url: "/about",
      },
    ],
  },
  {
    id: 3,
    title: "faq",
    children: [
      {
        id: 31,
        label: "account",
        url: "/contact",
      },
      {
        id: 32,
        label: "manage deliveries",
        url: "/shop",
      },
      {
        id: 33,
        label: "orders",
        url: "/cart",
      },
      {
        id: 34,
        label: "payments",
        url: "/cart",
      },
    ],
  },
  {
    id: 4,
    title: "resources",
    children: [
      {
        id: 41,
        label: "Free eBooks",
        url: "/about",
      },
      {
        id: 42,
        label: "development tutorial",
        url: "/about",
      },
      {
        id: 43,
        label: "How to - Blog",
        url: "/about",
      },
      {
        id: 44,
        label: "youtube playlist",
        url: "/about",
      },
    ],
  },
];

const LinksSection = () => {
  return (
    <>
      {footerLinksData.map((item) => (
        <section className="flex flex-col mt-5" key={item.id}>
          <h3 className="font-medium text-sm md:text-base uppercase tracking-widest mb-6">
            {item.title}
          </h3>
          {item.children.map((link) => (
            <Link
              href={link.url}
              key={link.id}
              className={cn([
                link.id !== 41 && link.id !== 43 && "capitalize",
                "text-black/60 text-sm md:text-base mb-4 w-fit",
              ])}
            >
              {link.label}
            </Link>
          ))}
        </section>
      ))}
    </>
  );
};

export default LinksSection;
