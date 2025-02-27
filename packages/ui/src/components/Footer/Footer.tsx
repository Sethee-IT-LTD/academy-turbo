import Link from "next/link";

import { Icons } from "../Icons";

interface SocialLinks {
  alt?: string;
  href: string;
  icon: string;
}

interface FooterLinks {
  name: string;
  href: string;
}

const links: readonly FooterLinks[] = [
  { name: "Academy", href: "https://academy.developerdao.com" },
  { name: "Feedback", href: "#Feedbacks" },
  { name: "Newsletter", href: "#Newsletter" },
];

const socials: readonly SocialLinks[] = [
  { alt: "Github", href: "https://github.com/Developer-DAO", icon: "github_circle" },
  { alt: "Twitter", href: "https://x.com/devdao_academy", icon: "twitter_circle" },
  { alt: "Mirror", href: "#mirror.xyz", icon: "mirror_circle" },
];

export const Footer = () => {
  return (
    <footer>
      <div className="footer main-container">
        <nav aria-label="social">
          {socials.map((social) => {
            const Icon = Icons[social.icon];
            return (
              <Link aria-label={social.alt} href={social.href} className="group" key={social.href}>
                {Icon ? <Icon /> : null}
              </Link>
            );
          })}
        </nav>
        <nav aria-label="quick links" className="divide-x">
          {links.map((link) => (
            <Link
              href={link.href}
              className="group inline-flex h-full items-center pl-6"
              key={link.href}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="divide-x">
          <Icons.dd_logo className="h-32 w-40" />
          <p className="max-w-xs pl-6 text-start">
            Developer DAO Foundation © 2023 Website content licensed under&emsp;
            <Link href="https://creativecommons.org/licenses/by-nc/4.0/" className="underline">
              CC BY-NC 4.0
            </Link>
            . Website code is licensed under&emsp;
            <Link
              href="https://github.com/Developer-DAO/academy/blob/main/LICENSE"
              className="underline"
            >
              MIT
            </Link>
            .&emsp;
            <Link href="https://www.developerdao.com/privacy-policy" className="underline">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};
