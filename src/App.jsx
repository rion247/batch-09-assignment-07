import './App.css'
import HeroBanner from './components/Hero Banner/heroBanner'
import RecipesSection from './components/Recipes/recipesSection'
import Header from './components/Site Main Header/header'

function App() {

  return (

    <div className='font-lexend mx-auto container'>

      <Header></Header>

      <HeroBanner></HeroBanner>

      <RecipesSection></RecipesSection>




    </div>

  )

}

export default App
