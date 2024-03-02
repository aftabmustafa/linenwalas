import { useEffect } from 'react'
import './index.css'
function BrandWall() {
  useEffect(() => {
    const carouselItems = document.querySelectorAll('.carouselItem')
    let i = 1
    setInterval(() => {
      Array.from(carouselItems).forEach((item, index) => {
        if (i < carouselItems.length) {
          item.style.transform = `translateX(-${i * 100}%)`
        }
      })

      if (i < carouselItems.length) {
        i++
      } else {
        i = 0
      }
    }, 5000)
  })

  return (
    <div className='brandWall'>
      <div className='carouselItems'>
        <div className='carouselItem item1'></div>
        <div className='carouselItem item2'></div>
        <div className='carouselItem item3'></div>
      </div>
      <div className='brandTitleAndSloganContainer'>
        <div>
          <h1 className='brandNameFont'>LinenWalas</h1>
          <p className='brandSloganFont'>Happy Sleeping</p>
        </div>
      </div>
    </div>
  )
}

export default BrandWall
