import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Carousel from "react-bootstrap/Carousel";
import menu1 from "../images/menu-1.jpg";
import menu2 from "../images/menu-2.jpg";
import menu3 from "../images/menu-3.jpg";

export default function Home() {
  const [foodCat, setFoodCat] = useState([]);
  const [fooditem, setFoodItem] = useState([]);
  const [search, setSearch] = useState("");

  const loadData = async () => {
    let response = await fetch("http://localhost:5001/api/fooddata", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }); //api hits => all data fetch
    response = await response.json(); //json format data
    setFoodItem(response[0]);
    setFoodCat(response[1]);
  };

  useEffect(() => {
    loadData(); //call
  }, []);

  return (
    <div>

      <div>
        <Navbar />
      </div>

      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img
            className="d-block w-100 custom-carousel-image"
            src={menu1}
            alt="First slide"
          />
          <Carousel.Caption>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 custom-carousel-image"
            src={menu2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 custom-carousel-image"
            src={menu3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="container">
        {foodCat != [] ? (
          foodCat.map((data) => {
            return (
              <div className="row mb-3">
                <div key={data._id} className="fs-3 m-3">
                  {data.CategoryName}
                </div>
                <hr />
                {fooditem != [] ? (
                  fooditem
                    .filter(
                      (item) =>
                        item.CategoryName === data.CategoryName &&
                        item.name.toLowerCase().includes(search.toLowerCase())
                    )
                    .map((filterItem) => {
                      return (
                        <div
                          className="col-12 col-md-6 col-lg-3"
                          key={filterItem._id}
                          style={{ marginRight: "5%" }}
                        >
                          <Card
                            // foodName={filterItem.name}
                            options={filterItem.options[0]}
                            // imgsrc={filterItem.img}
                            // desc={filterItem.description}
                            foodItem={filterItem}
                          />
                        </div>
                      );
                    })
                ) : (
                  <div>no such data</div>
                )}
              </div>
            );
          })
        ) : (
          <div>"""""""""""""""""""""""""""</div>
        )}
      </div>
      
      <div>
        <Footer />
      </div>
    </div>
  );
}
