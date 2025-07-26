
import "./SearchResult.css"
import { BASE_URL } from '../../App'

function SearchResult({foodData}) {

  
  return (
    <section className="FoodCardContainer">
        <div className="FoodCards">
          {foodData?.map((item)=> <div key={item.id} className='FoodCard'>
            <div className="image-wrapper">
              <img src={BASE_URL+item.image} alt="" />
            </div>
            <div className="Food-Info">
              <div className="Food-Text">
                <h3>{item.name}</h3>
                <p>{item.text}</p>
              </div>
              <button className='Food-Button'>${item.price.toFixed(2)}</button>
            </div>
          </div>)}
        </div>
      </section>
  )
}

export default SearchResult