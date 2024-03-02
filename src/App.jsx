import brandLogo from './assets/brandLogo/linenwalas.svg'
import BrandWall from './components/BrandWall'
import InventoryForm from './components/InventoryForm'
import SkuPage from './components/SkuPage'
import './App.css'

function App() {
  return (
    <>
      <nav>
        <a href='#'>
          <img src={brandLogo} className='logo' />
        </a>
      </nav>
      <div className='brandBody'>
        <BrandWall></BrandWall>
        <InventoryForm></InventoryForm>
      </div>

      <SkuPage></SkuPage>
    </>
  )
}

export default App
