import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Footer from './components/Footer';
import Header from './components/Header';
import InputForm from './components/input/InputForm';
import Routes from './components/journeys/Routes';
import Activity from './components/ui/Activity';
import { changeCurrentId, useLazyFetchJourneysQuery, changeCurrentDetails } from './store';




function App() {
  const [fetchJourneys, results] = useLazyFetchJourneysQuery()
  const [journeysData, setJourneysData] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useDispatch()

  const onFormSubmit = (journeyParams) => {
    setJourneysData(null)
    setIsLoading(true)
    resultsRef.current.scrollIntoView({ behavior: "smooth" })
    dispatch(changeCurrentId(-1))
    dispatch(changeCurrentDetails({}))
    console.log(journeysData);

    fetchJourneys(journeyParams)

  }
  const resultsRef = useRef(null)
  
 


  useEffect(() => {

    if (results && results.data) {

      setJourneysData(results.data)
      setIsLoading(results.isLoading || results.isFetching)
      console.log(results)

    }

  }, [results])



  return (
    <div className="app">
      <Header />
      <InputForm onSubmit={onFormSubmit} />
      <div ref={resultsRef}>
        {journeysData ? <> <Routes data={journeysData} />
        </> : isLoading ? <Activity /> : <></>}
        {/* {journeysData  ? <> <Routes data = {journeysData}/>
       </> :  <Activity/>} */}
      </div>

      <Footer />




    </div>
  );
}

export default App;
