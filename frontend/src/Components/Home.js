import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";
const images = [
  {
    url: "https://www.planetware.com/photos-large/IND/india-top-attractions-taj-mahal.jpg",
  },
  {
    url: "https://www.planetware.com/photos-large/IND/india-top-attractions-varanasi.jpg",
  },
  {
    url: "https://globalgrasshopper.com/wp-content/uploads/2011/01/Mumbai-India-scaled.jpg",
  },
  {
    url: "https://travelogyindia.b-cdn.net/blog/wp-content/uploads/2018/11/Qutub-Minar.jpg",
  },
  {
    url: "https://static-blog.treebo.com/blog/wp-content/uploads/2018/06/Punjab.jpg",
  },
  {
    url: "https://www.fabhotels.com/blog/wp-content/uploads/2019/09/Chennai-1.jpg",
  },
  {
    url: "https://travelogyindia.b-cdn.net/blog/wp-content/uploads/2014/02/delhi.jpg",
  },
];

const Home = () => {
  return (
    <div
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1600303881706-b8a373dc73c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTh8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80")`,
        // filter: "blur(8px)",
        //       WebkitFilter: " blur(8px)",
        // zIndex:"0"
        paddingTop: "30px",
        height: "100vh",
      }}
    >
      <center>
        <h1 style={{color:"whitesmoke"}}>Welcome to incrediable India</h1>
      </center>
      <center>
        <SimpleImageSlider
          width={896}
          height={504}
          images={images}
          showBullets={true}
          showNavs={true}
        />
      </center>
      <div>
        <center>
          <p style={{ color: "white" }}>
            One of the oldest civilisations in the world, India is a mosaic of
            multicultural experiences. With a rich heritage and myriad
            attractions, the country is among the most popular tourist
            destinations in the world. It covers an area of 32, 87,263 sq. km,
            extending from the snow-covered Himalayan heights to the tropical
            rain forests of the south. As the 7th largest country in the world,
            India stands apart from the rest of Asia, marked off as it is by
            mountains and the sea, which give the country a distinct
            geographical entity. Fringed by the Great Himalayas in the north, it
            stretches southwards and at the Tropic of Cancer, tapers off into
            the Indian Ocean between the Bay of Bengal on the east and the
            Arabian Sea on the west. As you travel the expanse of the country,
            you are greeted by diverse nuances of cuisines, faiths, arts,
            crafts, music, nature, lands, tribes, history and adventure sports.
            India has a mesmeric conflation of the old and the new. As the
            bustling old bazaars rub shoulders with swanky shopping malls, and
            majestic monuments accompany luxurious heritage hotels, the
            quintessential traveller can get the best of both worlds. Head to
            the mountains, enjoy a beach retreat or cruise through the golden
            Thar, India has options galore for all.
          </p>
        </center>
      </div>
    </div>
  );
};
 export default Home;