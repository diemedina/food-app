"use client"

import Link from 'next/link'
import { useCalendarStore } from '../store/calendar'
import styles from './page.module.css'
import { days } from '../utils/types'

export default function Calendar() {
  const { items } = useCalendarStore()
  
  return (
    <main className={styles.calendar}>
      <header>
        <h2>Calendario</h2>
      </header>

      <section className={styles.listDays}>
        {
          items.map(item => (
            <Link href={`/calendar/${item.day}`} key={item.day}>
              <article className={styles.listDays__day}>
                <span className="material-symbols-outlined">calendar_month</span>
                <h3>{days[item.day]}</h3>
                <section className={styles.listDays__day__section}>
                  {item.foods.map((food, idx) => (
                    <div className={styles.listDays__day__section__item} key={food.id}>
                      <span className="material-symbols-outlined">restaurant</span>
                      <div>
                        <strong>{idx == 0 ? 'Almuerzo' : 'Cena'}</strong>
                        <h4>{food.title}</h4>
                      </div>
                    </div>
                  ))}
                </section>
              </article>
            </Link>
          ))
        }
      </section>
    </main>
  )
}