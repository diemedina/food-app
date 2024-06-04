"use client"

import { useEffect, useState } from 'react'
import styles from '../create/page.module.css'
import Link from 'next/link'
import { useKitchenStore } from '@/app/store/kitchen'
import { Ingredient } from '@/app/utils/types'
import { useParams, useRouter } from 'next/navigation'
import { useCategoriesStore } from '@/app/store/categories'
import { useNotificationsStore } from '@/app/store/notifications'

export default function EditRecipe() {
  const router = useRouter()
  const params = useParams<{ id: string }>()
  const [description, setDescription] = useState<string>('')
  const [category, setCategory] = useState<number>(0)
  const { get, edit, remove } = useKitchenStore()
  const { categories } = useCategoriesStore()
  const { addNotification } = useNotificationsStore()
  const model: Ingredient = get(params.id)

  useEffect(() => {
    setDescription(model.description)
    setCategory(model.category)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  function handleSubmit () {
    const _model: Ingredient = {
      ...model,
      description: description,
      category: category
    }
    edit(_model)
    router.push('/kitchen')
    addNotification('Ingrediente editado')
  }

  function removeItem () {
    remove(params.id)
    router.push('/kitchen')
    addNotification('Ingrediente eliminado')
  }

  return (
    <main className={styles.create}>
      <header>
        <Link href="/kitchen">
          <span className="material-symbols-outlined">arrow_back_ios_new</span>
        </Link>
        <h2>Editar Ingrediente</h2>
      </header>
      <section className={styles.form}>
        <div className={styles.content_input}>
          <label htmlFor="title">Título</label>
          <input type="text" placeholder='Insertar el título' value={description} onChange={(e) => setDescription(e.target.value)}/>
        </div>
        <div className={styles.content_input}>
          <label htmlFor="description">Categoria</label>
          <div className={styles.list_ingredients}>
            {categories.map(item => (
              <button key={item.id} onClick={() => setCategory(item.id)} className={category == item.id ? styles.active : ''}>
                <i className="material-symbols-outlined">{item.icon}</i> {item.description}
              </button>
            ))}
          </div>
        </div>
        <button onClick={handleSubmit}>
          EDITAR
        </button>
        <button className={styles.button_outline} onClick={removeItem}>
          ELIMINAR
        </button>
      </section>
    </main>
  )
}