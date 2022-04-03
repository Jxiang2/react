import { useContext, useState } from "react";
import { themeContext } from "../contexts/themeContext";
import { useAxios } from "../Hooks/useAxios";
import { useAxiosGet } from "../Hooks/useAxiosGet";

export default function UseEffect () {
  const theme = useContext(themeContext);
  const [url, setUrl] = useState("http://3.144.236.185:8000/planets");
  const { response } = useAxiosGet(url, "");
  useAxios();

  const changeUrl = () => {
    if (url === "http://3.144.236.185:8000/planets")
      setUrl("http://3.144.236.185:8000/launches");
    else
      setUrl("http://3.144.236.185:8000/planets");
  };

  console.log(response);

  return (
    <div style={ { backgroundColor: theme?.backgroundColor } }>
      HTTP CRUD Workflow
      <p>This Page is for demostrating the useAxios and useAxiosGet hook</p>
      <button onClick={ changeUrl }>change url</button>
    </div>
  );
}