"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Home, BookOpen, Mail } from "lucide-react";

export default function MessagePage() {
  const router = useRouter();
  const [signatureVisible, setSignatureVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setSignatureVisible(true), 2000);
    return () => clearTimeout(t);
  }, []);

  const nom = "Gloire Kabala";

  return (
    <main
      style={{
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
        paddingBottom: "80px",
        boxSizing: "border-box",
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
          boxSizing: "border-box",
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
          padding: "40px 20px 60px",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
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
          Comment réussir ?
        </h2>

        <div
          style={{
            width: "100px",
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, #C9A86C, transparent)",
            margin: "0 auto 48px",
          }}
        />

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

        <div
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.9,
            color: "#4A3B3F",
            fontFamily: "var(--font-inter), sans-serif",
          }}
        >
          <p style={{ margin: "0 0 20px" }}>
            C'est une fille qui a beaucoup de rêves. Elle veut voyager,
            découvrir le monde, être indépendante, réussir sa vie et rendre
            fière la personne qu'elle deviendra demain.
          </p>

          <p style={{ margin: "0 0 20px" }}>
            Elle ne sait pas encore comment tout cela va se réaliser, ni combien
            de temps ça lui prendra. Mais elle sait une chose : elle ne veut pas
            passer sa vie à regarder les autres vivre leurs rêves. Elle veut
            vivre les siens.
          </p>

          <p style={{ margin: "0 0 20px" }}>
            Certains trouveront peut-être ses rêves trop grands. D'autres lui
            diront que c'est difficile, que la vie ne fonctionne pas toujours
            comme on le souhaite. Et ils ont peut-être raison. Mais ce n'est pas
            une raison pour arrêter de rêver, n'est-ce pas ?
          </p>

          <p style={{ margin: "0 0 20px" }}>
            Après tout, qui sait de quoi demain sera fait ?
          </p>

          <p style={{ margin: "0 0 20px" }}>
            Cette fille a ses défauts, ses peurs et ses moments de doute. Elle
            n'a pas toutes les réponses, elle ne sait pas toujours si elle prend
            le bon chemin, mais elle avance. Et même si elle tombe parfois,
            j'espère qu'elle trouvera toujours la force de se relever.
          </p>

          <p style={{ margin: "0 0 20px" }}>
            Elle ne demande pas que tout soit facile. Elle veut simplement avoir
            la chance de vivre cette vie dont elle rêve tant.
          </p>

          <p style={{ margin: "0 0 20px" }}>
            Et tu sais quoi ?
          </p>

          <p style={{ margin: "0 0 20px" }}>
            J'espère qu'un jour, elle repensera à la fille qu'elle est
            aujourd'hui, à tous ses rêves, à ses peurs et à ses petites
            victoires, puis qu'elle sourira en se disant : « J'ai réussi. J'ai
            vraiment réussi à faire tout ça ! »
          </p>

          <p style={{ margin: "0 0 20px" }}>
            Et si ce jour tarde à arriver, j'espère qu'elle n'oubliera jamais
            qu'elle a encore le temps d'apprendre, de grandir et de recommencer.
          </p>

          <p
            style={{
              margin: "32px 0 20px",
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "1.3rem",
              fontStyle: "italic",
              color: "#C97B8A",
              textAlign: "center",
              lineHeight: 1.5,
            }}
          >
            Alors, comment réussir à réaliser ses rêves ?
          </p>

          <p style={{ margin: "0 0 20px" }}>
            En gardant la foi, en travaillant dur et en continuant d'avancer,
            même lorsque les choses ne se passent pas comme prévu.
          </p>

          <p style={{ margin: "0 0 20px" }}>
            Parce que cette fille mérite de vivre les belles choses qu'elle
            imagine. Et j'espère sincèrement que la vie lui en réservera
            beaucoup.
          </p>

          <p
            style={{
              margin: "32px 0 12px",
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "1.4rem",
              fontStyle: "italic",
              color: "#C97B8A",
              textAlign: "center",
              lineHeight: 1.5,
            }}
          >
            Qui est-elle, au fait ?
          </p>

          <p
            style={{
              margin: "0 0 20px",
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "1.6rem",
              fontWeight: 600,
              color: "#C97B8A",
              textAlign: "center",
              lineHeight: 1.4,
            }}
          >
            C'est la patronne ! 🥹❤️👑
          </p>
        </div>

        {/* Filet doré */}
        <div
          style={{
            width: "60px",
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, #C9A86C, transparent)",
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
            Ton ami,
          </p>
          <p
            style={{
              fontFamily: "var(--font-allura), cursive",
              fontSize: "2.2rem",
              color: "#C9A86C",
              margin: 0,
              lineHeight: 1.2,
              minHeight: "2.6rem",
              letterSpacing: "0.5px",
            }}
          >
            {signatureVisible &&
              nom.split("").map((lettre, i) => (
                <span
                  key={i}
                  style={{
                    display: "inline-block",
                    opacity: 0,
                    animation: `ecrire 0.4s ease forwards`,
                    animationDelay: `${i * 0.08}s`,
                  }}
                >
                  {lettre === " " ? "\u00A0" : lettre}
                </span>
              ))}
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
          boxSizing: "border-box",
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

      <style jsx global>{`
        @keyframes ecrire {
          from {
            opacity: 0;
            transform: translateY(-6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
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
