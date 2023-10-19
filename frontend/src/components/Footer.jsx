import {
  IconBrandInstagram,
  IconBrandFacebook,
  IconBrandTiktok,
} from "@tabler/icons-react";

function Footer() {
  return (
    <>
      <footer className="flex flex-col gap-6 justify-between items-center p-10 bg-neutral text-neutral-content text-xs md:text-sm">
        <aside>
          <p>Copyright © 2023 - Yates Martial Arts</p>
        </aside>
        <nav>
          <div className="flex gap-4">
            <a>
              <IconBrandInstagram className="h-7 w-7" />
            </a>
            <a>
              <IconBrandTiktok className="h-7 w-7" />
            </a>
            <a>
              <IconBrandFacebook className="h-7 w-7" />
            </a>
          </div>
        </nav>
        <nav className="flex gap-4">
          <a className="link link-hover">Privacy Policy</a>
          <a
            className="link link-hover"
            href="/Yates Martial Arts and Fitness Health and Safety Policy.docx"
            target="_blank"
          >
            Health & Safety Policy
          </a>
          <a
            className="link link-hover"
            href="Yates Martial Arts and Fitness Safeguarding & Child Protection Policy and Procedures.docx"
            target="_blank"
          >
            Safeguarding & Child Protection Policy
          </a>
        </nav>
      </footer>
    </>
  );
}

export default Footer;
