import Image from "next/image";
export default function about() {
  return (
    <div className="flex-container">
      <span className="avatar-img">
        <Image
          alt="avatar"
          src="/../public/avatar.jpg"
          width={100}
          height={100}
        />
      </span>
      <div className="c-container">
        <span>
          <Image
            alt="email icon"
            src="/../public/icon/envelope.svg"
            width={30}
            height={30}
          ></Image>
          <a className="contact-details">email.example.com</a>
        </span>

        <span>
          <Image
            alt="email icon"
            src="/../public/icon/linkedin.svg"
            width={30}
            height={30}
          ></Image>
          <a
            href="https://linkedin.com"
            target="_blank"
            className="contact-details"
          >
            Linkedin
          </a>
        </span>

        <span>
          <Image
            alt="email icon"
            src="/../public/icon/twitter.svg"
            width={30}
            height={30}
          ></Image>
          <a
            className="contact-details"
            target="_blank"
            href="https://twitter.com"
          >
            Twitter
          </a>
        </span>

        <span>
          <Image
            alt="email icon"
            src="/../public/icon/instagram.svg"
            width={30}
            height={30}
          ></Image>
          <a
            className="contact-details"
            target="_blank"
            href="https://instagram.com"
          >
            Instagram
          </a>
        </span>
      </div>
    </div>
  );
}
