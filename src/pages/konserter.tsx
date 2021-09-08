import Layout from "../components/Layout";
import fs from "fs";
import matter from "gray-matter";
import yaml from "js-yaml";
import path from "path";

import renderToString from "next-mdx-remote/render-to-string";

type Konsert = {
  datum: string;
  artist: string;
};

type Props = {
  konserter: Konsert[];
};

export default function Index({ konserter }: Props) {
  return (
    <Layout>
      <h1>Konserter</h1>
      {konserter.map((konsert, index) => {
        console.log(konsert);
        return (
          <div key={index}>
            <p>{konsert.artist}</p>
            <p>{konsert.datum}</p>
          </div>
        );
      })}

      {/* <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: src }} /> */}
      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 1 1 auto;
          padding: 0 1.5rem;
        }
        h1 {
          font-size: 2.5rem;
          margin: 0;
          font-weight: 500;
        }
        h2 {
          font-size: 1.75rem;
          font-weight: 400;
          line-height: 1.25;
        }
        .fancy {
          color: #15847d;
        }
        .handle {
          display: inline-block;
          margin-top: 0.275em;
          color: #9b9b9b;
          letter-spacing: 0.05em;
        }

        @media (min-width: 769px) {
          h1 {
            font-size: 3rem;
          }
          h2 {
            font-size: 2.25rem;
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
  const { content, data } = matter(fileContents, {
    engines: {
      yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) as object,
    },
  });

  const { scope } = await renderToString(content, {
    scope: data,
  });
  console.log("scope", scope);
  return {
    props: {
      konserter: scope.konserter,
      // src: renderedOutput,
    },
  };
};
