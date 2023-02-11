import React from "react";

export const Award = ({ mobile = false }: { mobile?: boolean }) => {
  return (
    <div className={mobile ? "award-mobile" : "award"}>
      <link href="https://awards.infcdn.net/r_rcm.css" rel="stylesheet" />
      <div
        id="r-rcm"
        style={{
          display: "block",
          right: "-50%",
          position: "relative",
          transform: "translateX(-50%)",
          paddingBottom: 13,
          marginBottom: "24px !important",
        }}
        data-attr="29"
        className=" "
        onClick={() =>
          "if(event.target.nodeName.toLowerCase() != 'a') {window.open(this.querySelector('.rest-white_center').href);return 0;}"
        }
      >
        <a
          href="https://restaurantguru.com/Glenn-Miller-Cafe-Stockholm"
          className="r-rcm_r-link"
          target="_blank"
        >
          Glenn Miller Café
        </a>
        <div className="r-rcm_year">2023</div>
        <div className="r-rcm_bottom ">
          <span className="r-rcm_str1 ">Recommended</span>
        </div>
        <div className="r-rcm_heading">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="144px"
            height="144px"
            viewBox="0 0 144 144"
          >
            <defs>
              <path id="r-rcm-arc" d="M 12 72 a 60 60 0 0 0 120 0"></path>
            </defs>
            <text
              className="r-rcm_heading__bottom "
              fill="#fff"
              textAnchor="middle"
            >
              <textPath startOffset="50%" xlinkHref="#r-rcm-arc">
                <a
                  href="https://restaurantguru.com/"
                  className="r-rcm_heading__link"
                >
                  Restaurant Guru
                </a>
              </textPath>
            </text>
          </svg>
        </div>
      </div>
      <style jsx>{`
        .award {
          display: block;
          width: 20vw;
          min-width: 150px;
          max-width: 245px;
          position: absolute;
          right: -11px;
          top: 0;
          transform: translateY(-100%);
        }
        @media (max-width: 850px) {
          .award {
            display: none;
          }
        }
        .award-mobile {
          display: none;
        }
        @media (max-width: 850px) {
          .award-mobile {
            display: block;
          }
        }
      `}</style>
    </div>
  );
};
