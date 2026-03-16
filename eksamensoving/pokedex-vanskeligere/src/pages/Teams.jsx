import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

export default function Teams(){
    const [teamArr, setTeamArr] = useState()

    // const teams = [
    //     {
    //         name: "Instinct",
    //         color: "yellow",
    //         pokemons: [{
    //             name: "Pikachu",
    //             id: 25
    //         }, {
    //             name: "Charmander",
    //             id: 4
    //             }]
    //     },
    //     {
    //         name: "Mystic",
    //         color: "blue",
    //         pokemons: [{
    //             name: "Squirtle",
    //             id: 7
    //         }, {
    //             name: "Psyduck",
    //             id: 54
    //         }]  
    //     },
    //     {
    //         name: "Valor",
    //         color: "red",
    //         pokemons: [{
    //             name: "Charmander",
    //             id: 4
    //         }, {
    //             name: "Bulbasaur",
    //             id: 1
    //         }]    
    //     }
    // ]

    useEffect(()=>{
        //localStorage.setItem('teams', JSON.stringify(teams))
        const teams = localStorage.getItem('teams')
        setTeamArr(JSON.parse(teams))
    },[])

    //console.log(JSON.parse(teamArr))
    
    //TODO:Hent ut alle lagene og vis de som ulike kort, se skisse for referanse. 
    //TODO: Lag lagkortene som komponenter, pass på å bruk bildene baser på navn verdien dere henter fra lagene. (Se typekortene for referanse)

    return(
        <section className="flex">
            <h2>Teams</h2>
            {teamArr?.map((t, i)=> 
                <article key={i} className="pokemon-card">
                    <h3>Team {t.name}</h3>
                    <img src={`/teams/Team_${t.name}.webp`} alt={t.name} />
                </article>)}
            {/* {teams?.map((team)=>(
                    <article key={team?.name} className="pokemon-card">
                        <h3>Team {team?.name}</h3>
                        <img src={`/teams/Team_${team?.name}.webp`}/>
                    </article>))} */}
        </section>
    )
}