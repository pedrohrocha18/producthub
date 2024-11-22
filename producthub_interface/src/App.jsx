import axios from "axios";
import React, { useEffect, useState } from "react";

const App = () => {
  const [dados, setDados] = useState([]);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    axios
      .get("https://producthub-jade.vercel.app/user/")
      .then((response) => setDados(response))
      .catch((erro) => setErro(erro));
  }, []);

  if (erro) {
    return <div>Deu erro</div>;
  }
  return (
    <div>
      <h1>opa!</h1>
      {dados}
    </div>
  );
};

export default App;
