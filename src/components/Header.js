const Header = () => {
    return (
      <header>
        <section className="header-section">
          <h1 className="header-title">
            I am a frontend <span>developer.</span>
          </h1>
          <p className="header-copy">
            Hello, I'm Debbie. I design and code beautifully simple things. My
            social media knowledge and experience of content creation help me to
            deliver beautiful websites with JavaScript, React and TailwindCSS.
          </p>
          <button className="header-btn">Get in touch</button>
        </section>
        <div className="header-img-mask mask">
          <img src="./images/debbie-dann.png" className="header-img" />
        </div>
      </header>
    );
}
 
export default Header;