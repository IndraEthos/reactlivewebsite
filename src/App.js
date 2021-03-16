// import logo from "./logo.svg";
import "./App.scss";
import "./sass/custom.scss";

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} alt="logo" />
    //   </header>
    // </div>
    <>
      <div className="container shop-by-category">
        <div className="row">
          <div className="card-deck">
            <div className="card">
              <img
                className="card-img-top"
                src="https://images.ethoswatches.com/img/uploads/banners/1615441696shop-by-category-(mobile-desktop)@2x.jpg"
                alt="Card"
              />
              <div className="card-img-overlay d-flex flex-column justify-content-end align-items-center">
                <p className="card-title m-0">Special Offer</p>
                <a
                  href="https://www.ethoswatches.com/special-offers.html"
                  class="btn"
                  role="button"
                >
                  shop now
                </a>
              </div>
            </div>
            <div className="card">
              <img
                className="card-img-top"
                src="https://images.ethoswatches.com/img/uploads/banners/1615441775men@2x.jpg"
                alt="Card"
              />
              <div className="card-img-overlay d-flex flex-column justify-content-end align-items-center">
                <p className="card-title m-0">Watches for Men</p>
                <a
                  href="https://www.ethoswatches.com/brands/men.html"
                  class="btn"
                  role="button"
                >
                  shop now
                </a>
              </div>
            </div>
            <div className="card">
              <img
                className="card-img-top"
                src="https://images.ethoswatches.com/img/uploads/banners/1614838415women.jpg"
                alt="Card"
              />
              <div className="card-img-overlay d-flex flex-column justify-content-end align-items-center">
                <p className="card-title m-0">Watches for Women</p>
                <a
                  href="https://www.ethoswatches.com/brands/women.html"
                  class="btn"
                  role="button"
                >
                  shop now
                </a>
              </div>
            </div>
            <div className="card">
              <img
                className="card-img-top"
                src="https://images.ethoswatches.com/img/uploads/banners/1614838358accessories.jpg"
                alt="Card"
              />
              <div className="card-img-overlay d-flex flex-column justify-content-end align-items-center">
                <p className="card-title m-0">Accessories</p>
                <a
                  href="https://www.ethoswatches.com/accessories.html"
                  class="btn"
                  role="button"
                >
                  shop now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
