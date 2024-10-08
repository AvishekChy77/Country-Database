import { useState } from "react";
import CountryCard from "../Components/CountryCard";
import useCountryData from "../Hooks/useCountryData";
import { getVisited, saveVisited } from "../Utilities/LOcalStorage";


const Home = () => {

    const [countries, error, loading]= useCountryData()
    const [visited, setVisited] = useState(getVisited())
    const [check, setCheck] = useState(false)
    console.log(countries)

    if(loading){
        return <span className="loading loading-ring loading-lg"></span>
    }

    if(error){
        return <p>Error: {error}</p>
    }

    const selectedCountries = check? countries : countries.slice(0,4)

    const handleVisit = (name)=>{
        const arr =[...visited]
        if(!arr.includes(name)){
            arr.push(name)
            setVisited(arr)
            saveVisited(name)
        }
    }

    return (
        <div>
            <h2>Country Database</h2>
            <p>No of Countries: {countries.length}</p>
            <p>No of countries I've visited: {visited.length}</p>

            <div className="mx-10 mt-10 grid gap-5 lg:gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {
                    selectedCountries.map((country)=> <CountryCard key={country.name.common} country={country} handleVisit={handleVisit} visited={visited} />)
                }
            </div>
            {
                check ? <button onClick={()=> setCheck(!check)} className="my-5 btn btn-accent btn-sm btn-outline">See less</button> : <button onClick={()=> setCheck(!check)} className="my-5 btn btn-accent btn-sm btn-outline">See all</button>
            }
        </div>
    );
};

export default Home;

// const a = [{}, {}, {}, {}]
// const a = [5,4,7,9,8] a.length
// array.slice(start, end)
//a.slice(0,3) output: [5,4,7]