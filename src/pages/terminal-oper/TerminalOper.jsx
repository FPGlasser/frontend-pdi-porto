import React, { useEffect, useState } from "react";
import  terminals  from "../../data/terminais.json";
import { validateStatusTerminal } from "../../utils";
import { useParams, useNavigate } from "react-router-dom";
import Home from "../home/Home"

const TerminalOper = () => {
  const { code } = useParams();
  const navigate = useNavigate()
  const [terminal, setTerminal] = useState()

  useEffect(() => {
   const founded = validateStatusTerminal(code, terminals);
   if(founded !== undefined && founded.status === 'Operando'){
    setTerminal(founded)
   }
   else{
    console.log(founded)
    navigate({to: '*'})
   }
  }, []);

  return (
    <div>
      <Home/>
    </div>
  )
};

export default TerminalOper;
