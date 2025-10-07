"use client";

import { useState, FormEvent } from "react";

export default function FormFooter() {
  const [nome, setNome] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [mensagem, setMensagem] = useState<string>("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("nome", nome);
    formData.append("email", email);
    formData.append("mensagem", mensagem);

    try {
      const response = await fetch("https://formspree.io/f/xzzjbead", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        alert("Mensagem enviada com sucesso!");
        setNome("");
        setEmail("");
        setMensagem("");
      } else {
        alert("Erro ao enviar a mensagem. Tente novamente.");
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
    console.error("Erro:", error.message);
  }
      alert("Erro de conexão. Verifique sua internet.");
    }
  };

  return (
    <section id="SectionContato" className="py-12 px-6 max-w-xl mx-auto">
      <h2 className="text-3xl text-white font-bold mb-6 text-center">Contato</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <label className="flex flex-col">
          <span className="mb-1 text-white font-medium">Nome</span>
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
          <span className="mb-1 text-white font-medium">Email</span>
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
          <span className="mb-1 text-white font-medium">Mensagem</span>
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
          className="bg-green-800 text-white py-2 px-4 rounded hover:bg-slate-800 transition-colors"
        >
          Enviar
        </button>
      </form>
    </section>
  );
}
