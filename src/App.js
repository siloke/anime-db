import './App.css'
import { useEffect, useState } from 'react';
import Pagination from './components/pagination'
import Card from './components/card'
 
function App() {
  const [apiData, setApiData] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [animePerPage, setAnimePerPage] = useState(6)

  //Fetch API
  useEffect(() => {
    const fetchData = async () => {
      const fetchApi = await fetch('https://api.jikan.moe/v4/top/anime?type=tv?filter=bypopularity?page=1');
      const data = await fetchApi.json()
      setApiData(data.data)
    }
    fetchData()
  }, [])

  //Change page number
  const togglePage = (page) => {
    setPageNumber(page)
  }

  const lastIndex = pageNumber * animePerPage;
  const firstIndex = lastIndex - animePerPage;
  const renderData = apiData.slice(firstIndex, lastIndex)
  
  return (
    <div className='container d-flex flex-column align-items-center'>
      <h1>Anime<strong>DB</strong></h1>
      <div className='row'>
      <h4>Popular animes</h4>
        {renderData.map((x) => <Card key= {x.mal_id} cardInfo={x}></Card>)}
      </div>
      <Pagination totalItems={apiData.length} animePerPage={animePerPage} togglePage={togglePage}></Pagination>
    </div>
  );
}

export default App;
