import { useRef, useState } from "react";

const SubmitForm = () => {
  const [title, setTitile] = useState<string>('');
  const [newIngredient, setNewIngredient] = useState<string>('');
  const [ingredients, SetIngredients] = useState<string[]>([]);
  const ingredientInput = useRef<HTMLInputElement>(null);

  const handleAdd = (e: React.SyntheticEvent) => {
    e.preventDefault(); // prevent refresh
    const ing = newIngredient.trim();
    if (ing && !ingredients.includes(ing)) {
      SetIngredients(PrevIngredients => [...PrevIngredients, ing]);
    }
    setNewIngredient('');
    ingredientInput.current?.focus();
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault(); // prevent refresh
    setTimeout(() => {
      console.log("title: ", title);
      console.log("ingredients: ", ingredients);
    }, 2);
  };

  return (
    <div>
      SubmitForm
      <form onSubmit={ handleSubmit }>
        <p>recipie title</p>
        <input
          type="text"
          onChange={ (e) => setTitile(e.target.value) }
          value={ title }
          required
        />

        <p>recipie ingradients</p>
        <input type="text"
          onChange={ (e) => setNewIngredient(e.target.value) }
          value={ newIngredient }
          ref={ ingredientInput }
        />
        <button className='btn' onClick={ handleAdd }>add</button>
        <p>
          Current Ingredients:
          { ingredients.map(ing => (<em key={ ing }>{ ing }, </em>)) }
        </p>

        <button>Submit</button>
      </form>
    </div>
  );
};

export default SubmitForm;

