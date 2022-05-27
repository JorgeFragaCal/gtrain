import data from "data/lista_ejercicios.json";
import { useRouter } from "next/router";
import styles from "styles/Form.module.scss";
import Button from "components/atoms/Button";
import { useState } from "react";
import { addWod } from "utils/client";
function Form({ setOpen }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [ejercicio, setEjercicio] = useState({
    name: "",
    reps: "",
    weigth: "",
  });
  const [listaEjercicos, setlistaEjercicos] = useState([]);
  const { name, reps, weigth } = ejercicio;

  const [wod, setWod] = useState({
    title: "",
    time: "",
    rounds: "",
    exercise: [],
  });
  const { title, time, rounds, exercise } = wod;

  const onChangeExercice = (e) => {
    setEjercicio({
      ...ejercicio,
      [e.target.name]: e.target.value,
    });
  };

  const addExercice = (e) => {
    e.preventDefault();
    if (name.trim() === "" || reps.trim() === "") {
      return;
    }
    setlistaEjercicos([...listaEjercicos, ejercicio]);
    setEjercicio({
      name: "",
      reps: "",
      weigth: "",
    });
  };

  const onChange = (e) => {
    setWod({
      ...wod,
      [e.target.name]: e.target.value,
      exercise: listaEjercicos,
    });
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (
      title.trim() === "" ||
      time.trim() === "" ||
      rounds.trim() === "" ||
      exercise.length === 0
    ) {
      window.alert("Faltan campos por rellenar");
      return;
    }
    addWod(wod);
    setLoading(!loading);
    setWod({
      title: "",
      time: "",
      rounds: "",
      exercise: [],
    });
    setlistaEjercicos([]);
    setTimeout(() => {
      router.reload(window.location.pathname);
    }, 2000);
  };
  return (
    <>
      <form action="" method="post" className={styles.container}>
        <div className={styles.formTop}>
          <input
            type="text"
            name="title"
            id=""
            placeholder="Nombre del WOD*"
            value={title}
            onChange={onChange}
          />
          <i onClick={setOpen}>X</i>
        </div>
        <div className={styles.formList}>
          <label htmlFor="">Ejecicio</label>
          <label htmlFor="">Repeticiones</label>
          <label htmlFor="">Peso</label>
          <label htmlFor=""></label>
        </div>
        {listaEjercicos
          ? listaEjercicos.map((i) => (
              <div key={i.name} className={styles.formList}>
                <p>{i.name}</p>
                <p>{i.reps}</p>
                <p>{i.weigth}</p>
                <div className={styles.formEditIcons}>
                  <i>Editar</i>
                  <i>Eliminar</i>
                </div>
              </div>
            ))
          : null}
        <div className={styles.formFieldset}>
          <select
            name="name"
            id=""
            value={name}
            onChange={onChangeExercice}
            placeholder="Seleccionar Ejercicio"
          >
            <option value="" disabled selected hidden>
              Escoge Ejercicio*...
            </option>
            {data.map((i) => (
              <option key={i.id} value={i.name}>
                {i.name}
              </option>
            ))}
          </select>
          <input
            type="number"
            name="reps"
            id=""
            placeholder="0*"
            value={reps}
            onChange={onChangeExercice}
          />
          <input
            type="number"
            name="weigth"
            id=""
            placeholder="0"
            value={weigth}
            onChange={onChangeExercice}
          />
          <div className={styles.formButton}>
            <Button
              onClick={addExercice}
              text={"Añadir"}
              style={"primary"}
              value="addExercice"
              name="action"
            />
          </div>
        </div>
        <div className={styles.formFooter}>
          <input
            type="number"
            name="time"
            id=""
            placeholder="Tiempo (min)*"
            value={time}
            onChange={onChange}
          />
          <input
            type="text"
            name="rounds"
            id=""
            placeholder="Rondas (5,6,7 max)*"
            value={rounds}
            onChange={onChange}
          />
        </div>
        <div className={styles.formButton}>
          <Button
            onClick={onSubmitForm}
            text={"Crear"}
            style={"primary"}
            value="addWod"
            name="action"
            loading={loading}
          />
        </div>
      </form>
      <div className={styles.overlay} onClick={setOpen}></div>
    </>
  );
}

export default Form;
