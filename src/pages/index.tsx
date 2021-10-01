import fs from "fs";
import matter from "gray-matter";
import yaml from "js-yaml";
import path from "path";
import marked from "marked";
import Layout from "../components/Layout";

export default function Index({ frontMatter }: { [key: string]: any }) {
  return (
    <>
      <Layout>
        <div className="image-wrapper">
          <img
            className="hero"
            src="/images/hero.jpg"
            alt="Instrument på ett bord i resturangen"
          />
          <div className="slogan">
            <h1>Glenn Miller Café</h1>
            <p>Stockholms största och minsta jazzclub</p>
          </div>
        </div>

        <div className="container">
          <div className="quick-info">
            <div className="quick-info-wrapper">
              <div
                className="mds"
                dangerouslySetInnerHTML={{
                  __html: marked(frontMatter.snabb_info_one),
                }}
              />
            </div>
            <div className="quick-info-wrapper">
              <div
                className="mds"
                dangerouslySetInnerHTML={{
                  __html: marked(frontMatter.snabb_info_two),
                }}
              />
            </div>
          </div>
        </div>
        <div className="book-table">
          <h2>Boka Bord</h2>
          <div>
            <iframe
              src="https://module.lafourchette.com/sv_SE/module/596453-e5ce2"
              style={{
                width: "100%",
                minHeight: 800,
                border: "none",
              }}
            ></iframe>
          </div>
        </div>
        <div style={{ padding: 24 }}>
          <div className="iframe__wrapper" id="bookTable">
            <div
              className="mds"
              dangerouslySetInnerHTML={{ __html: marked(frontMatter.info) }}
            />
          </div>
        </div>
        <div className="gm-text">
          <div
            className="mds"
            dangerouslySetInnerHTML={{ __html: marked(frontMatter.sale) }}
          />
          <p className="gm-text" style={{ textAlign: "center" }}>
            Gilla oss på
            <a
              href="https://sv-se.facebook.com/glennmillercafe/"
              style={{
                color: "white",
                textDecoration: "underline",
                margin: "0 5px",
              }}
            >
              Facebook
            </a>
            och
            <a
              href="https://www.instagram.com/cafeglennmiller/"
              style={{
                color: "white",
                textDecoration: "underline",
                margin: "0 5px",
              }}
            >
              Instagram
            </a>
          </p>
          <div className="index-text__wrapper">
            <div>
              <p className="list-info--heading">Bra att veta</p>
              <ul className="list-info">
                <li>
                  <div
                    className="mds"
                    dangerouslySetInnerHTML={{
                      __html: marked(frontMatter.good_to_know_one),
                    }}
                  />
                </li>
                <li>
                  <div
                    className="mds"
                    dangerouslySetInnerHTML={{
                      __html: marked(frontMatter.good_to_know_two),
                    }}
                  />
                </li>
                <li>
                  <div
                    className="mds"
                    dangerouslySetInnerHTML={{
                      __html: marked(frontMatter.good_to_know_three),
                    }}
                  />
                </li>
              </ul>
              <p style={{ textAlign: "center" }}>
                Välkommen till Glenn Miller Café, vi ser fram emot att träffa
                dig!
              </p>
            </div>
            <img src="/images/klarinett.jpg" alt="klarinett"></img>
          </div>
        </div>

        <style jsx>{`
          .gm-text {
            width: 800px;
            max-width: calc(100% - 32px);
            margin: 0 auto 35px;
          }
          .iframe__wrapper {
            display: flex;
            flex-wrap: wrap;
            width: 800px;
            margin: 50px auto;
            max-width: calc(100% - 24px);
            justify-content: space-between;
            align-items: center;
            background: #232143;
            box-shadow: 0 0 10px rgb(0 0 0 / 40%);
            padding: 12px;
            border: 1px solid #302b55;
          }

          .iframe__wrapper ul li {
            padding: 6px 0;
          }
          .iframe__wrapper img {
            width: calc(100% - 340px);
          }

          @media (min-width: 856px) {
            .iframe__wrapper img {
              display: none;
            }
          }
          .iframe__title {
            font-weight: 700;
            margin-bottom: 12px;
            font-size: 1.2rem;
          }
          .fb {
            color: white;
            text-decoration: underline;
          }
          .quick-info-wrapper {
            width: 360px;
            margin: 24px 12px 0;
          }
          .book-table {
            display: flex;
            flex-direction: column;
            align-items: center;
            border: none !important;
          }
          .booking-wrapper {
            display: flex;
            flex-direction: column;
          }
          .book-table {
            color: white;
            border-bottom: 1px solid white;
          }
          .small {
            color: hsla(0, 0%, 100%, 0.8);
            font-size: 12px;
          }

          .quick-info {
            flex-direction: row;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            text-align: center;
            max-width: 800px;
            background: #232143;
            box-shadow: 0 0 10px rgb(0 0 0 / 40%);
            margin: 0 auto 50px;
            color: #fff;
            padding: 12px;
            border: 1px solid #302b55;
          }

          h1 {
            font-size: 30px;
          }
          @media (min-width: 500px) {
            h1 {
              font-size: 6vw;
            }
          }
          .image-wrapper {
            position: relative;
            top: 0px;
            height: 45vh;
            min-height: 640px;
            margin-bottom: 50px;
          }
          @media (max-width: 850px) {
            .image-wrapper {
              height: 65vh;
            }
          }
          img {
            display: block;
          }
          .hero {
            left: 0;
            transform: none;
            width: 80%;

            object-fit: cover;
            height: 94%;
            position: absolute;
          }
          @media (max-width: 850px) {
            .hero {
              width: 100%;
              // height: 94%;
              left: 50%;
              transform: translateX(-50%);
            }
          }
          .slogan {
            position: absolute;
            bottom: 0;
            right: 0;
            width: 70%;
            padding: 30px 30px 8px;
            background: var(--gmc-brand);
            text-align: center;
          }
          @media (max-width: 850px) {
            .slogan {
              right: auto;
              left: 50%;
              transform: translateX(-50%);
            }
          }
          .container {
            display: flex;
            align-items: center;
            justify-content: center;
            flex: 1 1 auto;
            padding: 0 1.5rem;
          }

          .iframe-image {
            display: flex;
            justify-content: space-between;
            width: 100%;
          }
          .iframe-image img {
            display: block;
          }
          @media (max-width: 856px) {
            .iframe-image {
              justify-content: center;
              width: 100%;
            }
            .iframe-image img {
              display: none;
            }
          }
          .list-info--heading {
            font-size: 1.5em;
            font-weight: 700;
            margin: 12px 0 0 12px;
            padding-right: 30px;
          }
          @media screen and (max-width: 830px) .index-text__wrapper p {
            order: 2;
            padding-left: 30px;
            max-width: 600px;
            width: 90%;
            margin: 0 auto;
            text-align: center;
          }
          .list-info {
            padding: 12px;
          }
          .list-info li {
            background: #232143;
            box-shadow: 0 0 10px rgb(0 0 0 / 40%);
            margin: 0 auto 25px;
            padding: 12px;
            border: 1px solid #302b55;
          }
          .index-text__wrapper {
            display: flex;
            color: #fff;
            max-width: 800px;
            align-items: center;
            margin: 0 auto 40px;
          }
          .index-text__wrapper img {
            box-shadow: 0 0 10px rgb(0 0 0 / 40%);
            max-width: 400px;
            width: 100%;
          }

          @media screen and (max-width: 830px) {
            .index-text__wrapper {
              flex-wrap: wrap;
              justify-content: center;
            }
          }
        `}</style>
      </Layout>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.hitta.se/kartan/partner?mc=59.336751,18.070739"
      >
        <img
          style={{
            display: "block",
            margin: "0 auto",
            maxWidth: "100%",
          }}
          alt="map"
          src="https://api.hitta.se/image/v2/0_2x/17?width=980&amp;height=500&amp;zoom.to=location&amp;location=%7B%22id%22%3A%221010178402%22%7D?markers=%7B%22marker%22:1%7D"
        />
      </a>
    </>
  );
}

export const getStaticProps = async () => {
  const postsDirectory = path.join(process.cwd(), "content/start");
  const fullPath = path.join(postsDirectory, "index.mdx");
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data } = matter(fileContents, {
    engines: {
      yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) as object,
    },
  });

  return { props: { frontMatter: data } };
};
