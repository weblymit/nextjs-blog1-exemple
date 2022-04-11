import Hero from '../components/Hero'
import CardPost from '../components/CardPost'
import Paginate from '../components/paginate/Paginate'
// import { fakeData } from '../data/fakeData'

const Home = ({ posts }) => {
  const img = 'url("image1.webp")'
  // const img2 = 'url("image3.webp")'
  // const img3 = 'url("image4.webp")'
  // const img4 = 'url("image5.webp")'
  // const img5 = 'url("image6.webp")'
  // const img6 = 'url("image7.webp")'

  return (
    <>
      <Hero />
      <div className="container py-28">
        <div className=" grid grid-cols-3 gap-x-6 gap-y-10 ">
          {/* {fakeData.map((post) => (
            <CardPost key={post.id} img={post.src} post={post} />
          ))} */}
          {posts.map((post) => (
            <CardPost key={post.id} img={img} post={post} />
          ))}
        </div>
        <div className="pt-28">
          <Paginate />
        </div>
      </div>
    </>
  )
}

export default Home

export async function getStaticProps() {
  const api = 'https://jsonplaceholder.typicode.com/posts?_start=0&_limit=8'
  const res = await fetch(api)
  const posts = await res.json()

  return {
    props: {
      posts,
    },
  }
}
