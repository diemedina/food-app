"use client"

import styles from './page.module.css'
import { useCartStore } from '../store/cart'
import Link from 'next/link'
import { useCategoriesStore } from '../store/categories'

export default function Cart() {
  const {items, remove} = useCartStore()
  const {getCategory} = useCategoriesStore()

  return (
    <main className={styles.cart}>
      <header>
        <Link href="/">
          <span className="material-symbols-outlined">arrow_back_ios_new</span>
        </Link>
        <h2>Compras</h2>
      </header>
      
      <section className={styles.listItems}>
        {items.map(item => (
          <article className={styles.listItems__item} key={item.id}>
            <span className="material-symbols-outlined">{getCategory(item.category).icon}</span>
            <div>
              <strong>{item.description}</strong>
              <small>{getCategory(item.category).description}</small>
            </div>
            <div className={styles.listItems__item__actions}>
              <button className={styles.active} onClick={() => remove(item.id)}>
                <i className='material-symbols-outlined'>remove_shopping_cart</i>
              </button>
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}