"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Heart } from "lucide-react";

export default function AccueilPage() {
  const router = useRouter();
  const [sortie, setSortie] = useState(false);

  const ouvrir = () => {
    setSortie(true);
    setTimeout(() => router.push("/album"), 600);
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 24px",
        opacity: sortie ? 0 : 1,
        transform: sortie ? "translateY(-20px)" : "translateY(0)",
        transition: "opacity 0.6s ease, transform 0.6s ease",
      }}
    >
      {/* Couronne florale */}
      <img
        src="https://i.ibb.co/PGwN4TRY/couronne.png"
        alt="Couronne florale"
        style={{
          width: "clamp(110px, 30vw, 140px)",
          height: "auto",
          marginBottom: "20px",
          animation: "flotter 4s ease-in-out infinite",
        }}
      />

      {/* Titre */}
      <h1
        style={{
          fontFamily: "var(--font-cormorant), serif",
          fontSize: "clamp(2.2rem, 8vw, 3.2rem)",
          fontWeight: 500,
          color: "#4A3B3F",
          margin: 0,
          marginBottom: "12px",
          textAlign: "center",
          letterSpacing: "0.5px",
        }}
      >
        Gemy de mon cœur
      </h1>

      {/* Sous-titre */}
      <p
        style={{
          fontSize: "0.95rem",
          color: "#8B7B7F",
          margin: 0,
          marginBottom: "28px",
          textAlign: "center",
          letterSpacing: "1.5px",
          textTransform: "lowercase",
        }}
      >
        une histoire, un avenir
      </p>

      {/* Filet doré avec brillance */}
      <div
        style={{
          width: "120px",
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, #C9A86C, transparent)",
          marginBottom: "48px",
          position: "relative",
          animation: "briller 3s ease-in-out infinite",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%) rotate(45deg)",
            width: "6px",
            height: "6px",
            background: "#C9A86C",
          }}
        />
      </div>

      {/* Cœurs entrelacés */}
      <svg
        width="clamp(100px, 28vw, 130px)"
        height="auto"
        viewBox="0 0 200 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          marginBottom: "56px",
          animation: "battre 2.4s ease-in-out infinite",
        }}
      >
        <path
          d="M60 60 C60 40 45 30 35 30 C22 30 12 42 12 58 C12 85 60 130 60 130"
          stroke="#C97B8A"
          strokeWidth="7"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M140 60 C140 40 155 30 165 30 C178 30 188 42 188 58 C188 85 140 130 140 130"
          stroke="#C97B8A"
          strokeWidth="7"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M100 95 C100 95 60 60 60 42 C60 30 72 25 80 25 C90 25 98 33 100 42"
          stroke="#C97B8A"
          strokeWidth="7"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M100 95 C100 95 140 60 140 42 C140 30 128 25 120 25 C110 25 102 33 100 42"
          stroke="#C97B8A"
          strokeWidth="7"
          strokeLinecap="round"
          fill="none"
        />
      </svg>

      {/* Bouton Ouvrir */}
      <button
        onClick={ouvrir}
        style={{
          background: "linear-gradient(135deg, #F4C7CE 0%, #E8A8B5 100%)",
          color: "#FFFFFF",
          border: "none",
          padding: "18px 80px",
          fontSize: "1.05rem",
          fontFamily: "var(--font-cormorant), serif",
          fontWeight: 500,
          letterSpacing: "2px",
          borderRadius: "999px",
          cursor: "pointer",
          boxShadow: "0 8px 24px rgba(201, 123, 138, 0.25)",
          display: "flex",
          alignItems: "center",
          gap: "10px",
          animation: "respirer 2s ease-in-out infinite",
        }}
      >
        <Heart size={16} strokeWidth={2} fill="#FFFFFF" />
        Ouvrir
      </button>

      {/* Animations CSS */}
      <style jsx global>{`
        @keyframes battre {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.08); }
        }
        @keyframes respirer {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 8px 24px rgba(201, 123, 138, 0.25);
          }
          50% {
            transform: scale(1.04);
            box-shadow: 0 12px 32px rgba(201, 123, 138, 0.4);
          }
        }
        @keyframes flotter {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes briller {
          0%, 100% { opacity: 0.6; filter: brightness(1); }
          50% { opacity: 1; filter: brightness(1.3); }
        }
      `}</style>
    </main>
  );
}
