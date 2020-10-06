import React from "react";
import Card from "./card";

const cardListData = [
  {
    username: "@nathanf",
    id: 1,
    followers: 1987,
    todayFollowers: 12,
    icon: "./images/icon-facebook.svg",
    name: "facebook",
  },
  {
    username: "@nathanfa",
    id: 2,
    followers: 1044,
    todayFollowers: 99,
    icon: "./images/icon-twitter.svg",
    name: "twitter",
  },
  {
    username: "@nrealnathanf",
    id: 3,
    followers: "11k",
    todayFollowers: 1099,
    icon: "./images/icon-instagram.svg",
    name: "instagram",
  },
  {
    username: "@Nathan F.",
    id: 4,
    followers: 8239,
    todayFollowers: 144,
    icon: "./images/icon-youtube.svg",
    name: "yotube",
  },
];

function TopCardList() {
  return (
    <section className="top-cards">
      <div className="wrapper">
        <div className="grid">
          {cardListData.map((cardData) => (
            <Card key={cardData.id} {...cardData} />
          ))}

          {/* <article className="card twitter">
            <p className="card-title">
              <img src="./images/icon-twitter.svg" alt="" />
              @nathanf
            </p>
            <p className="card-followers">
              <span className="card-followers-number">1044</span>
              <span className="card-followers-title">Followers</span>
            </p>
            <p className="card-today">
              <img src="./images/icon-up.svg" alt="" />
              99 Today
            </p>
          </article>
          <article className="card instagram">
            <p className="card-title">
              <img src="./images/icon-instagram.svg" alt="" />
              @nrealnathanf
            </p>
            <p className="card-followers">
              <span className="card-followers-number">11k</span>
              <span className="card-followers-title">Followers</span>
            </p>
            <p className="card-today">
              <img src="./images/icon-up.svg" alt="" />
              1099 Today
            </p>
          </article>
          <article className="card youtube"> 
            <p className="card-title">
              <img src="./images/icon-youtube.svg" alt="" />
              Nathan F.
            </p>
            <p className="card-followers">
              <span className="card-followers-number">8239</span>
              <span className="card-followers-title">Followers</span>
            </p>
            <p className="card-today">
              <img src="./images/icon-up.svg" alt="" />
              144 Today
            </p>
          </article> */}
        </div>
      </div>
    </section>
  );
}

export default TopCardList;
