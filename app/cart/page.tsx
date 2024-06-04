"use client"

import styles from './page.module.css'
import { useCartStore } from '../store/cart'
import Link from 'next/link'
import { useCategoriesStore } from '../store/categories'
import { useEffect, useState } from 'react'
import { Ingredient } from '../utils/types'
import { useNotificationsStore } from '../store/notifications'

export default function Cart() {
  const { items, remove } = useCartStore()
  const { categories, getCategory } = useCategoriesStore()
  const [ filterActive, setFilterActive ] = useState(0)
  const [ listItems, setListItems ] = useState<Ingredient[]>([])
  const { addNotification } = useNotificationsStore()

  function getListCategoriesFiltered () {
    const categoriesFiltered = items.map(item => item.category)
    const listCategories = categories.filter(category => categoriesFiltered.includes(category.id))
    return listCategories.length > 0 ? listCategories : []
  }

  function removeItemInCart (item: Ingredient) {
    remove(item.id)
    addNotification(`Compraste ${item.description}`)
  }
  
  useEffect(() => {
    const _list = items.filter(item => filterActive === 0 ? true : item.category === filterActive)
    setListItems(_list)
  }, [filterActive, items])

  return (
    <main className={styles.cart}>
      <header>
        <Link href="/">
          <span className="material-symbols-outlined">arrow_back_ios_new</span>
        </Link>
        <h2>Compras</h2>
      </header>

      {
        listItems.length > 0 && (
          <nav className={styles.listFilters}>
            <button className={filterActive == 0 ? styles.active : ''} onClick={() => setFilterActive(0)}>Todos</button>
            {
              getListCategoriesFiltered().map(category => (
                <button key={category.id} className={filterActive === category.id ? styles.active : ''} onClick={() => setFilterActive(category.id)}>
                  <small>{category.description}</small>
                </button>
              ))
            }
          </nav>
        )
      }
      
      <section className={styles.listItems}>
        {
          listItems.length > 0 ? (
            listItems.map(item => (
              <article className={styles.listItems__item} key={item.id}>
                <span className="material-symbols-outlined">{getCategory(item.category).icon}</span>
                <div>
                  <strong>{item.description}</strong>
                  <small>{getCategory(item.category).description}</small>
                </div>
                <div className={styles.listItems__item__actions}>
                  <button className={styles.active} onClick={() => removeItemInCart(item)}>
                    <i className='material-symbols-outlined'>remove_shopping_cart</i>
                  </button>
                </div>
              </article>
            ))
          ) : (
            <span>La lista de compras esta vacia</span>
          )
        }
      </section>
    </main>
  )
}