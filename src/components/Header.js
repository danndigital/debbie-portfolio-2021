import { useRef, useEffect } from "react";
import { gsap, Power3 } from "gsap";

const Header = () => {
  let headerSection = useRef(null)
  let headerTitle = useRef(null);
  let headerEmphasis = useRef(null);
  let headerCopy = useRef(null);
  let headerBtn = useRef(null);

  useEffect(() => {
gsap.to(headerSection, 0, {css: {visibility: "visible"}})
gsap.from(headerTitle, {duration: .8, opacity: 0, y: 40, ease: Power3.easeOut})
gsap.from(headerEmphasis, {
  duration: 0.8,
  opacity: 0,
  y: 40,
  ease: Power3.easeOut,
  delay: .2
});
gsap.from(headerCopy, {
  duration: 0.8,
  opacity: 0,
  y: 40,
  ease: Power3.easeOut,
  delay: .4
});

gsap.from(headerBtn, {
  duration: 0.8,
  opacity: 0,
  y: 40,
  ease: Power3.easeOut,
  delay: 0.6,
});

  }, []);

  return (
    <header>
      <section ref={(el) => {
        headerSection = el
      }} className="header-section">
        <h1
          ref={(el) => {
            headerTitle = el;
          }}
          className="header-title"
        >
          I am a frontend developer.
        </h1>
        <p
          ref={(el) => {
            headerEmphasis = el;
          }}
          className="header-emphasis"
        >
          Hello, I'm Debbie. I design and code beautifully simple things.
        </p>
        <p
          ref={(el) => {
            headerCopy = el;
          }}
          className="header-copy"
        >
          My social media knowledge and experience of content creation help me
          to deliver beautiful websites with JavaScript, React and TailwindCSS.
        </p>
        <button
          ref={(el) => {
            headerBtn = el;
          }}
          className="header-btn"
        >
          Get in touch
        </button>
      </section>
      <div className="sparkle-container">
          <img src="/images/sparkle.svg" className="sparkle one" alt="sparkle shape" />
          <img src="/images/sparkle.svg" className="sparkle two" alt="sparkle shape" />
          <img src="/images/sparkle.svg" className="sparkle three" alt="sparkle shape" />
          <picture>
            <source 
                media="(min-width: 650px)"
                srcset="./images/debbie-dann-compressed.png" />
            <source 
                media="(max-width: 650px)"
                srcset="./images/debbie-dann-compressed.webp" />
            <img src="./images/debbie-dann-compressed.png" 
            alt="debbie dann profile" 
            className="header-img"
            />
          </picture>
      </div>
    </header>
  );
};

export default Header;
