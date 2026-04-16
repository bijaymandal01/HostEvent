import { Explorebtn } from "@/components/Explorebtn"
import { Featured } from "@/components/Featured"


const Home = () => {
  return (
    <>

      <section className="text-center flex flex-col items-center">
        <h1 className="mt-5">The Hub for Every Dev<br/> Event You can't Miss</h1>

        <p className="mt-5">Hackathons, Meetups, and Conferences, All in One Place</p>

        <Explorebtn/>

      </section>
      <section className="min-w-screen">

        <Featured />
        
      </section>

    </>
  )
}

export default Home