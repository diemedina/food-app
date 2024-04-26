import Link from 'next/link'
import styles from './page.module.css'

export default function Kitchen() {
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
        <article className={styles.listItems__item}>
          <span className="material-symbols-outlined">grocery</span>
          <div>
            <strong>Rapiditas</strong>
            <small>Alacena</small>
          </div>
          <div className={styles.listItems__item__actions}>
            <button className={styles.active}>
              <i className='material-symbols-outlined'>shopping_cart</i>
            </button>
            <button>
              <i className='material-symbols-outlined'>horizontal_rule</i>
            </button>
          </div>
        </article>
        <article className={styles.listItems__item}>
          <span className="material-symbols-outlined">grocery</span>
          <div>
            <strong>Arroz</strong>
            <small>Alacena</small>
          </div>
          <div className={styles.listItems__item__actions}>
            <button>
              <i className='material-symbols-outlined'>shopping_cart_off</i>
            </button>
            <button className={styles.active}>
              <i className='material-symbols-outlined'>done</i>
            </button>
          </div>
        </article>
        <article className={styles.listItems__item}>
          <span className="material-symbols-outlined">grocery</span>
          <div>
            <strong>Harina</strong>
            <small>Alacena</small>
          </div>
          <div className={styles.listItems__item__actions}>
            <button>
              <i className='material-symbols-outlined'>shopping_cart_off</i>
            </button>
            <button className={styles.active}>
              <i className='material-symbols-outlined'>done</i>
            </button>
          </div>
        </article>
        <article className={styles.listItems__item}>
          <span className="material-symbols-outlined">grocery</span>
          <div>
            <strong>Salsa de tomate</strong>
            <small>Alacena</small>
          </div>
          <div className={styles.listItems__item__actions}>
            <button>
              <i className='material-symbols-outlined'>shopping_cart_off</i>
            </button>
            <button className={styles.active}>
              <i className='material-symbols-outlined'>done</i>
            </button>
          </div>
        </article>
        <article className={styles.listItems__item}>
          <span className="material-symbols-outlined">grocery</span>
          <div>
            <strong>Pure chef</strong>
            <small>Alacena</small>
          </div>
          <div className={styles.listItems__item__actions}>
            <button>
              <i className='material-symbols-outlined'>shopping_cart_off</i>
            </button>
            <button className={styles.active}>
              <i className='material-symbols-outlined'>done</i>
            </button>
          </div>
        </article>
      </section>
    </main>
  )
}