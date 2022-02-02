const About = () => {
  return (
    <section id="about-section" className="about">
     <div className="about-img-container"> <img
        src="../images/debbie-dann-dark.jpg"
        alt="debbie dann"
        className="about-img"
      /></div>
      <div className="about-me">
        <h2>Who am I?</h2>

        <p>
          I am a self-taught frontend developer in the UK. I'm also a yoga
          teacher and bake pretty tasty cakes (or at least that’s what people
          tell me).
        </p>

        <p>
          My background is in digital marketing for large businesses. My social
          media knowledge and experience of content creation help me to deliver
          beautiful websites with JavaScript, React and TailwindCSS.
        </p>
      </div>
    </section>
  );
};

export default About;
