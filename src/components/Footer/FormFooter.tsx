"use client";

import { useState, FormEvent } from "react";

export default function FormFooter() {
  const [nome, setNome] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [mensagem, setMensagem] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Nome:", nome);
    console.log("Email:", email);
    console.log("Mensagem:", mensagem);

    alert("Mensagem enviada com sucesso!");

    // Limpa os campos
    setNome("");
    setEmail("");
    setMensagem("");
  };

  return (
    <section id="Contato" className="py-12 px-6 max-w-xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Contato</h2>

      <form
        onSubmit={handleSubmit}
        action="https://formspree.io/f/xzzjbead"
        method="POST"
        className="flex flex-col gap-4"
      >
        <label className="flex flex-col">
          <span className="mb-1 font-medium">Nome</span>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Seu nome"
            className="border border-gray-300 rounded p-2 text-black"
            required
          />
        </label>
        <label className="flex flex-col">
          <span className="mb-1 font-medium">Email</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="seuemail@email.com"
            className="border border-gray-300 rounded p-2 text-black"
            required
          />
        </label>
        <label className="flex flex-col">
          <span className="mb-1 font-medium">Mensagem</span>
          <textarea
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
            placeholder="Escreva sua mensagem aqui..."
            className="border border-gray-300 rounded p-2 text-black h-32 resize-none"
            required
          ></textarea>
        </label>
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
        >
          Enviar
        </button>
      </form>
    </section>
  );
}
