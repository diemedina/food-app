"use client"

import { useEffect } from 'react'
import { useRecipeStore } from '../store/recipe'
import styles from './page.module.css'
import Link from 'next/link'

export default function Recipe() {
  const {recipes, edit} = useRecipeStore()

  async function setFridgeItem(recipe: any) {
    let model = recipe;
    model['fridge'] = !recipe['fridge']
    edit(model)
    const response = await fetch('/api/recipe', {method: 'GET'});
    console.log(response);
  }

  return (
    <main className={styles.recipe}>
      <header>
        <h2>Recetas</h2>
        <Link href="/recipe/create">
          <span className='material-symbols-outlined'>add</span>
          Agregar
        </Link>
      </header>

      <section className={styles.listRecipe}>
        { recipes.map(recipe => (
          <article className={styles.listRecipe__item} key={recipe.id}>
            <Link href={`/recipe/${recipe.id}`}>
              <span className="material-symbols-outlined">menu_book</span>
              <div>
                <strong>{recipe.title}</strong>
                <small>{recipe.ingredients.length} Ingredientes</small>
              </div>
            </Link>
            <div className={styles.listRecipe__item__actions}>
              <button className={recipe.fridge ? styles.active : ''} onClick={() => setFridgeItem(recipe)}>
                <i className='material-symbols-outlined'>ac_unit</i>
              </button>
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}