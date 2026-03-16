import { useEffect, useState } from "react"
import { useOutletContext } from "react-router-dom"
import PokemonCard from "../components/PokemonCard"

export default function SearchResults(){
    //I dette komponentet skal dere lagre verdiene som kommer fra søk og vise dem på siden. 
    //Dere skal gjennbruke pokemonkortene for å vise resultatene.
    
    const {searchQuery} = useOutletContext()
    const [searchResults, setSearchResults] = useState([])

    const getSearchResults = async()=>{
        try{
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchQuery}`)
            const data = await res.json()
            setSearchResults([data])
            console.log(data)
        
        }catch(err){
            console.log(err)
        }
    }

    const pokemonDef = {
        name: searchResults?.name,
        id: searchResults?.id,
        sprites: searchResults?.sprites?.front_default
    }

    useEffect(()=>{
        getSearchResults();
    },[searchQuery])


    return (
        <section>
        <h1>Search Results for: {searchQuery}</h1>
            <PokemonCard pokemonDef={pokemonDef}/>
        </section>

    )
}

// <section>
//   <h1>Search Results for: {searchQuery}</h1>
//   {searchResults.map((pokemon)=> (
//     <PokemonCard key={pokemon.name} pokemonUrl={`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`}/>
//   ))}
// </section>
