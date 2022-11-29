import React from "react";
import { useState } from "react";
import "../html-css-template/css/EmpresaLogin.css";
import { useNavigate } from "react-router-dom";
import apiUsuario from "../api";

function LoginEmpresa(props) {
  const [modal, setModal] = useState(false);

  const [nomeInput, setNomeInput] = useState(props.nome);
  const [usuarioInput, setUsuarioInput] = useState(props.usuario);
  const [emailInput, setEmailInput] = useState(props.email);
  const [senhaInput, setSenhaInput] = useState(props.senha);
  const [cnpjInput, setCnpjInput] = useState(props.cpf);
  const [dataNascimentoInput, setDataNascimentoInput] = useState(props.dataNascimento);
  const [telefoneInput, setTelefoneInput] = useState(props.telefone);
  const [cepInput, setCepInput] = useState(props.cep);
  const [ruaInput, setRuaInput] = useState(props.rua);
  const [bairroInput, setBairroInput] = useState(props.bairro);
  const [cidadeInput, setCidadeInput] = useState(props.cidade);
  const [complementoInput, setComplementoInput] = useState(props.complemento);
  const [numeroInput, setNumeroInput] = useState(props.numero);
  const [numeroFuncInput, setNumeroFuncInput] = useState(props.numFuncionario);

  const navegar = useNavigate();

  function adicionarEmpresa() {
    const novaEmpresa = {
      email: emailInput,
      senha: senhaInput,
      nome: nomeInput,
      cnpj: cnpjInput,
      dataNascimento: dataNascimentoInput,
      telefone: telefoneInput,
      cep: cepInput,
      rua: ruaInput,
      bairro: bairroInput,
      cidade: cidadeInput,
      complemento: complementoInput,
      numero: numeroInput,
      usuario: usuarioInput,
      numFuncionario: numeroFuncInput
    };

    // /musica-box/{id}
    apiUsuario.post("/empresas", novaEmpresa).then((res) => {
        window.location.reload();
    }).catch((erro) => {
        alert("Deu erro, se vira!");
        console.log(erro);
      });
    console.log(novaEmpresa);
    
  }

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
    document.body.style.overflow = "hidden";
  } else {
    document.body.classList.remove("active-modal");
    document.body.style.overflow = "auto";
  }

  return (
    <div>
      <button onClick={toggleModal} className="defaultButtonEmpresa">
        Empresa
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-contentEmpresa">
            <form action="" className="formStyle">
              <div className="alignCards">
                <div className="flex-gapInputs">
                  <div className="boxContentOneEmpresa">
                    <b>Nome</b>
                    <input
                      type="text"
                      placeholder="Flávio"
                      className="customInput"
                      onChange={(e) => setNomeInput(e.target.value)}
                    />

                    <b>Email</b>
                    <input
                      type="text"
                      placeholder="reis@hotmail.com"
                      className="customInput"
                      onChange={(e) => setEmailInput(e.target.value)}
                    />

                    <b>Usuario</b>
                    <input
                      type="text"
                      placeholder="reis@hotmail.com"
                      className="customInput"
                      onChange={(e) => setUsuarioInput(e.target.value)}
                    />

                    <b>Senha</b>
                    <input 
                    type="password" 
                    className="customInput" 
                    onChange={(e) => setSenhaInput(e.target.value)}
                    />

                    <b>CPNJ </b>
                    <input
                      type="text"
                      placeholder="XX XX XXXXX-XXXX"
                      className="customInput"
                      onChange={(e) => setCnpjInput(e.target.value)}
                    />

                    <b>Data nascimento </b>
                    <input
                      type="text"
                      placeholder="__ / __ / __"
                      className="customInput"
                      onChange={(e) => setDataNascimentoInput(e.target.value)}
                    />

                    <b>Telefone </b>
                    <input 
                    type="text" 
                    placeholder="" 
                    className="customInput"
                    onChange={(e) => setTelefoneInput(e.target.value)}
                    />
                  </div>

                  <div className="boxContentTwoEmpresa">
                    <b>CEP </b>
                    <input
                      type="text"
                      placeholder="Seu bairro"
                      className="customInput"
                      onChange={(e) => setCepInput(e.target.value)}
                    />

                    <b>Cidade </b>
                    <input
                      type="text"
                      placeholder="Seu bairro"
                      className="customInput"
                      onChange={(e) => setCidadeInput(e.target.value)}
                    />

                    <b>Rua</b>
                    <input
                      type="text"
                      placeholder="Rua Haddock Lobo - 32"
                      className="customInput"
                      onChange={(e) => setRuaInput(e.target.value)}
                    />

                    <b>Bairro</b>
                    <input
                      type="text"
                      placeholder="São Paulo"
                      className="customInput"
                      onChange={(e) => setBairroInput(e.target.value)}
                    />

                    <b>Número</b>
                    <input
                      type="text"
                      placeholder="..."
                      className="customInput"
                      onChange={(e) => setNumeroInput(e.target.value)}
                    />

                    <b>Complemento</b>
                    <input
                      type="text"
                      placeholder="..."
                      className="customInput"
                      onChange={(e) => setComplementoInput(e.target.value)}
                    />

                    <b>Número de funcionarios</b>
                    <input
                      type="text"
                      placeholder="..."
                      className="customInput"
                      onChange={(e) => setNumeroFuncInput(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </form>

            <div className="botaoEmpresa">
              <button className="btnAcess" onClick={adicionarEmpresa}>Registrar</button>
            </div>
            {/* <div className="createAcount">
                            Ainda não criou sua conta no DX?  <u>Cadastre-se</u>
                        </div>

                        <button className="btnAcess" >Acessar</button> */}

            {/* <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              perferendis suscipit officia recusandae, eveniet quaerat assumenda
              id fugit, dignissimos maxime non natus placeat illo iusto!
              Sapiente dolorum id maiores dolores? Illum pariatur possimus
              quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt
              placeat tempora vitae enim incidunt porro fuga ea.
            </p> */}
          </div>
        </div>
      )}
    </div>
  );
}

export default LoginEmpresa;
