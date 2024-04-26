import styles from './page.module.css'
import Link from 'next/link'

export default function CreateRecipe() {
  return (
    <main className={styles.create}>
      <header>
        <Link href="/kitchen">
          <span className="material-symbols-outlined">arrow_back_ios_new</span>
        </Link>
        <h2>Agregar Ingrediente</h2>
      </header>
      <section className={styles.form}>
        <div className={styles.content_input}>
          <label htmlFor="title">Título</label>
          <input type="text" placeholder='Insertar el título' />
        </div>
        <div className={styles.content_input}>
          <label htmlFor="description">Categoria</label>
          <ul className={styles.list_ingredients}>
            <li>
              <i className="material-symbols-outlined">check</i> Lacteos
            </li>
            <li>
              <i className="material-symbols-outlined">check</i> Secos
            </li>
            <li>
              <i className="material-symbols-outlined">check</i> Limpieza
            </li>
            <li>
              <i className="material-symbols-outlined">check</i> Congelados
            </li>
          </ul>
        </div>
        <button>
          AGREGAR
        </button>
      </section>
    </main>
  )
}