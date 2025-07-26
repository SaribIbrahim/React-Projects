import  { useEffect, useState } from 'react'
import "./App.css"
import axios from 'axios'
import SearchResult from './components/SearchResults/SearchResult'


export const BASE_URL="http://localhost:9000" //getting data from server



function App() {
  
  const [foodData,setFoodData]=useState(null)
  const[loading,setLoading]=useState(false)
  const[error,setError]=useState(null)
  const[filteredData,setFilteredData]=useState(null)
  const[selectedButton,setSelectedButton]=useState()
  const getData = async () => {

    setLoading(true)
    try {
      const response = await axios.get(BASE_URL)
      setFoodData(response.data) // used for filtering
      setFilteredData(response.data)//passed as prop i.e works as main array of data
      setLoading(false)
    }
    catch (error) {
      setError("Error fetching data")
    }
     finally {
    setLoading(false); 
  }
  }

  useEffect(()=>{
    getData()
  },[])

  const handleSelectedButton=(type)=>{

    if(type==="all"){
      setFilteredData(foodData)
      setSelectedButton("all")
    }
    
    else{
      const filter=foodData?.filter((food)=>food.type.toLowerCase().includes(type.toLowerCase()))
    setFilteredData(filter)
    setSelectedButton(type)
    }
  }

  const searchFood=(e)=>{
    const searchValue=e.target.value

    if(searchValue===""){
      setFilteredData(null)
      // return will stop the code here causing no card to show when input is empty after typed
    }

    const filter=foodData?.filter((food)=>food.name.toLowerCase().includes(searchValue.toLowerCase()))
    // "anystring".includes("") === true so all entries get stored in filter when input is reset/backspaced thats why original data is shown again 

    setFilteredData(filter)
  }

  const filterBtns=[
    {
      name:"All",
      type:"all"
    },
    {
      name:"Breakfast",
      type:"breakfast"
    },
    {
      name:"Lunch",
      type:"lunch"
    },
    {
      name:"Dinner",
      type:"dinner"
    }
  ]


  if (error) {
  return (
    <div>
      <h1>{error}</h1>
    </div>
  )
}

if (loading) {
  return (
    <div>
      <h1>Loading...</h1>
    </div>
  )
}
  
  
  return (
    <>
      <div className="main-container">
        <section className="container">
          <div>
            <img src="/logo.svg" alt="Logo" />
          </div>
          <div className='search'>
            <input onChange={searchFood} type="text" placeholder='Search Food....' />
          </div>
        </section>
        <section className="filter-buttons">
          {
            filterBtns.map((item)=>(
              <button className={selectedButton===item.type?"isSelected":""} key={item.name} onClick={()=>(handleSelectedButton(item.type))}>{item.name}</button>
             ) )
          }
        </section>
      </div>
      <SearchResult foodData={filteredData}/>
    </>

  )
}

export default App


