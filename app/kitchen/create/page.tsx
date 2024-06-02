"use client"

import { useState } from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import { useKitchenStore } from '@/app/store/kitchen'
import { Ingredient } from '@/app/utils/types'
import { useRouter } from 'next/navigation'
import { useCategoriesStore } from '@/app/store/categories'

export default function CreateRecipe() {
  const router = useRouter()
  const [description, setDescription] = useState<string>('')
  const [category, setCategory] = useState<number>(0)
  const { add } = useKitchenStore()
  const { categories } = useCategoriesStore()

  function handleSubmit (e: any) {
    e.preventDefault()
    const model: Ingredient = {
      id: Math.random().toString(16).slice(2),
      description,
      category,
      has: false,
      buy: false
    }    
    add(model)
    router.push('/kitchen')
    // TODO: mostrar la notificación
  }

  return (
    <main className={styles.create}>
      <header>
        <Link href="/kitchen">
          <span className="material-symbols-outlined">arrow_back_ios_new</span>
        </Link>
        <h2>Agregar Ingrediente</h2>
      </header>
      <section className={styles.form}>
        <div className={styles.content_input}>
          <label htmlFor="title">Título</label>
          <input type="text" placeholder='Insertar el título' value={description} onChange={(e) => setDescription(e.target.value)}/>
        </div>
        <div className={styles.content_input}>
          <label htmlFor="description">Categoria</label>
          <div className={styles.list_ingredients}>
            {categories.map(item => (
              <button key={item.id} onClick={() => setCategory(item.id)} className={category == item.id ? styles.active : ''}>
                <i className="material-symbols-outlined">{item.icon}</i> {item.description}
              </button>
            ))}
          </div>
        </div>
        <button onClick={handleSubmit}>
          AGREGAR
        </button>
      </section>
    </main>
  )
}