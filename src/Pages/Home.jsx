import Products from '../Components/Products'

const Home = () => {
  return (
    <div>
        <h2 className='heading'>welcome to the redux toolkit</h2>
        <section>
            <h3>products</h3>
            <Products/>
        </section>
    </div>
  )
}

export default Home