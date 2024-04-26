import styles from './page.module.css'

export default function Cart() {
  return (
    <main className={styles.cart}>
      <header>
        <h2>Compras</h2>
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
              <i className='material-symbols-outlined'>remove_shopping_cart</i>
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
            <button className={styles.active}>
              <i className='material-symbols-outlined'>remove_shopping_cart</i>
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
            <button className={styles.active}>
              <i className='material-symbols-outlined'>remove_shopping_cart</i>
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
            <button className={styles.active}>
              <i className='material-symbols-outlined'>remove_shopping_cart</i>
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
            <button className={styles.active}>
              <i className='material-symbols-outlined'>remove_shopping_cart</i>
            </button>
          </div>
        </article>
      </section>
    </main>
  )
}