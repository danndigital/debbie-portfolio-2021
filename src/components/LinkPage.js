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
          url: "https://www.debbiedanndigital.com/",
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
          <picture>
            <source 
                media="(min-width: 650px)"
                srcSet="./images/debbie-dann-compressed.png" />
            <source 
                media="(max-width: 650px)"
                srcSet="./images/debbie-dann-compressed.webp" />
            <img src="./images/debbie-dann-compressed.png" 
            alt="debbie dann profile" 
            className="linkpage-image header-img"
            />
          </picture>
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