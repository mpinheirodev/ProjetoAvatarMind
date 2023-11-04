import { attributes } from "../../data.jsx";
import { useState } from "react";

export default function Select(props) {

  // const [atributos, setAttributos] = useState({
  //   avatarStyle: "Circle",
  //   topType: "NoHair",
  //   accessoriesType: "Blank",
  //   hairColor: "Auburn",
  //   facialHairType: "Blank",
  //   facialHairColor: "Auburn",
  //   clotheType: "BlazerShirt",
  //   clotheColor: "Black",
  //   eyeType: "Close",
  //   eyebrowType: "Angry",
  //   mouthType: "Concerned",
  //   skinColor: "Tanned",
  // })

  const selected = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  }

  return (
    <div className="select_attributes">
      <h2>Crie seu avatar</h2>

      {attributes.map(attribute =>
      <div key={attribute.attribute}>
        <label>{attribute.label}</label>
        <select onChange={selected} value={attribute.attribute}>
          {attribute.value.map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
      </div>
        )}
    </div>
  );
}
