const Header = () => {
    return (
      <header>
        <section className="header-section">
          <h1 className="header-title">
            I am a frontend developer.
          </h1>
          <p className="header-emphasis">
            Hello, I'm Debbie. I design and code beautifully simple things.
          </p>
          <p className="header-copy">
            My social media knowledge and experience of content creation help me
            to deliver beautiful websites with JavaScript, React and
            TailwindCSS.
          </p>
          <button className="header-btn">Get in touch</button>
        </section>
        <img
          src="./images/debbie-dann.png"
          className="header-img"
          alt="debbie dann profile shot"
        />
      </header>
    );
}
 
export default Header;