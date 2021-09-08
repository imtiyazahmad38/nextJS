export default function CollectionPanel() {
    return (
        <div id="collections-panel" className="side-panel side-panel--floated">
        <button
          type="button"
          className="btn-icon-fade side-panel__toggle show-panel"
          data-target="#collections-panel"
        >
          <i className="layer-plus-icon"></i>
        </button>
        <div className="side-panel__title">
          <h3>Collections</h3>
        </div>

        <div className="side-panel__content">
          <div className="collections">
            <div className="collections__row d-flex align-items-center">
              <h5 className="flex-1">Collection Title</h5>
              <span>45</span>
              <div className="dropdown ml-10">
                <button type="button" className="btn-icon-fade dropdown__toggle">
                  <i className="ellipsis-v-icon"></i>
                </button>
                <div className="dropdown__menu">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="pen-icon"></i>
                        Edit
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-red">
                        <i className="trash-icon"></i>
                        Delete
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="collections__row d-flex align-items-center">
              <h5 className="flex-1">Collection Title</h5>
              <span>45</span>
              <div className="dropdown ml-10">
                <button type="button" className="btn-icon-fade dropdown__toggle">
                  <i className="ellipsis-v-icon"></i>
                </button>
                <div className="dropdown__menu">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="pen-icon"></i>
                        Edit
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-red">
                        <i className="trash-icon"></i>
                        Delete
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="collections__row d-flex align-items-center">
              <h5 className="flex-1">Collection Title</h5>
              <span>45</span>
              <div className="dropdown ml-10">
                <button type="button" className="btn-icon-fade dropdown__toggle">
                  <i className="ellipsis-v-icon"></i>
                </button>
                <div className="dropdown__menu">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="pen-icon"></i>
                        Edit
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-red">
                        <i className="trash-icon"></i>
                        Delete
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="collections__row d-flex align-items-center">
              <h5 className="flex-1">Collection Title</h5>
              <span>45</span>
              <div className="dropdown ml-10">
                <button type="button" className="btn-icon-fade dropdown__toggle">
                  <i className="ellipsis-v-icon"></i>
                </button>
                <div className="dropdown__menu">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="pen-icon"></i>
                        Edit
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-red">
                        <i className="trash-icon"></i>
                        Delete
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="collections__row d-flex align-items-center">
              <h5 className="flex-1">Collection Title</h5>
              <span>45</span>
              <div className="dropdown ml-10">
                <button type="button" className="btn-icon-fade dropdown__toggle">
                  <i className="ellipsis-v-icon"></i>
                </button>
                <div className="dropdown__menu">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="pen-icon"></i>
                        Edit
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-red">
                        <i className="trash-icon"></i>
                        Delete
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="collections__row d-flex align-items-center">
              <h5 className="flex-1">Collection Title</h5>
              <span>45</span>
              <div className="dropdown ml-10">
                <button type="button" className="btn-icon-fade dropdown__toggle">
                  <i className="ellipsis-v-icon"></i>
                </button>
                <div className="dropdown__menu">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="pen-icon"></i>
                        Edit
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-red">
                        <i className="trash-icon"></i>
                        Delete
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}