"use client"

import { useKitchenStore } from '@/app/store/kitchen'
import styles from '../create/page.module.css'
import Link from 'next/link'
import { use, useEffect, useState } from 'react'
import { Ingredient, Recipe } from '@/app/utils/types'
import { useRecipeStore } from '@/app/store/recipe'
import { useParams, useRouter } from 'next/navigation'
import { useCategoriesStore } from '@/app/store/categories'
import { useNotificationsStore } from '@/app/store/notifications'

export default function CreateRecipe() {
  const router = useRouter()
  const params = useParams<{ id: string }>()
  const { items } = useKitchenStore()
  const { get, remove, edit } = useRecipeStore()
  const { getCategory } = useCategoriesStore()
  const { addNotification } = useNotificationsStore()
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('')
  const [ingredients, setIngredients] = useState<Ingredient[]>([])
  const model: Recipe = get(params.id)

  useEffect(() => {
    setTitle(model.title)
    setDescription(model.description)
    setIngredients(model.ingredients)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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

  function editRecipe() {
    const _model: Recipe = {
      ...model,
      title,
      description,
      ingredients
    }

    edit(_model)
    router.push('/recipe')
    addNotification('Receta editada') 
  }

  function deleteRecipe() {
    remove(params.id)
    router.push('/recipe')
    addNotification('Receta eliminada')
  }

  return (
    <main className={styles.create}>
      <header>
        <Link href="/recipe">
          <span className="material-symbols-outlined">arrow_back_ios_new</span>
        </Link>
        <h2>Editar receta</h2>
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
        <button onClick={editRecipe}>
          EDITAR
        </button>
        <button className={styles.button_outline} onClick={deleteRecipe}>
          ELIMINAR
        </button>
      </section>
    </main>
  )
}