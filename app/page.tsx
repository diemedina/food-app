import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.home}>
      <header className={styles.header}>
        <h2>Hola, Diego</h2>
        <Link href="/cart">
          <span className="material-symbols-outlined">shopping_cart</span>
        </Link>
      </header>

      <article className={styles.today}>
        <span className="material-symbols-outlined">calendar_month</span>
        <h3>Calendario</h3>
        <section className={styles.today__section}>
          <div className={styles.today__section__item}>
            <span className="material-symbols-outlined">restaurant</span>
            <div>
              <strong>Almuerzo</strong>
              <h4>Milanesas de soja con capresse</h4>
            </div>
          </div>
          <hr />
          <div className={styles.today__section__item}>
            <span className="material-symbols-outlined">restaurant</span>
            <div>
              <strong>Cena</strong>
              <h4>Guiso de lentejas</h4>
            </div>
          </div>
        </section>
      </article>

      <section className={styles.recipe}>
        <h3>Recetas</h3>
        <div className={styles.listRecipe}>
          <article className={styles.listRecipe__item}>
            <span className="material-symbols-outlined">menu_book</span>
            <div>
              <strong>Rapiditas con palta/atun</strong>
              <small>5 Ingredientes</small>
            </div>
            <span className="material-symbols-outlined">expand_less</span>
            <div className={styles.listRecipe__item__description}>
              <ul>
                <li className={styles.active}>
                  <i className="material-symbols-outlined">check</i> Rapiditas
                </li>
                <li>
                  <i className="material-symbols-outlined">horizontal_rule</i> Tomate
                </li>
                <li>
                  <i className="material-symbols-outlined">horizontal_rule</i> Cebolla
                </li>
                <li className={styles.active}>
                  <i className="material-symbols-outlined">check</i> Palta
                </li>
                <li className={styles.active}>
                  <i className="material-symbols-outlined">check</i> Queso Crema
                </li>
              </ul>
            </div>
          </article>

          <article className={styles.listRecipe__item}>
            <span className="material-symbols-outlined">menu_book</span>
            <div>
              <strong>Milanesas con cabutia</strong>
              <small>4 Ingredientes</small>
            </div>
            <span className="material-symbols-outlined">expand_more</span>
          </article>

          <article className={styles.listRecipe__item}>
            <span className="material-symbols-outlined">menu_book</span>
            <div>
              <strong>Hamburguesas</strong>
              <small>4 Ingredientes</small>
            </div>
            <span className="material-symbols-outlined">expand_more</span>
          </article>

          <article className={styles.listRecipe__item}>
            <span className="material-symbols-outlined">menu_book</span>
            <div>
              <strong>Fideos verdes con crema</strong>
              <small>4 Ingredientes</small>
            </div>
            <span className="material-symbols-outlined">expand_more</span>
          </article>
        </div>
      </section>

      <section className={styles.shop}>
        <h3>Compras</h3>
        <div className={styles.listShop}>
          <article className={styles.listShop__item}>
            <span className="material-symbols-outlined">grocery</span>
            <div>
              <strong>Leche</strong>
              <small>Lacteos</small>
            </div>
          </article>

          <article className={styles.listShop__item}>
            <span className="material-symbols-outlined">grocery</span>
            <div>
              <strong>Crema</strong>
              <small>Lacteos</small>
            </div>
          </article>

          <article className={styles.listShop__item}>
            <span className="material-symbols-outlined">nutrition</span>
            <div>
              <strong>Cebolla</strong>
              <small>Frutas / Verduras</small>
            </div>
          </article>

          <article className={styles.listShop__item}>
            <span className="material-symbols-outlined">grocery</span>
            <div>
              <strong>Fideos verdes</strong>
              <small>Alacena</small>
            </div>
          </article>
        </div>
      </section>
    </main>    
  );
}
