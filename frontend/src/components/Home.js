import React, { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import Swal from "sweetalert2";

const Home = () => {
  const [data, setData] = useState([]);
  const [loadingData, setLoadingData] = useState(false);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    setLoadingData(true);
    try {
      const response = await fetch("/cat");
      const data = await response.json();
      setData(data);
    } catch {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong! 😳"
      });
    }
    setLoadingData(false);
  };

  return (
    <React.Fragment>
      <section>
        <div className="wrapper">
          <h2 className="header__text-area">I am Humble Hungry Hunter.</h2>
        </div>
      </section>
      <section>
        <div className="Cards-body">
          {data.map(facts => {
            return (
              <div className="container" key={facts._id}>
                <div className="cards">
                  <div className="box">
                    <img
                      src="https://res.cloudinary.com/dtnhtcwwg/image/upload/v1582646196/close-up-photography-of-cat-1183434_khsqc1.jpg"
                      style={{ width: "230px", height: "200px" }}
                      alt="pics from cloudnairy"
                    />
                    <p>{facts.text}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div style={{ textAlign: "center" }}>
          {!loadingData && (
            <button
              className="button"
              data-testid="button"
              onClick={() => fetchdata()}
            >
              more facts
            </button>
          )}
          {loadingData && (
            <Loader
              type="ThreeDots"
              color="#7d408c"
              height={100}
              width={100}
              timeout={3000}
            />
          )}
        </div>
        <br></br>
        <br></br>
      </section>
    </React.Fragment>
  );
};

export default Home;
