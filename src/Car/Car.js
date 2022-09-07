import './Car.css';
// function Car() {
//   return (
//     <h3>This is car compomemt</h3>
//   )
// };

// const car = () => {
//   return (
//     <h3>This is car compomemt</h3>
//   )
// };

// // Без фигурных кобок стрелочная функция возращает запись сразу ES6
// const carMini = () => <h3>This is car compomemt</h3>;

// // Скобки позволяют, вернуть несколько строк сразу
// const carMiniProgressive = () => (
//   <div>
//     <h3>This is car compomemt</h3>
//     <strong>Test</strong>
//   </div>
// );

// export default carMiniProgressive;

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => (
  <div className="Car">
    <p>Car name: <strong>{props.name}</strong></p>
    <p>Year: <strong>{props.year}</strong></p>
    <input type={'text'} onChange={props.onChangeName} value={props.name}></input>
    <button onClick={props.onDelete}>delete</button>
  </div>
)