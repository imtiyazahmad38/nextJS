import Link from 'next/link'
import Image from 'next/image'
import Ingredients from './Ingrdients';

export default function Detail({id}) {
  console.log(id)
  return (
    <>
      <main className="main">
        <div className="main__content">
          <div className="main__content__header">
            <a href="/recipes" className="btn-icon-white mr-20">
              <i className="chevron-left-icon"></i>
            </a>
            <label htmlFor="publish" className="custom-switch ml-auto">
              <input type="checkbox" id="publish" />
              <span>Publish</span>
            </label>
            <button type="button" className="btn-icon-white ml-20">
              <i className="pen-icon"></i>
            </button>
          </div>
          <div className="wrapper-section">
            <div className="wrapper-section__content">
              <div className="product-details">
                <div className="product-details__body">
                  <h3>{id}</h3>
                  <div className="chips">
                    <div className="chip">
                      <span className="chip__title">Smoothie</span>
                    </div>
                    <div className="chip">
                      <span className="chip__title">Breakfast</span>
                    </div>
                  </div>
                  <Image width="100%" height="100%" className="mt-20" src="/images/company-logo.svg" alt="" />
                  <div className="product-details__body__total-voting">
                    <div className="product-details__made-by">
                      <figure>
                      <Image width="100%" height="100%" src="/images/user-img.jpg" alt="Your Name" />
                      </figure>
                      <h5>Sam</h5>
                    </div>
                    <span> 4.9 </span>
                    <div className="stars">
                      <figure>
                        <Image width="30%" height="30%" src="/images/full-star.svg" />
                      </figure>
                      <figure>
                        <Image width="30%" height="30%" src="/images/full-star.svg" />
                      </figure>
                      <figure>
                        <Image width="30%" height="30%" src="/images/full-star.svg" />
                      </figure>
                      <figure>
                        <Image width="30%" height="30%" src="/images/full-star.svg" />
                      </figure>
                      <figure>
                        <Image width="30%" height="30%" src="/images/half-star.svg" />
                      </figure>
                    </div>
                    <p>(24 Ratings)</p>
                  </div>
                  <div className="product-specs">
                    <div>
                      <p>80%</p>
                      <span>Ratio 1</span>
                    </div>
                    <div>
                      <p>40%</p>
                      <span>Ratio 2</span>
                    </div>
                    <div>
                      <p>8</p>
                      <span>Accuracy</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-info mt-40">
                <div className="tabs">
                  <div className="tabs__links">
                    <ul id="tabs">
                      <li>
                        <a href="#" id="tab1" className="active">Receipe Details</a>
                      </li>
                      <li>
                        <a href="#" id="tab2">Ingredients</a>
                      </li>
                      <li>
                        <a href="#" id="tab3">Reviews</a>
                      </li>
                    </ul>
                  </div>
                  <div className="tabs__content">
                    <div className="tabcontent" id="tab1C">
                    <h3 className="mb-10">About</h3>
                    <p>
                      Creamy protein-rich vegan strawberry and blueberry white
                      bean smoothie! This easy & delicious shake is a healthy,
                      simple and fresh dairy-free breakfast or snack. Secretly
                      hiding protein- and fiber-rich beans and even veggies,
                      it’s the perfect 5-minute recipe for kids, athletes and
                      those looking to eat healthier. You won’t even taste the
                      beans at all!
                    </p>
                    <div className="grid three mt-30">
                      <div className="field">
                        <label htmlFor="">Cooking Method</label>
                        <input type="text" className="custom-input" value="Blend" readOnly />
                      </div>
                      <div className="field">
                        <label htmlFor="">Cooking Eauipment</label>
                        <input type="text" className="custom-input" value="Blender" readOnly />
                      </div>
                      <div className="field">
                        <label htmlFor="">Cuisine</label>
                        <input type="text" className="custom-input" value="American" readOnly />
                      </div>
                    </div>
                    <div className="grid four mt-30">
                      <div className="field">
                        <label htmlFor="">Servings</label>
                        <input type="text" className="custom-input" value="2" readOnly />
                      </div>
                      <div className="field">
                        <label htmlFor="">Prep Time</label>
                        <input type="text" className="custom-input" value="5" readOnly />
                      </div>
                      <div className="field">
                        <label htmlFor="">Cook Time</label>
                        <input type="text" className="custom-input" value="0" readOnly />
                      </div>
                      <div className="field">
                        <label htmlFor="">Total Time</label>
                        <input type="text" className="custom-input" value="5" readOnly />
                      </div>
                    </div>
                    <div className="field mt-30">
                      <label htmlFor="">Keywords</label>
                      <textarea cols="30" rows="5" className="custom-input"></textarea>
                    </div>
                    <div className="grid two mt-30">
                      <div className="field">
                        <label htmlFor="">Publish Date</label>
                        <input type="text" className="custom-input" value="02.24.2021" readOnly />
                      </div>
                      <div className="field">
                        <label htmlFor="">Added Date</label>
                        <input type="text" className="custom-input" value="02.24.2021" readOnly />
                      </div>
                    </div>
                  </div>
                    <div className="tabcontent" id="tab2C">
                      <Ingredients />
                    </div>
                    <div className="tabcontent" id="tab3C">
                      Reviews
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
