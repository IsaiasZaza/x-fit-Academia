"use client";

import { useState, useEffect } from "react";
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";

const Pacientes = () => {
  const [pacientes, setPacientes] = useState([]);
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [telefone, setTelefone] = useState("");
  const [pacienteEmail, setPacienteEmail] = useState(""); // Email exclusivo do paciente
  const [endereco, setEndereco] = useState("");
  const [horario, setHorario] = useState("");
  const [open, setOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [loginEmail, setLoginEmail] = useState(""); // Email para login
  const [password, setPassword] = useState(""); // Senha para login
  const [error, setError] = useState(""); // Mensagem de erro para login ou outras ações

  // Função para buscar todos os pacientes
  const fetchPacientes = async () => {
    try {
      const response = await fetch("https://api-projetoss.vercel.app/api/pacientes");
      const data = await response.json();
      setPacientes(data);
    } catch (error) {
      console.error("Erro ao buscar pacientes:", error);
      setError("Erro ao buscar pacientes.");
    }
  };

  // Função para login do usuário
  const handleLogin = async () => {
    try {
      const response = await fetch("https://api-projetoss.vercel.app/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: loginEmail, password }),
      });

      if (response.ok) {
        setLoggedIn(true);
        setError("");
        fetchPacientes(); // Buscar pacientes ao fazer login
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Falha no login");
      }
    } catch (error) {
      console.error("Erro ao realizar login:", error);
      setError("Erro ao realizar login.");
    }
  };

  // Função para adicionar um novo paciente
  const addPaciente = async (e) => {
    e.preventDefault();
  
    // Validação simples para garantir que todos os campos estão preenchidos
    if (!nome || !idade || !telefone || !pacienteEmail || !horario || !endereco) {
      setError("Por favor, preencha todos os campos.");
      return;
    }
  
    try {
      const response = await fetch("https://api-projetoss.vercel.app/api/pacientes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome, // Nome do paciente
          idade, // Idade do paciente
          telefone, // Telefone do paciente
          email: pacienteEmail, // Email do paciente
          horario, // Horário agendado para o paciente
          endereco, // Endereço do paciente
        }),
      });
  
      if (response.ok) {
        const newPaciente = await response.json();
        setPacientes([...pacientes, newPaciente]); // Adiciona o novo paciente à lista
        setNome(""); // Limpa os campos do formulário
        setIdade("");
        setTelefone("");
        setPacienteEmail("");
        setEndereco("");
        setHorario("");
        setOpen(false); // Fecha o modal
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Erro ao adicionar paciente.");
      }
    } catch (error) {
      console.error("Erro ao adicionar paciente:", error);
      setError("Erro ao adicionar paciente.");
    }
  };
  // Função para excluir um paciente
  const deletePaciente = async (id) => {
    try {
      const response = await fetch(`https://api-projetoss.vercel.app/api/pacientes/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setPacientes(pacientes.filter((paciente) => paciente.id !== id));
      } else {
        setError("Erro ao excluir paciente.");
      }
    } catch (error) {
      console.error("Erro ao excluir paciente:", error);
      setError("Erro ao excluir paciente.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-4">Pacientes</h1>

      {/* Login */}
      {!loggedIn && (
        <div className="mb-6">
          <TextField
            label="Email"
            type="email"
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
            fullWidth
            className="mb-4"
          />
          <TextField
            label="Senha"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            className="mb-4"
          />
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <Button onClick={handleLogin} variant="contained" color="primary">
            Login
          </Button>
        </div>
      )}

      {/* Área autenticada */}
      {loggedIn && (
        <>
          <Button onClick={() => setOpen(true)} variant="contained" color="primary" className="mb-6">
            Adicionar Paciente
          </Button>

          {/* Modal para adicionar paciente */}
          <Dialog open={open} onClose={() => setOpen(false)}>
            <DialogTitle>Adicionar Paciente</DialogTitle>
            <DialogContent>
              <TextField
                label="Nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                fullWidth
                className="mb-4"
              />
              <TextField
                label="Idade"
                type="number"
                value={idade}
                onChange={(e) => setIdade(e.target.value)}
                fullWidth
                className="mb-4"
              />
              <TextField
                label="Telefone"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                fullWidth
                className="mb-4"
              />
              <TextField
                label="Email"
                type="email"
                value={pacienteEmail}
                onChange={(e) => setPacienteEmail(e.target.value)}
                fullWidth
                className="mb-4"
              />
              <TextField
                label="Endereço"
                value={endereco}
                onChange={(e) => setEndereco(e.target.value)}
                fullWidth
                className="mb-4"
              />
              <TextField
                label="Horário"
                value={horario}
                onChange={(e) => setHorario(e.target.value)}
                fullWidth
                className="mb-4"
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setOpen(false)} color="secondary">
                Cancelar
              </Button>
              <Button onClick={addPaciente} color="primary">
                Adicionar
              </Button>
            </DialogActions>
          </Dialog>

          {/* Lista de pacientes */}
          <ul className="space-y-4">
            {pacientes.map((paciente) => (
              <li key={paciente.id} className="flex justify-between items-center p-4 border rounded shadow-sm">
                <div>
                  <p className="font-semibold">{paciente.nome}</p>
                  <p>{paciente.idade} anos</p>
                  <p>{paciente.telefone}</p>
                  <p>{paciente.email}</p>
                  <p>{paciente.endereco}</p>
                </div>
                <Button onClick={() => deletePaciente(paciente.id)} variant="contained" color="error">
                  Excluir
                </Button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default Pacientes;
