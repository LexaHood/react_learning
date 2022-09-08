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
export default (props) => {
  const inputClasses = ['input'];

  if (props.name !== '') {
    inputClasses.push('green');
  } else {
    inputClasses.push('red');
  }

  if (props.name.lenght > 6) {
    inputClasses.push('bold');
  }

  const style = {
    border: '1px solid #ccc',
    boxShadow: '0 4px 5px 0 rgba(0, 0, 0, .14)'
  };

  return (
    <div className="Car" style={style}>
      <p>Car name: <strong>{props.name}</strong></p>
      <p>Year: <strong>{props.year}</strong></p>
      <input
        type={'text'}
        onChange={props.onChangeName}
        value={props.name}
        className={inputClasses.join(' ')}
        >
      </input>
      <button onClick={props.onDelete}>delete</button>
    </div>
  );
}