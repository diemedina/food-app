"use client"

import { useKitchenStore } from '@/app/store/kitchen'
import styles from './page.module.css'
import Link from 'next/link'
import { useState } from 'react'
import { Ingredient, Recipe } from '@/app/utils/types'
import { useRecipeStore } from '@/app/store/recipe'
import { useRouter } from 'next/navigation'
import { useCategoriesStore } from '@/app/store/categories'
import { useNotificationsStore } from '@/app/store/notifications'

export default function CreateRecipe() {
  const router = useRouter()
  const { items } = useKitchenStore()
  const { add } = useRecipeStore()
  const { getCategory } = useCategoriesStore()
  const { addNotification } = useNotificationsStore()
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('')
  const [ingredients, setIngredients] = useState<Ingredient[]>([])

  function toggleIngredient(ingredient: Ingredient) {
    const indexIngredient = ingredients.findIndex(i => i.id == ingredient.id)
    if (indexIngredient > -1) {
      let listIngredients = [...ingredients];
      listIngredients.splice(indexIngredient, 1)
      setIngredients(listIngredients)
    } else {
      setIngredients([...ingredients, ingredient]) 
    }
  }

  function existIngrediend(ingredient: Ingredient) {
    return ingredients.findIndex(i => i.id == ingredient.id) > -1
  }

  function addRecipe() {
    const model: Recipe = {
      id: Math.random().toString(16).slice(2),
      title,
      description,
      ingredients,
      fridge: false,
    }

    add(model)
    router.push('/recipe')
    addNotification('Receta agregada')
  }

  return (
    <main className={styles.create}>
      <header>
        <Link href="/recipe">
          <span className="material-symbols-outlined">arrow_back_ios_new</span>
        </Link>
        <h2>Crear receta</h2>
      </header>
      <section className={styles.form}>
        <div className={styles.content_input}>
          <label htmlFor="title">Título</label>
          <input type="text" placeholder='Insertar el título' value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className={styles.content_input}>
          <label htmlFor="description">Description</label>
          <input type='text' placeholder='Insertar la descripción' value={description} onChange={(e) => setDescription(e.target.value)}/>
        </div>
        <div className={styles.content_input}>
          <label htmlFor="description">Ingredientes</label>
          <ul className={styles.list_ingredients}>
            {
              items.length > 0 ? (
                items.map(item => (
                  <li key={item.id} onClick={() => toggleIngredient(item)} className={existIngrediend(item) ? styles.active : ''}>
                    <i className="material-symbols-outlined">{existIngrediend(item) ? 'check': 'horizontal_rule'}</i> {item.description} <div className={styles.category}>{getCategory(item.category).description}</div>
                  </li>
                ))
              ) : (
                <span>No hay ingredientes cargados</span>
              )
            }
          </ul>
        </div>
        <button onClick={addRecipe}>
          AGREGAR
        </button>
      </section>
    </main>
  )
}