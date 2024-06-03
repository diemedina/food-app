"use client"

import Link from 'next/link'
import styles from './page.module.css'
import { useKitchenStore } from '../store/kitchen'
import { useCategoriesStore } from '../store/categories'
import { useEffect, useState } from 'react'
import { Ingredient } from '../utils/types'

export default function Kitchen() {
  const { items, edit } = useKitchenStore()
  const { categories, getCategory } = useCategoriesStore()
  const [ filterActive, setFilterActive ] = useState<number>(0)
  const [ listItems, setListItems ] = useState<Ingredient[]>([]) 

  function getListCategoriesFiltered() {
    const categoriesFiltered = items.map(item => item.category)
    const listCategories = categories.filter(category => categoriesFiltered.includes(category.id))
    return listCategories.length > 0 ? listCategories : []
  }

  function setProperty(item: any, property: string) {
    const model = {...item}
    model[property] = !item[property];
    edit(model)
  }

  useEffect(() => {
    const _list = items.filter(item => filterActive === 0 ? true : item.category === filterActive)
    setListItems(_list)
  }, [filterActive, items])

  return (
    <main className={styles.kitchen}>
      <header>
        <h2>Alacena</h2>
        {
          listItems.length > 0 && (
            <Link href="/kitchen/create">
              <span className='material-symbols-outlined'>add</span>
              Agregar
            </Link>
          )
        }
      </header>

      {
        listItems.length > 0 ? (
        <nav className={styles.listFilters}>
          <button className={filterActive == 0 ? styles.active : ''} onClick={() => setFilterActive(0)}>Todos</button>
          {
            listItems.length > 0 &&
              getListCategoriesFiltered().map(category => (
                <button key={category.id} className={filterActive === category.id ? styles.active : ''} onClick={() => setFilterActive(category.id)}>
                  <small>{category.description}</small>
                </button>
              ))
          }
        </nav>
        ) : (null)
      }

      <section className={styles.listItems}>
        { 
          listItems.length > 0 ? (
            listItems.map(item => (
              <article className={styles.listItems__item} key={item.id}>
                <Link href={`/kitchen/${item.id}`}>
                  <span className="material-symbols-outlined">{getCategory(item.category).icon}</span>
                  <div>
                    <strong>{item.description}</strong>
                    <small>{getCategory(item.category).description}</small>
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
            ))
          ) : (
            <Link href="/kitchen/create">
              <button className={styles.button__add}>
                Agregar Producto
              </button>
            </Link>
          )
        }
      </section>
    </main>
  )
}