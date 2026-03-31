"use client";

import { useState, FormEvent } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function FormFooter() {
  const [nome, setNome] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [mensagem, setMensagem] = useState<string>("");
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData();
    formData.append("nome", nome);
    formData.append("email", email);
    formData.append("mensagem", mensagem);

    try {
      const response = await fetch("https://formspree.io/f/xzzjbead", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        setNome("");
        setEmail("");
        setMensagem("");
      } else {
        setStatus("error");
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Erro:", error.message);
      }
      setStatus("error");
    }
  };

  const inputClass = `
    w-full bg-[#161b22] border border-gray-700 rounded-lg p-3
    text-white placeholder-gray-500
    focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500
    transition-colors duration-200
  `;

  return (
    <section id="SectionContato" className="py-16 px-6">
      <div className="max-w-xl mx-auto">

        <h2 className="text-2xl md:text-3xl text-white font-bold mb-2 text-center">
          Contato
        </h2>
        <p className="text-gray-400 text-center text-sm mb-8">
          Tem um projeto em mente ou quer conversar sobre uma oportunidade? Me manda uma mensagem.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <label className="flex flex-col gap-1">
            <span className="text-gray-300 text-sm font-medium">Nome</span>
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Seu nome"
              className={inputClass}
              required
              disabled={status === "loading"}
            />
          </label>

          <label className="flex flex-col gap-1">
            <span className="text-gray-300 text-sm font-medium">Email</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seuemail@email.com"
              className={inputClass}
              required
              disabled={status === "loading"}
            />
          </label>

          <label className="flex flex-col gap-1">
            <span className="text-gray-300 text-sm font-medium">Mensagem</span>
            <textarea
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
              placeholder="Escreva sua mensagem aqui..."
              className={`${inputClass} h-36 resize-none`}
              required
              disabled={status === "loading"}
            />
          </label>

          {/* Feedback inline */}
          {status === "success" && (
            <div className="flex items-center gap-2 bg-green-900 bg-opacity-40 border border-green-700 text-green-400 text-sm px-4 py-3 rounded-lg">
              <span>✓</span>
              <span>Mensagem enviada com sucesso! Retorno em breve.</span>
            </div>
          )}
          {status === "error" && (
            <div className="flex items-center gap-2 bg-red-900 bg-opacity-40 border border-red-700 text-red-400 text-sm px-4 py-3 rounded-lg">
              <span>✕</span>
              <span>Erro ao enviar. Verifique sua conexão e tente novamente.</span>
            </div>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="bg-green-700 hover:bg-green-600 disabled:opacity-60 disabled:cursor-not-allowed
              text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
          >
            {status === "loading" ? (
              <>
                <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                </svg>
                Enviando...
              </>
            ) : (
              "Enviar Mensagem"
            )}
          </button>
        </form>
      </div>
    </section>
  );
}