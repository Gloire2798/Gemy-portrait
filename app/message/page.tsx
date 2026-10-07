"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft, Home, BookOpen, Mail } from "lucide-react";

export default function MessagePage() {
  const router = useRouter();

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        paddingBottom: "80px",
      }}
    >
      {/* Header */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 40,
          backgroundColor: "rgba(253, 246, 245, 0.95)",
          backdropFilter: "blur(10px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "16px 20px",
          borderBottom: "1px solid rgba(201, 169, 110, 0.2)",
        }}
      >
        <button
          onClick={() => router.push("/")}
          style={{
            background: "transparent",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "6px",
            color: "#8B7B7F",
            fontSize: "0.9rem",
            padding: "8px",
          }}
        >
          <ArrowLeft size={18} strokeWidth={1.5} />
          Retour
        </button>

        <h1
          style={{
            fontFamily: "var(--font-cormorant), serif",
            fontSize: "1.3rem",
            fontWeight: 500,
            color: "#4A3B3F",
            margin: 0,
            letterSpacing: "1px",
          }}
        >
          Message
        </h1>

        <div style={{ width: "34px" }} />
      </header>

      {/* Contenu */}
      <article
        style={{
          flex: 1,
          maxWidth: "640px",
          margin: "0 auto",
          padding: "40px 24px 60px",
          width: "100%",
        }}
      >
        {/* Titre */}
        <h2
          style={{
            fontFamily: "var(--font-cormorant), serif",
            fontSize: "clamp(2rem, 7vw, 2.8rem)",
            fontWeight: 500,
            color: "#4A3B3F",
            margin: 0,
            marginBottom: "12px",
            textAlign: "center",
            letterSpacing: "0.5px",
          }}
        >
          Comment réussir
        </h2>

        {/* Filet doré */}
        <div
          style={{
            width: "100px",
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, #C9A96E, transparent)",
            margin: "0 auto 48px",
          }}
        />

        {/* Sous-titre */}
        <h3
          style={{
            fontFamily: "var(--font-cormorant), serif",
            fontSize: "1.5rem",
            fontWeight: 500,
            color: "#C97B8A",
            margin: 0,
            marginBottom: "24px",
            textAlign: "center",
          }}
        >
          Qui est-elle ?
        </h3>

        {/* Corps du message */}
        <div
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.9,
            color: "#4A3B3F",
            fontFamily: "var(--font-inter), sans-serif",
          }}
        >
          <p style={{ margin: "0 0 20px" }}>
            C'est une fille qui a beaucoup de rêves. Son âge ne limite ni sa
            capacité à rêver ni à imaginer son avenir. Cette fille veut voyager
            dans différents endroits. Elle veut être indépendante et réussir.
          </p>

          <p style={{ margin: "0 0 20px" }}>
            Pour beaucoup de gens, ce n'est qu'un rêve, mais pour elle, c'est
            l'avenir qu'elle doit avoir. Elle choisit donc de marcher dans sa
            direction.
          </p>

          <p style={{ margin: "0 0 20px" }}>
            Elle ose rêver grand parce qu'elle en est capable, grâce à la
            connaissance de soi et au courage. Elle ne se regarde pas en voyant
            ses faiblesses. Au contraire, elle se voit comme une championne.
          </p>

          <p style={{ margin: "0 0 20px" }}>
            Elle considère sa vie comme un cadeau de Dieu et sait que tout ira
            bien pour elle si elle choisit de suivre son cœur et de travailler
            dur pour atteindre ses objectifs à l'avenir.
          </p>

          <p
            style={{
              margin: "32px 0 20px",
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "1.4rem",
              fontStyle: "italic",
              color: "#C97B8A",
              textAlign: "center",
              lineHeight: 1.5,
            }}
          >
            Comment réussir à réaliser son rêve ?
            <br />
            Parce qu'elle est la patronne.
          </p>
        </div>

        {/* Filet doré */}
        <div
          style={{
            width: "60px",
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, #C9A96E, transparent)",
            margin: "48px auto 24px",
          }}
        />

        {/* Signature */}
        <div
          style={{
            textAlign: "right",
            fontFamily: "var(--font-cormorant), serif",
          }}
        >
          <p
            style={{
              fontSize: "1rem",
              fontStyle: "italic",
              color: "#8B7B7F",
              margin: 0,
              marginBottom: "4px",
              letterSpacing: "0.5px",
            }}
          >
            Ton ami
          </p>
          <p
            style={{
              fontSize: "1.3rem",
              fontStyle: "italic",
              color: "#4A3B3F",
              margin: 0,
              letterSpacing: "0.5px",
              fontWeight: 500,
            }}
          >
            Gloire Kabala
          </p>
        </div>
      </article>

      {/* Navigation bas */}
      <nav
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: "rgba(253, 246, 245, 0.95)",
          backdropFilter: "blur(10px)",
          borderTop: "1px solid rgba(201, 169, 110, 0.2)",
          display: "flex",
          justifyContent: "space-around",
          padding: "12px 0",
          zIndex: 50,
        }}
      >
        <NavButton
          icon={<Home size={20} strokeWidth={1.5} />}
          label="Accueil"
          onClick={() => router.push("/")}
        />
        <NavButton
          icon={<BookOpen size={20} strokeWidth={1.5} />}
          label="Album"
          onClick={() => router.push("/album")}
        />
        <NavButton
          icon={<Mail size={20} strokeWidth={1.5} />}
          label="Message"
          active
          onClick={() => router.push("/message")}
        />
      </nav>
    </main>
  );
}

function NavButton({
  icon,
  label,
  active,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      style={{
        background: "transparent",
        border: "none",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "4px",
        color: active ? "#C97B8A" : "#8B7B7F",
        fontSize: "0.7rem",
        letterSpacing: "0.5px",
        padding: "4px 16px",
        fontFamily: "var(--font-inter), sans-serif",
      }}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}
