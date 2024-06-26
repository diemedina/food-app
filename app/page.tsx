"use client"

import styles from "./page.module.css";
import Link from "next/link";
import { useCartStore } from "./store/cart";
import { useRecipeStore } from "./store/recipe";
import { useCalendarStore } from "./store/calendar";
import { useCategoriesStore } from "./store/categories";
import { get } from "https";

export default function Home() {
  const { items } = useCartStore()
  const { recipes } = useRecipeStore()
  const { getToday } = useCalendarStore()
  const { getCategory } = useCategoriesStore()

  return (
    <main className={styles.home}>
      <header className={styles.header}>
        <h2>Hola, Diego</h2>
        <Link href="/cart">
          <span className="material-symbols-outlined">shopping_cart</span>
        </Link>
      </header>

      <Link href={`/calendar/${new Date().getDay()}`}>
        <article className={styles.today}>
          <span className="material-symbols-outlined">calendar_month</span>
          <h3>Calendario</h3>
          <section className={styles.today__section}>
            {
              getToday().foods.map((food, idx) => (
                <div className={styles.today__section__item} key={food.id}>
                  <span className="material-symbols-outlined">restaurant</span>
                  <div>
                    <strong>{ idx == 0 ? 'Almuerzo' : 'Cena'}</strong>
                    <h4>{ food.title }</h4>
                  </div>
                </div>
              ))
            }
          </section>
        </article>
      </Link>

      <section className={styles.recipe}>
        <h3>Recetas</h3>
        <div className={styles.listRecipe}>
          {
            recipes.length > 0 ? (
              recipes.map(recipe => (
                <details className={styles.listRecipe__item} key={recipe.id}>
                  <summary>
                    <span className="material-symbols-outlined">menu_book</span>
                    <div>
                      <strong>{recipe.title}</strong>
                      <small>{recipe.ingredients.length} Ingredientes</small>
                    </div>
                  </summary>
                  {
                    recipe.ingredients.length > 0 && <div className={styles.listRecipe__item__description}>
                      <ul>
                        {recipe.ingredients.map(ingredient => (
                          <li className={ingredient.has ? styles.active : ''} key={ingredient.id}>
                            <i className="material-symbols-outlined">{ingredient.has ? 'check' : 'horizontal_rule'}</i> {ingredient.description}
                          </li>
                        ))}
                      </ul>
                    </div>
                  }
                </details>
              ))
            ) : (
              <Link href="/recipe/create">
                <button className={styles.button__add}>
                  Agregar Receta
                </button>
              </Link>
            )
          }
        </div>
      </section>

      <section className={styles.shop}>
        <h3>Compras</h3>
        <div className={styles.listShop}>
          { 
            items.length > 0 ? (
              items.slice(0, 5).map(item => (
                <article className={styles.listShop__item} key={item.id}>
                  <span className="material-symbols-outlined">{getCategory(item.category).icon}</span>
                  <div>
                    <strong>{item.description}</strong>
                    <small>{getCategory(item.category).description}</small>
                  </div>
                </article>
              ))
            ) : (
              <span>La lista de compras esta vacia</span>
            )
          }
        </div>
      </section>
    </main>    
  );
}
