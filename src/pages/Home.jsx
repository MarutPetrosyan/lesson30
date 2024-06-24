import { useSelector } from "react-redux"

function Home () {
    const {countries} = useSelector((state)=> state.countrisData)

  return (
    <>
    {
        countries.map((el)=>{
            return<>
            <img src={el.flags.png} />
            <p>{el.name.common}</p>
            </>
        })
    }
    </>
  )
}

export default Home