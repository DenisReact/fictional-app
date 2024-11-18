import FacebookIcon from "../assets/facebook.svg?react";
import TwitterIcon from "../assets/twitter.svg?react";

function Footer() {
  const socials = [
    {
      label: "Facebook",
      Icon: FacebookIcon,
    },
    {
      label: "Twitter",
      Icon: TwitterIcon,
    },
  ];

  return (
    <footer className="py-8">
      <div className="container mx-auto text-center">
        <p className="mb-4">© 2024 Fictional App. All rights reserved.</p>
        <ul className="flex justify-center gap-4 mb-4">
          <li>
            <a href="#privacy" className="hover:underline">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#terms" className="hover:underline">
              Terms of Service
            </a>
          </li>
        </ul>
        <div className="flex justify-center gap-4">
          {socials.map(({ Icon, label }) => (
            <a className="flex gap-2 items-center" key={"footer-social-" + label} href="#" aria-label={label}>
              <Icon className="size-8" />
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
