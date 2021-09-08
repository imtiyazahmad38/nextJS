export default function TagsPanel() {
    return (
        <div id="tags-panel" className="side-panel">
        <button type="button" className="btn-icon-fade side-panel__close">
          <i className="tags-icon"></i>
        </button>
        <div className="side-panel__title">
          <h3>Tags</h3>
        </div>

        <div className="side-panel__content">
          <div className="custom-tabs">
            <div className="custom-tabs__links">
              <a href="#add-tags" className="active">Add Tags</a>
              <a href="#tags-library">Tags Library</a>
            </div>
            <div className="custom-tabs__content mt-30">
              <div id="add-tags">
                <div className="d-flex align-items-center">
                  <input
                    type="text"
                    className="custom-input flex-1 mr-10"
                    placeholder="Add Tag"
                  />
                  <button type="button" className="btn-icon-green">
                    <i className="plus-icon"></i>
                  </button>
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
              <div id="tags-library">
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
    )
}