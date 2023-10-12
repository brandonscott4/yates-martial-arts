import {
  IconBrandInstagram,
  IconBrandFacebook,
  IconBrandTiktok,
} from "@tabler/icons-react";

function Footer() {
  return (
    <>
      <footer className="footer items-center p-5 bg-neutral text-neutral-content">
        <div className="items-center grid-flow-col">
          <p>Copyright © 2023 - Yates Martial Arts</p>
        </div>
        <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
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
      </footer>
    </>
  );
}

export default Footer;
