import Layout from "../components/Layout";
import fs from "fs";
import matter from "gray-matter";
import yaml from "js-yaml";
import path from "path";

type Menu = {
  dish: string;
  dishDescription?: string;
  price: string;
};

type Props = {
  menu: {
    dishes: Menu[];
    rubrik: string;
    slug: string;
  }[];
};

export default function Index({ menu }: Props) {
  return (
    <Layout>
      <h1>meny</h1>
      {menu.map((m) => {
        return m.rubrik && m.dishes && m.dishes.length > 0 ? (
          <div key={m.slug}>
            <h2>{m.rubrik}</h2>
            <ul>
              {m.dishes.map((dish, index) => (
                <li key={index}>
                  <div>
                    <b>{dish.dish}</b>
                    {dish.dishDescription && <p>{dish.dishDescription}</p>}
                    <p>{dish.price}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ) : null;
      })}
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

const getYamalAsJson = (path) => {
  return matter(fs.readFileSync(path, "utf8"), {
    engines: {
      yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) as object,
    },
  });
};

export const getStaticProps = async () => {
  const postsDirectory = path.join(process.cwd(), "content/meny");
  const menyPages = ["predrink", "starters", "mains", "desserts"];
  const content = {};
  const menu = menyPages.map((page) => {
    const uri = path.join(postsDirectory, `${page}.mdx`);
    const { data } = getYamalAsJson(uri);
    return (content[page] = data);
  });

  return {
    props: {
      menu,
    },
  };
};
