import { useEffect } from "react"

const LinkPage = () => {

    useEffect(() => {
        document.body.classList.add("no-background");
        return () => {
          document.body.classList.remove("no-background");
        };
      }, []);

    const links = [
        {
          url: "https://dann.digital/",
          copy: "Check out my portfolio",
        },
        {
          url: "https://github.com/hellodeborahuk",
          copy: "Find my work on GitHub",
        },
        {
            url: "https://www.linkedin.com/in/debbiedann/",
            copy: "Connect with me on LinkedIn",
          },
          {
            url: "https://twitter.com/debbie_digital",
            copy: "Connect with me on Twitter",
          },
        {
            url: "https://debbiedanndigital.hashnode.dev/",
            copy: "Read my blog on Hashnode",
          },
      ];

    return ( 
        <section className="linkpage-section">
          <img
            src="./images/debbie-dann-hero-compressed.png"
            className="linkpage-image header-img"
            alt="debbie dann profile shot"
          />
            {links.map(function(links, index) {
        return (
          <a
            key={index}
            href={links.url}
          >
            {links.copy}
          </a>
        );
      })}
        </section>
        );
}
 
export default LinkPage;