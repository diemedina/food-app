"use client"

import { useEffect, useState } from 'react'
import styles from '../create/page.module.css'
import Link from 'next/link'
import { useKitchenStore } from '@/app/store/kitchen'
import { Ingredient } from '@/app/utils/types'
import { useParams, useRouter } from 'next/navigation'

export default function EditRecipe() {
  const router = useRouter()
  const params = useParams<{ id: string }>()
  const [description, setDescription] = useState<string>('')
  const [category, setCategory] = useState<string>('')
  const { get, edit, remove } = useKitchenStore()
  const model: Ingredient = get(params.id)

  useEffect(() => {
    setDescription(model.description)
    setCategory(model.category)
  }, [])
  
  function handleSubmit () {
    const _model: Ingredient = {
      ...model,
      description: description,
      category: category
    }
    edit(_model)
    router.push('/kitchen')
    // TODO: mostrar la notificación
  }

  function removeItem () {
    remove(params.id)
    router.push('/kitchen')
    // TODO: mostrar la notificación
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
          <ul className={styles.list_ingredients}>
            <li onClick={() => setCategory('Lacteos')} className={category == 'Lacteos' ? styles.active : ''}>
              <i className="material-symbols-outlined">{category == 'Lacteos' ? 'check' : 'check_indeterminate_small'}</i> Lacteos
            </li>
            <li onClick={() => setCategory('Secos')} className={category == 'Secos' ? styles.active : ''}>
              <i className="material-symbols-outlined">{category == 'Secos' ? 'check' : 'check_indeterminate_small'}</i> Secos
            </li>
            <li onClick={() => setCategory('Limpieza')} className={category == 'Limpieza' ? styles.active : ''}>
              <i className="material-symbols-outlined">{category == 'Limpieza' ? 'check' : 'check_indeterminate_small'}</i> Limpieza
            </li>
            <li onClick={() => setCategory('Congelados')} className={category == 'Congelados' ? styles.active : ''}>
              <i className="material-symbols-outlined">{category == 'Congelados' ? 'check' : 'check_indeterminate_small'}</i> Congelados
            </li>
          </ul>
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