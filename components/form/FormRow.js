import data from "../../data/lista_ejercicios.json";
function FormRow() {
  return (
    <>
      <select name="" id="">
        {data.exercise_list.map((i) => (
          <option key={i.id} value="i.name">
            {i.name}
          </option>
        ))}
      </select>
    </>
  );
}

export default FormRow;
