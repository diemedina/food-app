"use client"

import styles from './page.module.css'
import { useCartStore } from '../store/cart'

export default function Cart() {
  const {items, remove} = useCartStore()

  return (
    <main className={styles.cart}>
      <header>
        <h2>Compras</h2>
      </header>
      
      <section className={styles.listItems}>
        {items.map(item => (
          <article className={styles.listItems__item} key={item.id}>
            <span className="material-symbols-outlined">grocery</span>
            <div>
              <strong>{item.description}</strong>
              <small>{item.category}</small>
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