import './inputText.css'

export default function InputText(props) {
  const changed = (e) => {
    props.hasValue(e.target.value);
  };

  return (
    <div className="inputTxt">
      <label>{props.label}</label>
      <input type="text" placeholder={props.placeholder} value={props.value} onChange={changed} />
    </div>
  );
}
