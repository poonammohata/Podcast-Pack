import React, { useState } from "react";
import "./styles.css";
var PodcastCollection = {
  lifeStyle: [
    {
      name: "On Purpose with Jay Shetty",
      image: "https://i.scdn.co/image/3cbb74460abfb051000af027b2d0a529fe031104",
      by: "Jay Shetty and Kast Media",
      link: "https://open.spotify.com/show/5EqqB52m2bsr4k1Ii7sStc"
    },
    {
      name: "The Sadhguru Podcast",
      image:
        "https://is1-ssl.mzstatic.com/image/thumb/Podcasts123/v4/7b/73/e6/7b73e6bc-fcc8-6925-cb11-f95d304ab376/mza_3137485831404855728.jpg/1200x1200bb.jpg",
      by: "The Sadhguru Podcast",
      link: "https://open.spotify.com/show/1o3zif4YaEzELBDjzvZqAw"
    },
    {
      name: "7 Good Minutes ",
      image:
        "https://pbcdn1.podbean.com/imglogo/dir-logo/546251/546251_300x300.jpg",
      by: "Clyde Lee Dennis",
      link: "https://open.spotify.com/show/13UddBWwAxzskUeKIDWuzj"
    }
  ],
  general: [
    {
      name: "The Ranveer Show",
      image:
        "https://cdn-images-1.listennotes.com/podcasts/the-ranveer-show-beerbiceps-aka-ranveer-u8rzBEKJvoH-BdJq0E5M7mO.1400x1400.jpg",
      by: "BeerBiceps aka Ranveer Allahbadia",
      link: "https://open.spotify.com/show/6ZcvVBPQ2ToLXEWVbaw59P"
    },
    {
      name: "Sandeep Maheshwari",
      image: "https://content.khabri.app/2019/9/images/1-1569547772674.jpg",
      by: "Sandeep Maheshwari",
      link:
        "https://open.spotify.com/show/6kyTKRWMu2LCF9XtpBxArK?si=kI6GEyybQy2QStrQpni2gg"
    }
  ],
  business: [
    {
      name: "Moneycontrol Podcast",
      image: "https://images.theabcdn.com/i/35219526/300x300/c",
      by: "moneycontrol",
      link: "https://open.spotify.com/show/6mcVOxYVPF4BXPRKGz0Cna"
    },
    {
      name: "The GaryVee Audio Experience",
      image:
        "https://stitcher-classic.imgix.net/feedimagesplain600/54844.jpg?w=600&h=600",
      by: "Gary Vaynerchuk",
      link: "https://open.spotify.com/show/6SZVsPIxPfVs6aavqM1peY"
    },
    {
      name: "5 Minute Business Book Summaries",
      image:
        "https://is4-ssl.mzstatic.com/image/thumb/Music113/v4/34/4d/7b/344d7b65-9f9a-7267-a0a5-ae0ceb4c4fc5/source/600x600bb.jpg",
      by: "Book Summary Club",
      link: "https://open.spotify.com/show/3i15NGJ4X8XY3zsDYYDw3c"
    }
  ]
};
var listofGenre = Object.keys(PodcastCollection);

export default function App() {
  var [PodcastGenre, setGenre] = useState("lifeStyle");

  function onClickHandler(PodcastGenre) {
    setGenre(PodcastGenre);
  }

  return (
    <div className="App">
      <h1>Podcast Pack</h1>
      <p>These are my favourite Podcast.Click a genre to explore them</p>
      <div>
        {listofGenre.map(function (genre) {
          return (
            <button
              className="genre-button"
              onClick={() => onClickHandler(genre)}
            >
              {genre}
            </button>
          );
        })}
      </div>
      <hr className="hr-line" />
      <div>
        <ul style={{ listStyle: "none" }}>
          {PodcastCollection[PodcastGenre].map(function (list) {
            return (
              <li key={list.name}>
                <div className="genre-list">
                  <img className="image" src={list.image} alt="ranveer show" />
                  <h2 className="podcast-heading">{list.name}</h2>
                  <small className="podcast-by">{list.by}</small>
                  <a className="podcast-link" href={list.link}>
                    <button className="podcast-button">
                      click to explore it
                    </button>
                  </a>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
