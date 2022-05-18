import FormRow from "./FormRow";
import styles from "../../styles/Form.module.scss";
import Button from "../atoms/Button";
function Form() {
  const listaEjercicos = [
    {
      id: 1,
      name: "burpee",
      reps: "7",
      weigth: "",
    },
    {
      id: 2,
      name: "air squads",
      reps: "7",
      weigth: "30",
    },
    {
      id: 3,
      name: "push ups",
      reps: "7",
      weigth: "",
    },
  ];
  return (
    <>
      <form action="" method="post" className={styles.container}>
        <div className={styles.formTop}>
          <input type="text" name="" id="" placeholder="Nombre del WOD" />
          <i>Cerrar</i>
        </div>
        <div className={styles.formList}>
          <label htmlFor="">Ejecicio</label>
          <label htmlFor="">Repeticiones</label>
          <label htmlFor="">Peso</label>
          <label htmlFor=""></label>
        </div>
        {listaEjercicos.map((i) => (
          <div key={i.id} className={styles.formList}>
            <p>{i.name}</p>
            <p>{i.reps}</p>
            <p>{i.weigth}</p>
            <div className={styles.formEditIcons}>
              <i>Editar</i>
              <i>Eliminar</i>
            </div>
          </div>
        ))}
        <div className={styles.formFieldset}>
          <FormRow />
          <input type="number" name="" id="" placeholder="0" />
          <input type="number" name="" id="" placeholder="0" />
          <div className={styles.formButton}>
            <Button text={"Añadir"} type={"primary"} />
          </div>
        </div>
        <div className={styles.formFooter}>
          <input type="number" name="" id="" placeholder="Tiempo" />
          <input type="number" name="" id="" placeholder="Rondas" />
        </div>
        <div className={styles.formButton}>
          <Button text={"Crear"} type={"primary"} />
        </div>
      </form>
      <div className={styles.overlay}></div>
    </>
  );
}

export default Form;
