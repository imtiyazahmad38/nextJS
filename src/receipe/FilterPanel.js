export default function FilterPanel() {
  return (
    <div id="filters-panel" className="side-panel">
      <button type="button" className="btn-icon-fade side-panel__close">
        <i className="filter-icon"></i>
      </button>
      <div className="side-panel__title">
        <h3>Filters</h3>
      </div>

      <div className="side-panel__content">
        <div className="custom-tabs">
          <div className="custom-tabs__links">
            <a href="#meta-tags" className="active">
              Meta Tags
            </a>
            <a href="#admin-tags">Admin Tags</a>
          </div>
          <div className="custom-tabs__content mt-30">
            <div id="meta-tags">
              <div className="search-input">
                <i className="search-icon"></i>
                <input
                  type="text"
                  className="custom-input"
                  placeholder="Search"
                />
              </div>
              <div>
                <div className="accordion">
                  <div className="accordion__title">
                    <h5>
                      Type <small>(3)</small>
                    </h5>
                    <i className="chevron-right-icon"></i>
                  </div>
                  <div className="accordion__content">hello</div>
                </div>
                <div className="accordion">
                  <div className="accordion__title">
                    <h5>
                      Features <small>(10)</small>
                    </h5>
                    <i className="chevron-right-icon"></i>
                  </div>
                  <div className="accordion__content">hello</div>
                </div>
                <div className="accordion">
                  <div className="accordion__title">
                    <h5>
                      Date <small>(6)</small>
                    </h5>
                    <i className="chevron-right-icon"></i>
                  </div>
                  <div className="accordion__content">hello</div>
                </div>
                <div className="accordion">
                  <div className="accordion__title">
                    <h5>
                      Pricing <small>(24)</small>
                    </h5>
                    <i className="chevron-right-icon"></i>
                  </div>
                  <div className="accordion__content">hello</div>
                </div>
                <div className="accordion">
                  <div className="accordion__title">
                    <h5>
                      Time <small>(6)</small>
                    </h5>
                    <i className="chevron-right-icon"></i>
                  </div>
                  <div className="accordion__content">hello</div>
                </div>
                <div className="accordion">
                  <div className="accordion__title">
                    <h5>
                      Product <small>(5)</small>
                    </h5>
                    <i className="chevron-right-icon"></i>
                  </div>
                  <div className="accordion__content">
                    <label htmlFor="rating" className="custom-checkbox">
                      <input type="checkbox" id="rating" />
                      <div className="content">Rating</div>
                    </label>
                    <label htmlFor="brand" className="custom-checkbox">
                      <input type="checkbox" id="brand" />
                      <div className="content">Brand</div>
                    </label>
                    <label htmlFor="shipping" className="custom-checkbox">
                      <input type="checkbox" id="shipping" />
                      <div className="content">Shipping</div>
                    </label>
                    <label htmlFor="size" className="custom-checkbox">
                      <input type="checkbox" id="size" />
                      <div className="content">Size</div>
                    </label>
                    <label htmlFor="weight" className="custom-checkbox">
                      <input type="checkbox" id="weight" />
                      <div className="content">Weight</div>
                    </label>
                  </div>
                </div>
                <div className="accordion">
                  <div className="accordion__title">
                    <h5>
                      Color <small>(9)</small>
                    </h5>
                    <i className="chevron-right-icon"></i>
                  </div>
                  <div className="accordion__content">hello</div>
                </div>
                <div className="accordion">
                  <div className="accordion__title">
                    <h5>
                      Coupon <small>(6)</small>
                    </h5>
                    <i className="chevron-right-icon"></i>
                  </div>
                  <div className="accordion__content">hello</div>
                </div>
              </div>
            </div>
            <div id="admin-tags">
              <div className="search-input">
                <i className="search-icon"></i>
                <input
                  type="text"
                  className="custom-input"
                  placeholder="Search"
                />
              </div>
              <div className="chips mt-30">
                <div className="chip">
                  <span className="chip__title">Special</span>
                  <button type="button" className="chip__remove">
                    <i className="times-icon"></i>
                  </button>
                </div>
                <div className="chip">
                  <span className="chip__title">Closeout</span>
                  <button type="button" className="chip__remove">
                    <i className="times-icon"></i>
                  </button>
                </div>
                <div className="chip">
                  <span className="chip__title">Featured</span>
                  <button type="button" className="chip__remove">
                    <i className="times-icon"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
