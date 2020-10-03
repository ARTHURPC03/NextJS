import { useEffect, useState } from 'react'
import { Title } from '../styles/pages/Home'

interface IProduct {
  id: string
  title: string
}

export default function Home() {
  const [recommendedProducts, setRecommendProducts] = useState([])

  useEffect(() => {
    fetch('http://localhost:3333/recommended').then(response => {
      response.json().then(data => {
        setRecommendProducts(data)
      })
    })
  }, [])

  return (
    <div>
      <section>
        <Title>Products</Title>

        <ul>
          {recommendedProducts.map(recommendedProduct => {
            return (
              <li key={recommendedProduct.id} >
                {recommendedProduct.title}
              </li>
            )
          })}
        </ul>
      </section>
    </div>
  )
}
