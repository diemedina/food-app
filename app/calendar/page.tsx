import styles from './page.module.css'

export default function Calendar() {
  return (
    <main className={styles.calendar}>
      <header>
        <h2>Calendario</h2>
      </header>

      <section className={styles.listDays}>
        <article className={styles.listDays__day}>
          <span className="material-symbols-outlined">calendar_month</span>
          <h3>Lunes</h3>
          <section className={styles.listDays__day__section}>
            <div className={styles.listDays__day__section__item}>
              <span className="material-symbols-outlined">restaurant</span>
              <div>
                <strong>Almuerzo</strong>
                <h4>Milanesas de soja con capresse</h4>
              </div>
            </div>
            <hr />
            <div className={styles.listDays__day__section__item}>
              <span className="material-symbols-outlined">restaurant</span>
              <div>
                <strong>Cena</strong>
                <h4>Guiso de lentejas</h4>
              </div>
            </div>
          </section>
        </article>
        <article className={styles.listDays__day}>
          <span className="material-symbols-outlined">calendar_month</span>
          <h3>Martes</h3>
          <section className={styles.listDays__day__section}>
            <div className={styles.listDays__day__section__item}>
              <span className="material-symbols-outlined">restaurant</span>
              <div>
                <strong>Almuerzo</strong>
                <h4>Milanesas de soja con capresse</h4>
              </div>
            </div>
            <hr />
            <div className={styles.listDays__day__section__item}>
              <span className="material-symbols-outlined">restaurant</span>
              <div>
                <strong>Cena</strong>
                <h4>Guiso de lentejas</h4>
              </div>
            </div>
          </section>
        </article>
        <article className={styles.listDays__day}>
          <span className="material-symbols-outlined">calendar_month</span>
          <h3>Miercoles</h3>
          <section className={styles.listDays__day__section}>
            <div className={styles.listDays__day__section__item}>
              <span className="material-symbols-outlined">restaurant</span>
              <div>
                <strong>Almuerzo</strong>
                <h4>Milanesas de soja con capresse</h4>
              </div>
            </div>
            <hr />
            <div className={styles.listDays__day__section__item}>
              <span className="material-symbols-outlined">restaurant</span>
              <div>
                <strong>Cena</strong>
                <h4>Guiso de lentejas</h4>
              </div>
            </div>
          </section>
        </article>
        <article className={styles.listDays__day}>
          <span className="material-symbols-outlined">calendar_month</span>
          <h3>Jueves</h3>
          <section className={styles.listDays__day__section}>
            <div className={styles.listDays__day__section__item}>
              <span className="material-symbols-outlined">restaurant</span>
              <div>
                <strong>Almuerzo</strong>
                <h4>Milanesas de soja con capresse</h4>
              </div>
            </div>
            <hr />
            <div className={styles.listDays__day__section__item}>
              <span className="material-symbols-outlined">restaurant</span>
              <div>
                <strong>Cena</strong>
                <h4>Guiso de lentejas</h4>
              </div>
            </div>
          </section>
        </article>
        <article className={styles.listDays__day}>
          <span className="material-symbols-outlined">calendar_month</span>
          <h3>Viernes</h3>
          <section className={styles.listDays__day__section}>
            <div className={styles.listDays__day__section__item}>
              <span className="material-symbols-outlined">restaurant</span>
              <div>
                <strong>Almuerzo</strong>
                <h4>Milanesas de soja con capresse</h4>
              </div>
            </div>
            <hr />
            <div className={styles.listDays__day__section__item}>
              <span className="material-symbols-outlined">restaurant</span>
              <div>
                <strong>Cena</strong>
                <h4>Guiso de lentejas</h4>
              </div>
            </div>
          </section>
        </article>
        <article className={styles.listDays__day}>
          <span className="material-symbols-outlined">calendar_month</span>
          <h3>Sabado</h3>
          <section className={styles.listDays__day__section}>
            <div className={styles.listDays__day__section__item}>
              <span className="material-symbols-outlined">restaurant</span>
              <div>
                <strong>Almuerzo</strong>
                <h4>Milanesas de soja con capresse</h4>
              </div>
            </div>
            <hr />
            <div className={styles.listDays__day__section__item}>
              <span className="material-symbols-outlined">restaurant</span>
              <div>
                <strong>Cena</strong>
                <h4>Guiso de lentejas</h4>
              </div>
            </div>
          </section>
        </article>
        <article className={styles.listDays__day}>
          <span className="material-symbols-outlined">calendar_month</span>
          <h3>Domingo</h3>
          <section className={styles.listDays__day__section}>
            <div className={styles.listDays__day__section__item}>
              <span className="material-symbols-outlined">restaurant</span>
              <div>
                <strong>Almuerzo</strong>
                <h4>Milanesas de soja con capresse</h4>
              </div>
            </div>
            <hr />
            <div className={styles.listDays__day__section__item}>
              <span className="material-symbols-outlined">restaurant</span>
              <div>
                <strong>Cena</strong>
                <h4>Guiso de lentejas</h4>
              </div>
            </div>
          </section>
        </article>
      </section>
    </main>
  )
}