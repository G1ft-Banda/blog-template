export default function about() {
  return (
    <div className="flex-container">
      <span className="avatar-img">
        <img alt="avatar" src="avatar.jpg" width={100} height={100} />
      </span>
      <div className="c-container">
        <span>
          <img alt=" icon" src="icon/envelope.svg"></img>
          <a className="contact-details">email.example.com</a>
        </span>

        <span>
          <img alt=" icon" src="icon/linkedin.svg"></img>
          <a href="https://linkedin.com" className="contact-details">
            Linkedin
          </a>
        </span>

        <span>
          <img alt=" icon" src="icon/twitter.svg"></img>
          <a className="contact-details" href="https://twitter.com">
            Twitter
          </a>
        </span>

        <span>
          <img alt=" icon" src="icon/instagram.svg"></img>
          <a className="contact-details" href="https://instagram.com">
            Instagram
          </a>
        </span>
      </div>
    </div>
  );
}
