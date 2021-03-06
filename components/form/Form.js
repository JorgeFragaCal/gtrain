import data from "data/lista_ejercicios.json";
import { v4 as uuidv4 } from "uuid";
import { addWod } from "utils/client";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "styles/Form.module.scss";
import Button from "components/atoms/Button";
import Image from "next/image";

function Form({ setOpen }) {
  const router = useRouter();
  const [check, setCheck] = useState(false);
  const [loading, setLoading] = useState(false);
  const [ejercicio, setEjercicio] = useState({
    id: "",
    name: "",
    reps: "",
    weigth: "",
  });
  const [listaEjercicos, setlistaEjercicos] = useState([]);
  const { name, reps, weigth } = ejercicio;

  const [wod, setWod] = useState({
    id: "",
    title: "",
    destacado: false,
    time: "",
    rounds: "",
    exercise: [],
  });
  const { title, time, rounds, exercise } = wod;

  const toggleCheckboxChange = () => {
    setCheck(!check);
  };

  const addExercice = (e) => {
    e.preventDefault();
    if (name.trim() === "") {
      window.alert("Añade un Ejercicio");
      return;
    }
    setlistaEjercicos([...listaEjercicos, ejercicio]);
    setEjercicio({
      id: "",
      name: "",
      reps: "",
      weigth: "",
    });
  };

  const onChange = (e) => {
    setEjercicio({
      ...ejercicio,
      [e.target.name]: e.target.value,
      id: uuidv4(),
    });
    setWod({
      ...wod,
      [e.target.name]: e.target.value,
      exercise: listaEjercicos,
      destacado: !check,
      id: uuidv4(),
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
      id: "",
      title: "",
      destacado: false,
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
          <label className={styles.containerC}>
            <input
              type="checkbox"
              value={check}
              name="destacado"
              checked={check}
              onChange={(e) => {
                toggleCheckboxChange();
                onChange(e);
              }}
            />
            Destacado
            <span className={styles.checkmark}></span>
          </label>
          <div>
            <Image
              onClick={setOpen}
              src="/Close.svg"
              alt=""
              width={20}
              height={20}
            />
          </div>
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
                  <Image src="/Edit.svg" alt="" width={20} height={20} />
                  <Image src="/Delete.svg" alt="" width={20} height={20} />
                </div>
              </div>
            ))
          : null}
        <div className={styles.formFieldset}>
          <select
            name="name"
            id=""
            value={name}
            onChange={onChange}
            defaultValue
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
            placeholder="0"
            value={reps}
            onChange={onChange}
          />
          <input
            type="number"
            name="weigth"
            id=""
            placeholder="0"
            value={weigth}
            onChange={onChange}
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
            placeholder="Rondas (5,6,7, max)*"
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
