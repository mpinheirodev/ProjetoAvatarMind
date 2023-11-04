import Select from "../select";
import { useState } from "react";

export default function Form(props) {

  

    function handleSubmit(e){
        e.preventDefault();
        console.log(e.target.value);
    }
  return (
    <div className="form_avatar">
      <form onSubmit={handleSubmit}>
        <Select />
        <button type="submit">Criar Avatar</button>
      </form>
    </div>
  );
}
