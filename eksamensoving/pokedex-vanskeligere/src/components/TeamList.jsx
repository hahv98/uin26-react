import { useParams } from "react-router-dom"

export default function TeamList({teams}){
    const { teamN } = useParams()
    return(
        <>
        <h1>Team {teamN.name}</h1>
        <section className="flex">
            <h2>Pokemons</h2>

        </section>
        </>
    )
}