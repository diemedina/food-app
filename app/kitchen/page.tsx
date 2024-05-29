"use client"

import Link from 'next/link'
import styles from './page.module.css'
import { useKitchenStore } from '../store/kitchen'

export default function Kitchen() {
  const { items, edit } = useKitchenStore()

  function setProperty(item: any, property: string) {
    const model = {...item}
    model[property] = !item[property];
    edit(model)
  }

  return (
    <main className={styles.kitchen}>
      <header>
        <h2>Alacena</h2>
        <Link href="/kitchen/create">
          <span className='material-symbols-outlined'>add</span>
          Agregar
        </Link>
      </header>

      <section className={styles.listItems}>
        { items.map(item => (
          <article className={styles.listItems__item} key={item.id}>
            <Link href={`/kitchen/${item.id}`}>
              <span className="material-symbols-outlined">grocery</span>
              <div>
                <strong>{item.description}</strong>
                <small>{item.category}</small>
              </div>
            </Link>
            <div className={styles.listItems__item__actions}>
              <button className={item.buy ? styles.active : ''} onClick={() => setProperty(item, 'buy')}>
                <i className='material-symbols-outlined'>{item.buy ? 'shopping_cart' : 'shopping_cart_off'}</i>
              </button>
              <button className={item.has ? styles.active : ''} onClick={() => setProperty(item, 'has')}>
                <i className='material-symbols-outlined'>{item.has ? 'done' : 'horizontal_rule'}</i>
              </button>
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}