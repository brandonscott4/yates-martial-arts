import { IconBrandInstagram, IconBrandFacebook } from "@tabler/icons-react";

import PrivacyPolicy from "../assets/Yates Martial Arts and Fitness Privacy Policy.pdf";
import HealthSafety from "../assets/Yates Martial Arts and Fitness Health and Safety Policy.pdf";
import Safeguarding from "../assets/Yates Martial Arts and Fitness Safeguarding & Child Protection Policy and Procedures.pdf";
import GDPR from "../assets/Yates Martial Arts and Fitness- General Data Protection Regulation Policy.pdf";

function Footer() {
  const currYear = new Date().getFullYear();

  return (
    <>
      <footer className="flex flex-col gap-6 justify-between items-center p-10 bg-neutral text-neutral-content text-sm">
        <aside>
          <p>Copyright © {currYear} - Yates Martial Arts</p>
        </aside>
        <nav>
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/yatesmartialarts"
              target="_blank"
              rel="noreferrer"
            >
              <IconBrandInstagram className="h-7 w-7 cursor-pointer hover:text-blue-300" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61552706806655"
              target="_blank"
              rel="noreferrer"
            >
              <IconBrandFacebook className="h-7 w-7 cursor-pointer hover:text-blue-300" />
            </a>
          </div>
        </nav>
        <nav className="flex gap-4">
          <a
            className="link link-hover"
            href={PrivacyPolicy}
            target="_blank"
            rel="noreferrer"
          >
            Privacy Policy
          </a>
          <a
            className="link link-hover"
            href={HealthSafety}
            target="_blank"
            rel="noreferrer"
          >
            Health & Safety Policy
          </a>
          <a
            className="link link-hover"
            href={Safeguarding}
            target="_blank"
            rel="noreferrer"
          >
            Safeguarding & Child Protection Policy
          </a>
          <a
            className="link link-hover"
            href={GDPR}
            target="_blank"
            rel="noreferrer"
          >
            GDPR Policy
          </a>
        </nav>
      </footer>
    </>
  );
}

export default Footer;
