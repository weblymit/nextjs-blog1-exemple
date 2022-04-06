import Hero from '../components/Hero'
import CardPost from '../components/CardPost'

const Home = () => {
  return (
    <>
      <Hero />
      <div className="container py-28 flex justify-between space-x-8">
        <CardPost />
        <CardPost />
        <CardPost />
      </div>
    </>
  )
}

export default Home
