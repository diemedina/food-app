"use client" 

import styles from './page.module.css'
import Link from "next/link"
import { useState } from 'react'
import { useParams } from "next/navigation"
import { useCalendarStore } from "@/app/store/calendar"
import { useRecipeStore } from "@/app/store/recipe"
import { days } from "@/app/utils/types"
import { useRouter } from 'next/navigation'

export default function EditCalendar() {
  const router = useRouter()
  const params = useParams<{ date: string }>()
  const { get, setDate } = useCalendarStore()
  const { recipes } = useRecipeStore()
  let model = get(Number(params.date))
  const [recipeSelect, setRecipeSelect] = useState<string>('')
  const [tabActive, setTabActive] = useState<string>('almuerzo')
  
  function selectRecipe(id: string) {
    model.foods[tabActive == 'almuerzo' ? 0 : 1] = recipes.find(recipe => recipe.id == id) || model.foods[tabActive == 'almuerzo' ? 0 : 1]
    setRecipeSelect(id)
  }

  function changeTab(tab: string) {
    setRecipeSelect(model.foods[tab == 'almuerzo' ? 0 : 1].id)
    setTabActive(tab)
  }

  function editDate() {
    setDate(model)
    router.push('/calendar')
  }

  return (
    <main className={styles.calendar}>
      <header>
        <Link href="/calendar">
          <span className="material-symbols-outlined">arrow_back_ios_new</span>
        </Link>
        <h2>Editar calendario</h2>
      </header>
      
      <article className={styles.today}>
        <span className="material-symbols-outlined">calendar_month</span>
        <h3>{days[model.day]}</h3>
        <section className={styles.today__section}>
          {model.foods.map((food, idx) => (
            <div className={`${styles.today__section__item} ${tabActive == 'almuerzo' && idx == 0 ? styles.active : tabActive == 'cena' && idx == 1 ? styles.active : null}`} 
              key={food.id}
              onClick={() => changeTab(idx == 0 ? 'almuerzo' : 'cena')}>
              <span className="material-symbols-outlined">restaurant</span>
              <div>
                <strong>{idx == 0 ? 'Almuerzo' : 'Cena'}</strong>
                <h4>{food.title}</h4>
              </div>
            </div>
          ))}
        </section>
      </article>
      <section>
        <ul className={styles.list_recipes}>
          {
            recipes.map(recipe => (
              <li key={recipe.id} onClick={() => recipeSelect == recipe.id ? selectRecipe("") : selectRecipe(recipe.id)} className={recipeSelect == recipe.id ? styles.active : ''}>
                <i className="material-symbols-outlined">{recipeSelect == recipe.id ? 'check' : 'check_indeterminate_small'}</i> {recipe.title}
              </li>
            ))
          }
        </ul>
      </section> 
      <button onClick={editDate}>
        EDITAR
      </button>     
    </main>
  )
}