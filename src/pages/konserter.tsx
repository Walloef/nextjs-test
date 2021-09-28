import Layout from "../components/Layout";
import fs from "fs";
import matter from "gray-matter";
import yaml from "js-yaml";
import path from "path";
import Spacer from "../components/Spacer";

type Konsert = {
  datum: string;
  artist: string;
};

type Props = {
  frontMatter: {
    konserter: Konsert[];
    innan?: string;
    efter?: string;
  };
};

export default function Index(props: Props) {
  const { innan, konserter, efter } = props.frontMatter;
  return (
    <Layout>
      <div className="container">
        <Spacer />
        <h1>Konserter</h1>
        <Spacer />
        {innan && (
          <>
            <b className="info">{innan}</b> <Spacer />
          </>
        )}
        <div>
          {Array.isArray(konserter) &&
            konserter.map((konsert, index) => {
              return (
                <div className="konsert" key={index}>
                  <div className="konsert-container">
                    <p className="artist">{konsert.artist}</p>
                    <p className="date">{konsert.datum}</p>
                  </div>
                </div>
              );
            })}
        </div>
        {efter && (
          <>
            <Spacer />
            <b className="info">{efter}</b> <Spacer last />
          </>
        )}
      </div>
      <style jsx>{`
        h1 {
          margin-top: 130px;
        }
        @media (max-width: 769px) {
          h1 {
            margin-top: 100px;
          }
        }
        .container {
          max-width: 770px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }
        .konsert-container {
          display: flex;
          padding: 0 1.5rem;
        }
        .konsert:nth-child(odd) {
          background: var(--gmc-brand-light);
          box-shadow: var(--shadow);
        }
        .artist {
          flex-grow: 1;
        }
        .date {
          width: 130px;
          text-align: right;
        }
        .info {
          display: block;
          text-align: center;
        }

        @media (max-width: 769px) {
          .konsert-container {
            flex-direction: column;
          }
          .date {
            width: 100%;
            text-align: left;
            margin-top: 0;
          }
        }
      `}</style>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const postsDirectory = path.join(process.cwd(), "content/konserter");
  const fullPath = path.join(postsDirectory, "index.mdx");
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data } = matter(fileContents, {
    engines: {
      yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) as object,
    },
  });

  return { props: { frontMatter: data } };
};
