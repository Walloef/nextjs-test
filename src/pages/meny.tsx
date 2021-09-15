import Layout from '../components/Layout';
import fs from 'fs';
import matter from 'gray-matter';
import yaml from 'js-yaml';
import path from 'path';
import Spacer from '../components/Spacer';

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
      <Spacer />
      <h1>Meny</h1>
      <Spacer />
      <div className="menu-container">
        {menu.map((m, i) => {
          return m.rubrik && m.dishes && m.dishes.length > 0 ? (
            <>
              <div key={m.slug} className="menu-items">
                <h2>{m.rubrik}</h2>
                <Spacer />
                <ul>
                  {m.dishes.map((dish, index) => (
                    <li key={index}>
                      {dish.dishDescription ? (
                        <div className="dish-description">
                          <b>{dish.dish}</b>
                          <div className="content">
                            <p className="content-text">
                              {dish.dishDescription && dish.dishDescription}
                              <i>
                                <b className="price">{dish.price}</b>
                              </i>
                            </p>
                          </div>
                        </div>
                      ) : (
                        <div className="no-description">
                          <p>
                            <b>{dish.dish}</b>
                            <b className="price">{dish.price}</b>
                          </p>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              {i + 1 < menu.length && (
                <>
                  <Spacer />
                  <hr />
                </>
              )}

              <Spacer />
            </>
          ) : null;
        })}
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
        hr {
          height: 1px;
          width: 100%;
          background: var(--gmc-transparent-color);
          border: none;
        }

        .dish-description {
          margin-top: 20px;
        }
        .no-description {
          margin-bottom: 30px;
        }
        .container {
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 1 1 auto;
          padding: 0 1.5rem;
        }
        .menu-container {
          display: flex;
          flex-wrap: nowrap;
          flex-direction: column;
          max-width: 770px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }
        .menu-items {
          text-align: center;
        }
        .content {
          display: flex;
          align-items: center;
        }
        .content-text {
          width: 100%;
          margin-top: 8px;
        }
        .price {
          padding-left: 10px;
          text-align: right;
        }
      `}</style>
    </Layout>
  );
}

const getYamalAsJson = (path) => {
  return matter(fs.readFileSync(path, 'utf8'), {
    engines: {
      yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) as object,
    },
  });
};

export const getStaticProps = async () => {
  const postsDirectory = path.join(process.cwd(), 'content/meny');
  const menyPages = ['predrink', 'starters', 'mains', 'desserts'];
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
