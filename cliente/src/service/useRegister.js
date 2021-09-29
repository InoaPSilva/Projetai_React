import React, { useState } from "react";

export default function useRegister(){
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ enrollment, setEnrollment ] = useState('');
    const [ cpf, setCpf ] = useState('');

}