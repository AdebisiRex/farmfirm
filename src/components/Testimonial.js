import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import Testimony from "./Testimony";

const Testimonial = () => {
  const [testimonials, settestimonials] = useState([]);
  const [displayImage, setdisplayImage] = useState([]);
  const [spin, setspin] = useState(true);

  useEffect(() => {
    const getJSON = axios.get("https://jsonplaceholder.typicode.com/users");
    const getImage = axios.get("https://api.github.com/users");

    axios.all([getJSON, getImage]).then(
      axios.spread((...responses) => {
        setspin(false);
        settestimonials(responses[0].data);
        setdisplayImage(responses[1].data);
        // console.log({gottenJSON, gottenImage});
      })
    );
  }, []);

  return (
    <>
      <div className="bg-light py-5">
        <div className="position-relative">
          <div className="py-5 px-3">
            <div className="col-7 text-center mx-auto">
              <h2 className="fw-bold my-3 lh-3 ">Our Users say...</h2>
              <p className="text-secondary">
                Here's a few of the glowing comment's our users have thought to
                melt our hearts with.
              </p>
            </div>
          </div>
        </div>
        <div className=" ">
          <div className="container">
            <div className="row g-2">
              {spin ? (
                <div className="d-flex justify-content-center">
                  <div class="spinner-border text-success" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                </div>
              ) : (
                testimonials.map((item, index) => (
                  <Testimony
                    key={index}
                    name={item.name}
                    email={item.email}
                    company={item.company.name}
                    comment={item.company.catchPhrase}
                    image={displayImage[item.id].avatar_url}
                  />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
