import classes from "../styles/investment.module.css";

const Investment = () => {
  return (
    <>
      <div className="mt-5">
        <div className="bg-light px-2  pb-5">
          <div className="col-12 h-100 col-lg-9 col-md-11 mx-auto ">
            <div className="py-5 px-3">
              <div className="col-7">
                <h2 className="fw-bold my-3 lh-3 ">
                  Invest on farms without hasle
                </h2>
                <p className="text-secondary">
                  Our farms need investments, check our collection of farms, do
                  your own research and invest for calculated returns
                </p>
              </div>
            </div>

            <div className="row g-5 px-1 h-75">
              <div className="col-12 col-md-6">
                <div
                  className={
                    "card border mx-auto rounded-4 p-5 shadow h-100 " +
                    classes.invshort
                  }
                >
                  <div className="col-8 text-white">
                    <div className="mb-5">
                      <small className="mb-3 text-primary">
                        NEW FARM TODAY
                      </small>
                      <hr />
                      <h4 className="fw-bold">Short term investments</h4>
                      <p>
                        Invest in farms that will be ready for harvest in 3-18
                        months
                      </p>
                    </div>

                    <button className="btn rounded-1 btn-light text-primary px-4">
                      Browse Farm
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 ">
                <div
                  className={
                    "card p-5 border rounded-4 shadow h-100 " + classes.invlong
                  }
                >
                  <div className="col-8 text-white">
                    <div className="mb-5">
                      <small className="mb-3 text-primary">FULLY FUNDED</small>
                      <hr />
                      <h4 className="fw-bold">Long term investments</h4>
                      <p>
                        Consider farms that are long term investment programs
                      </p>
                    </div>

                    <button className="btn rounded-1 mb-1 btn-light text-primary px-4">
                      Browse Farm
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Investment;
