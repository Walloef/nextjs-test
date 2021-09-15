import Image from 'next/image';
import Layout from '../components/Layout';

export default function Index() {
  return (
    <Layout>
      <div className="image-wrapper">
        <img
          className="header"
          src="/images/hero.jpg"
          alt="Instrument på ett bord i resturangen"
        />
        <div className="slogan">
          <h1>Glenn Miller Café</h1>
          <p>Stockholms största och minsta jazzclub</p>
        </div>
      </div>
      <div className="container">
        <div>
          <span className="handle">@nextjs-netlify-blog</span>
          <h2>A blog template with Next.js and Netlify.</h2>
        </div>
      </div>
      <style jsx>{`
        .image-wrapper {
          position: relative;
          width: 80%;
          top: -88px;
        }
        .slogan {
          position: absolute;
          bottom: 0;
          right: -83px;
          padding: 30px 30px 8px;
          background: var(--gmc-brand);
          text-align: center;
        }

        .header {
          width: 100%;
          display: block;
        }
        .container {
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 1 1 auto;
          padding: 0 1.5rem;
        }
      `}</style>
    </Layout>
  );
}
