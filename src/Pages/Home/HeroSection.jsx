const HeroSection = () => {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Akrom</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>
            <br />
            Developer
          </h1>
          <p className="hero--section--description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, nam.
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            labore aliquam obcaecati distinctio qui.
          </p>
        </div>
        <button className="btn btn-primary">Get in Touch</button>
      </div>
      <div>
        <img src="./img/hero_img.png" alt="hero Section" />
      </div>
    </section>
  );
};

export default HeroSection;
