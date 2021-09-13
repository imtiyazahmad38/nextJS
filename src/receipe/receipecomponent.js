import FilterPanel from "./FilterPanel";
import TagsPanel from "./TagsPanel";
import CollectionPanel from "./CollectionPanel";
import Link from 'next/link'

export default function Receipecomponent() {
  return (
    <>
      <CollectionPanel />
      <FilterPanel />
      <TagsPanel />
      <main className="main">
        <div className="main__top-actions mb-20">
          <button
            type="button"
            className="btn-icon-fade show-panel show-filters"
            data-target="#filters-panel"
          >
            <i className="filter-icon"></i>
          </button>
          <div className="search-input flex-1">
            <i className="search-icon"></i>
            <input type="text" className="custom-input" placeholder="Search" />
            <button type="button" className="btn-icon-fade">
              <i className="microphone-icon"></i>
            </button>
          </div>
          <div className="btn-group ml-20">
            <button type="button" className="btn-outline-green">
              <i className="chart-bar-icon"></i>
              Analytics
            </button>
            <button type="button" className="btn-outline-green">
              <i className="list-icon"></i>
              QA
            </button>
            <button type="button" className="btn-outline-green">
              <i className="plus-icon"></i>
              Add
            </button>
          </div>
        </div>
        <div className="chips">
          <div className="chip">
            <span className="chip__title">Published</span>
            <button type="button" className="chip__remove">
              <i className="times-icon"></i>
            </button>
          </div>
          <div className="chip">
            <span className="chip__title">Ingredients</span>
            <button type="button" className="chip__remove">
              <i className="times-icon"></i>
            </button>
          </div>
          <div className="chip">
            <span className="chip__title">Price > $15.00</span>
            <button type="button" className="chip__remove">
              <i className="times-icon"></i>
            </button>
          </div>
        </div>

        <div className="main__content">
          <div className="main__content__header">
            <h2>50 Results</h2>
            <div className="main__content__actions">
              <div className="sort-by">
                <span className="mr-10">Sort by</span>
                <select className="custom-input">
                  <option value="">option 1</option>
                  <option value="">option 2</option>
                  <option value="">option 3</option>
                </select>
              </div>
              <div className="v-separator mr-20 ml-20"></div>
              <div className="btn-tabs products-layout-switcher">
                <button
                  type="button"
                  className="btn-icon-fade btn-icon-small active"
                  data-type="cards"
                >
                  <i className="grip-horizontal-icon"></i>
                </button>
                <button
                  type="button"
                  className="btn-icon-fade btn-icon-small"
                  data-type="list"
                >
                  <i className="list-icon"></i>
                </button>
              </div>
              <div className="v-separator mr-20 ml-20"></div>
              <div className="btn-group">
                <button
                  type="button"
                  className="btn-icon-fade btn-icon-small show-panel"
                  data-target="#tags-panel"
                >
                  <i className="tags-icon"></i>
                </button>
                <button
                  type="button"
                  className="btn-icon-fade btn-icon-small show-panel"
                  data-target="#collections-panel"
                >
                  <i className="layer-plus-icon"></i>
                </button>
              </div>
            </div>
          </div>
          <table className="custom-table products-table hide">
            <thead>
              <tr>
                <th>Product Names</th>
                <th>Type</th>
                <th>Brand</th>
                <th>Price</th>
                <th>Sold</th>
                <th>Stock</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="d-flex align-items-center">
                    <figure className="mr-10">
                      <img src="images/product-img.jpg" alt="" />
                    </figure>
                    <Link href="/recipedetail/Almonds" >
                    Almonds
                    </Link>
                  </div>
                </td>
                <td>Ingredient</td>
                <td>Plant Milk Makers</td>
                <td>19.99</td>
                <td>2078</td>
                <td>289</td>
                <td>
                  <div className="custom-table__actions d-flex align-items-center">
                    <button
                      type="button"
                      className="btn-icon-fade btn-icon-small show-panel"
                      data-target="#tags-panel"
                    >
                      <i className="tags-icon"></i>
                    </button>
                    <button
                      type="button"
                      className="btn-icon-fade btn-icon-small show-panel"
                      data-target="#item-collections-panel"
                    >
                      <i className="layer-plus-icon"></i>
                    </button>
                    <button
                      type="button"
                      className="btn-icon-fade btn-icon-small"
                    >
                      <i className="chart-bar-icon"></i>
                    </button>
                    <label htmlFor="publish12" className="custom-switch">
                      <input type="checkbox" id="publish12" />
                      <span>&nbsp;</span>
                    </label>
                    <div className="dropdown">
                      <button
                        type="button"
                        className="btn-icon-fade btn-icon-small dropdown__toggle"
                      >
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
                            <a href="#">
                              <i className="clone-icon"></i>
                              Clone
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
                </td>
              </tr>
              <tr>
                <td>
                  <div className="d-flex align-items-center">
                    <figure className="mr-10">
                      <img src="images/product-img.jpg" alt="" />
                    </figure>
                    <Link href="/recipedetail/Almonds2" >
                    Almonds2
                    </Link>
                  </div>
                </td>
                <td>Ingredient</td>
                <td>Plant Milk Makers</td>
                <td>19.99</td>
                <td>2078</td>
                <td>289</td>
                <td>
                  <div className="custom-table__actions d-flex align-items-center">
                    <button
                      type="button"
                      className="btn-icon-fade btn-icon-small show-panel"
                      data-target="#tags-panel"
                    >
                      <i className="tags-icon"></i>
                    </button>
                    <button
                      type="button"
                      className="btn-icon-fade btn-icon-small show-panel"
                      data-target="#item-collections-panel"
                    >
                      <i className="layer-plus-icon"></i>
                    </button>
                    <button
                      type="button"
                      className="btn-icon-fade btn-icon-small"
                    >
                      <i className="chart-bar-icon"></i>
                    </button>
                    <label htmlFor="publish12" className="custom-switch">
                      <input type="checkbox" id="publish12" />
                      <span>&nbsp;</span>
                    </label>
                    <div className="dropdown">
                      <button
                        type="button"
                        className="btn-icon-fade btn-icon-small dropdown__toggle"
                      >
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
                            <a href="#">
                              <i className="clone-icon"></i>
                              Clone
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
                </td>
              </tr>
              <tr>
                <td>
                  <div className="d-flex align-items-center">
                    <figure className="mr-10">
                      <img src="images/product-img.jpg" alt="" />
                    </figure>
                    <Link href="/recipedetail/Almonds3" >
                    Almonds3
                    </Link>
                  </div>
                </td>
                <td>Ingredient</td>
                <td>Plant Milk Makers</td>
                <td>19.99</td>
                <td>2078</td>
                <td>289</td>
                <td>
                  <div className="custom-table__actions d-flex align-items-center">
                    <button
                      type="button"
                      className="btn-icon-fade btn-icon-small show-panel"
                      data-target="#tags-panel"
                    >
                      <i className="tags-icon"></i>
                    </button>
                    <button
                      type="button"
                      className="btn-icon-fade btn-icon-small show-panel"
                      data-target="#item-collections-panel"
                    >
                      <i className="layer-plus-icon"></i>
                    </button>
                    <button
                      type="button"
                      className="btn-icon-fade btn-icon-small"
                    >
                      <i className="chart-bar-icon"></i>
                    </button>
                    <label htmlFor="publish12" className="custom-switch">
                      <input type="checkbox" id="publish12" />
                      <span>&nbsp;</span>
                    </label>
                    <div className="dropdown">
                      <button
                        type="button"
                        className="btn-icon-fade btn-icon-small dropdown__toggle"
                      >
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
                            <a href="#">
                              <i className="clone-icon"></i>
                              Clone
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
                </td>
              </tr>
              <tr>
                <td>
                  <div className="d-flex align-items-center">
                    <figure className="mr-10">
                      <img src="images/product-img.jpg" alt="" />
                    </figure>
                    <Link href="/recipedetail/Almonds4" >
                    Almonds4
                    </Link>
                  </div>
                </td>
                <td>Ingredient</td>
                <td>Plant Milk Makers</td>
                <td>19.99</td>
                <td>2078</td>
                <td>289</td>
                <td>
                  <div className="custom-table__actions d-flex align-items-center">
                    <button
                      type="button"
                      className="btn-icon-fade btn-icon-small show-panel"
                      data-target="#tags-panel"
                    >
                      <i className="tags-icon"></i>
                    </button>
                    <button
                      type="button"
                      className="btn-icon-fade btn-icon-small show-panel"
                      data-target="#item-collections-panel"
                    >
                      <i className="layer-plus-icon"></i>
                    </button>
                    <button
                      type="button"
                      className="btn-icon-fade btn-icon-small"
                    >
                      <i className="chart-bar-icon"></i>
                    </button>
                    <label htmlFor="publish12" className="custom-switch">
                      <input type="checkbox" id="publish12" />
                      <span>&nbsp;</span>
                    </label>
                    <div className="dropdown">
                      <button
                        type="button"
                        className="btn-icon-fade btn-icon-small dropdown__toggle"
                      >
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
                            <a href="#">
                              <i className="clone-icon"></i>
                              Clone
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
                </td>
              </tr>
            </tbody>
          </table>
          <div className="products">
          
            <div className="product">
              <div className="product__title">
              <Link href="/recipedetail/Almonds" >
                <h4>Almonds</h4>
                </Link>
                <div className="dropdown">
                  <button
                    type="button"
                    className="btn-icon-fade btn-icon-small dropdown__toggle"
                  >
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
                        <a href="#">
                          <i className="clone-icon"></i>
                          Clone
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
              <figure className="product__img">
                <img src="images/product-img.jpg" alt="" />
              </figure>
              <div className="product__content">
                <div className="d-flex align-items-center">
                  <div className="product__tags">
                    <span className="product__tags__tag">ingredients</span>
                  </div>
                  <label htmlFor="publish2" className="custom-switch ml-auto">
                    <input type="checkbox" id="publish2" />
                    <span>&nbsp;</span>
                  </label>
                </div>
                <p>Organic whole soaked</p>
              </div>
              <div className="product__footer">
                <img src="images/company-logo.svg" alt="" />
                <div className="product__footer__actions">
                  <button
                    type="button"
                    className="btn-icon-fade btn-icon-small show-panel"
                    data-target="#tags-panel"
                  >
                    <i className="tags-icon"></i>
                  </button>
                  <button
                    type="button"
                    className="btn-icon-fade btn-icon-small show-panel"
                    data-target="#item-collections-panel"
                  >
                    <i className="layer-plus-icon"></i>
                  </button>
                  <button
                    type="button"
                    className="btn-icon-fade btn-icon-small"
                  >
                    <i className="chart-bar-icon"></i>
                  </button>
                </div>
              </div>
            </div>
            
            <div className="product">
              <div className="product__title">
              <Link href="/recipedetail/Almonds2" >
                <h4>Almonds2</h4>
                </Link>
                <div className="dropdown">
                  <button
                    type="button"
                    className="btn-icon-fade btn-icon-small dropdown__toggle"
                  >
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
                        <a href="#">
                          <i className="clone-icon"></i>
                          Clone
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
              <figure className="product__img">
                <img src="images/product-img.jpg" alt="" />
              </figure>
              <div className="product__content">
                <div className="d-flex align-items-center">
                  <div className="product__tags">
                    <span className="product__tags__tag">ingredients</span>
                  </div>
                  <label htmlFor="publish2" className="custom-switch ml-auto">
                    <input type="checkbox" id="publish2" />
                    <span>&nbsp;</span>
                  </label>
                </div>
                <p>Organic whole soaked</p>
              </div>
              <div className="product__footer">
                <img src="images/company-logo.svg" alt="" />
                <div className="product__footer__actions">
                  <button
                    type="button"
                    className="btn-icon-fade btn-icon-small show-panel"
                    data-target="#tags-panel"
                  >
                    {" "}
                    <i className="tags-icon"></i>
                  </button>
                  <button
                    type="button"
                    className="btn-icon-fade btn-icon-small show-panel"
                    data-target="#item-collections-panel"
                  >
                    <i className="layer-plus-icon"></i>
                  </button>
                  <button
                    type="button"
                    className="btn-icon-fade btn-icon-small"
                  >
                    <i className="chart-bar-icon"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="product">
              <div className="product__title">
              <Link href="/recipedetail/Almonds3" >
                <h4>Almonds3</h4>
                </Link>
                <div className="dropdown">
                  <button
                    type="button"
                    className="btn-icon-fade btn-icon-small dropdown__toggle"
                  >
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
                        <a href="#">
                          <i className="clone-icon"></i>
                          Clone
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
              <figure className="product__img">
                <img src="images/product-img.jpg" alt="" />
              </figure>
              <div className="product__content">
                <div className="d-flex align-items-center">
                  <div className="product__tags">
                    <span className="product__tags__tag">ingredients</span>
                  </div>
                  <label htmlFor="publish2" className="custom-switch ml-auto">
                    <input type="checkbox" id="publish2" />
                    <span>&nbsp;</span>
                  </label>
                </div>
                <p>Organic whole soaked</p>
              </div>
              <div className="product__footer">
                <img src="images/company-logo.svg" alt="" />
                <div className="product__footer__actions">
                  <button
                    type="button"
                    className="btn-icon-fade btn-icon-small show-panel"
                    data-target="#tags-panel"
                  >
                    <i className="tags-icon"></i>
                  </button>
                  <button
                    type="button"
                    className="btn-icon-fade btn-icon-small show-panel"
                    data-target="#item-collections-panel"
                  >
                    <i className="layer-plus-icon"></i>
                  </button>
                  <button
                    type="button"
                    className="btn-icon-fade btn-icon-small"
                  >
                    {" "}
                    <i className="chart-bar-icon"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="product">
              <div className="product__title">
              <Link href="/recipedetail/Almonds4" >
                <h4>Almonds4</h4>
                </Link>
                <div className="dropdown">
                  <button
                    type="button"
                    className="btn-icon-fade btn-icon-small dropdown__toggle"
                  >
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
                        <a href="#">
                          <i className="clone-icon"></i>
                          Clone
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
              <figure className="product__img">
                <img src="images/product-img.jpg" alt="" />
              </figure>
              <div className="product__content">
                <div className="d-flex align-items-center">
                  <div className="product__tags">
                    <span className="product__tags__tag">ingredients</span>
                  </div>
                  <label htmlFor="publish2" className="custom-switch ml-auto">
                    <input type="checkbox" id="publish2" />
                    <span>&nbsp;</span>
                  </label>
                </div>
                <p>Organic whole soaked</p>
              </div>
              <div className="product__footer">
                <img src="images/company-logo.svg" alt="" />
                <div className="product__footer__actions">
                  <button
                    type="button"
                    className="btn-icon-fade btn-icon-small show-panel"
                    data-target="#tags-panel"
                  >
                    <i className="tags-icon"></i>
                  </button>
                  <button
                    type="button"
                    className="btn-icon-fade btn-icon-small show-panel"
                    data-target="#item-collections-panel"
                  >
                    <i className="layer-plus-icon"></i>
                  </button>
                  <button
                    type="button"
                    className="btn-icon-fade btn-icon-small"
                  >
                    <i className="chart-bar-icon"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
