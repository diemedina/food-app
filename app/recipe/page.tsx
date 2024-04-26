import styles from './page.module.css'
import Link from 'next/link'

export default function Recipe() {
  return (
    <main className={styles.recipe}>
      <header>
        <h2>Recetas</h2>
        <Link href="/recipe/create">
          <span className='material-symbols-outlined'>add</span>
          Agregar
        </Link>
      </header>

      <section className={styles.listRecipe}>
        <article className={styles.listRecipe__item}>
          <span className="material-symbols-outlined">menu_book</span>
          <div>
            <strong>Rapiditas con palta/atun</strong>
            <small>4 Ingredientes</small>
          </div>
          <div className={styles.listRecipe__item__actions}>
            <button className={styles.active}>
              <i className='material-symbols-outlined'>ac_unit</i>
            </button>
          </div>
        </article>
        <article className={styles.listRecipe__item}>
          <span className="material-symbols-outlined">menu_book</span>
          <div>
            <strong>Rapiditas con palta/atun</strong>
            <small>4 Ingredientes</small>
          </div>
          <div className={styles.listRecipe__item__actions}>
            <button>
              <i className='material-symbols-outlined'>ac_unit</i>
            </button>
          </div>
        </article>
        <article className={styles.listRecipe__item}>
          <span className="material-symbols-outlined">menu_book</span>
          <div>
            <strong>Rapiditas con palta/atun</strong>
            <small>4 Ingredientes</small>
          </div>
          <div className={styles.listRecipe__item__actions}>
            <button>
              <i className='material-symbols-outlined'>ac_unit</i>
            </button>
          </div>
        </article>
        <article className={styles.listRecipe__item}>
          <span className="material-symbols-outlined">menu_book</span>
          <div>
            <strong>Rapiditas con palta/atun</strong>
            <small>4 Ingredientes</small>
          </div>
          <div className={styles.listRecipe__item__actions}>
            <button className={styles.active}>
              <i className='material-symbols-outlined'>ac_unit</i>
            </button>
          </div>
        </article>
        <article className={styles.listRecipe__item}>
          <span className="material-symbols-outlined">menu_book</span>
          <div>
            <strong>Rapiditas con palta/atun</strong>
            <small>4 Ingredientes</small>
          </div>
          <div className={styles.listRecipe__item__actions}>
            <button className={styles.active}>
              <i className='material-symbols-outlined'>ac_unit</i>
            </button>
          </div>
        </article>
        <article className={styles.listRecipe__item}>
          <span className="material-symbols-outlined">menu_book</span>
          <div>
            <strong>Rapiditas con palta/atun</strong>
            <small>4 Ingredientes</small>
          </div>
          <div className={styles.listRecipe__item__actions}>
            <button className={styles.active}>
              <i className='material-symbols-outlined'>ac_unit</i>
            </button>
          </div>
        </article>
        <article className={styles.listRecipe__item}>
          <span className="material-symbols-outlined">menu_book</span>
          <div>
            <strong>Rapiditas con palta/atun</strong>
            <small>4 Ingredientes</small>
          </div>
          <div className={styles.listRecipe__item__actions}>
            <button className={styles.active}>
              <i className='material-symbols-outlined'>ac_unit</i>
            </button>
          </div>
        </article>
      </section>
    </main>
  )
}