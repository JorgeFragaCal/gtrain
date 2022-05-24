import styles from "styles/Filter.module.scss";

function Filter({ filtros }) {
  return (
    <section className={styles.container}>
      <span>
        <strong>Ver todo</strong>
      </span>
      <div className={styles.filters}>
        {filtros.map((i) => (
          <span key={i}>{i} </span>
        ))}
      </div>
      <div>Ordenar por:</div>
    </section>
  );
}

export default Filter;
