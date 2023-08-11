import React, { useEffect } from "react";

//Imported Destination Images ========================================>
import paris from "../assets/paris.jpg";
import dubai from "../assets/dubai.jpg";
import londan from "../assets/londan.jpg";
import newyork from "../assets/newyork.jpg";

//Imported Travelers Images ========================================>
import traveler1 from "../assets/traveler1.jpg";
import traveler2 from "../assets/traveler2.jpg";
import traveler3 from "../assets/traveler3.jpg";
import traveler4 from "../assets/traveler4.jpg";

//Imported AOS ========================================>
import Aos from "aos";
import "aos/dist/aos.css";

const travelers = [
  {
    id: 1,
    destinationImage: paris,
    travelerImage: traveler1,
    travelerName: "Kiyara",
    socialLink: "@kiyara08",
  },
  {
    id: 2,
    destinationImage: dubai,
    travelerImage: traveler2,
    travelerName: "Shardul",
    socialLink: "@shardul2002",
  },
  {
    id: 3,
    destinationImage: londan,
    travelerImage: traveler3,
    travelerName: "Prathamesh",
    socialLink: "@prathamesh_8312",
  },
  {
    id: 3,
    destinationImage: newyork,
    travelerImage: traveler4,
    travelerName: "Sumit",
    socialLink: "@sumit_tiwari",
  },
];

const Travelers = () => {
  //UseEffect to set animation duration ========================================>
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="travelers container section">
      <div className="sectionContainer">
        <h2 data-aos="fade-down" data-aos-duration="2500">
          Top travelers of this month!
        </h2>

        <div className="travelersContainer grid">
          {travelers.map(
            ({
              id,
              destinationImage,
              travelerImage,
              travelerName,
              socialLink,
            }) => {
              return (
                //Single Traveler card
                <div
                  data-aos="fade-up"
                  data-aos-duration="2500"
                  key={id}
                  className="singleTraveler"
                >
                  <img src={destinationImage} className="destinationImage" />

                  <div className="travelerDetails">
                    <div className="travelerPicture">
                      <img src={travelerImage} className="travelerImage" />
                    </div>
                    <div className="travelerName">
                      <span>{travelerName}</span>
                      <p>{socialLink}</p>
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default Travelers;
