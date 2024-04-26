import styles from './page.module.css'
import Link from 'next/link'

export default function CreateRecipe() {
  return (
    <main className={styles.create}>
      <header>
        <Link href="/recipe">
          <span className="material-symbols-outlined">arrow_back_ios_new</span>
        </Link>
        <h2>Crear receta</h2>
      </header>
      <section className={styles.form}>
        <div className={styles.content_input}>
          <label htmlFor="title">Título</label>
          <input type="text" placeholder='Insertar el título' />
        </div>
        <div className={styles.content_input}>
          <label htmlFor="description">Description</label>
          <input type='text' placeholder='Insertar la descripción'/>
        </div>
        <div className={styles.content_input}>
          <label htmlFor="description">Ingredientes</label>
          <ul className={styles.list_ingredients}>
            <li>
              <i className="material-symbols-outlined">check</i> Rapiditas <div className={styles.category}>Alacena</div>
            </li>
            <li>
              <i className="material-symbols-outlined">check</i> Rapiditas <div className={styles.category}>Alacena</div>
            </li>
            <li>
              <i className="material-symbols-outlined">check</i> Rapiditas <div className={styles.category}>Alacena</div>
            </li>
            <li>
              <i className="material-symbols-outlined">check</i> Rapiditas <div className={styles.category}>Alacena</div>
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