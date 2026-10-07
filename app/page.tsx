"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Heart } from "lucide-react";

export default function AccueilPage() {
  const router = useRouter();
  const [sortie, setSortie] = useState(false);

  const ouvrir = () => {
    setSortie(true);
    setTimeout(() => router.push("/album"), 700);
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
        transition: "opacity 0.7s ease, transform 0.7s ease",
      }}
    >
      {/* Couronne florale */}
      <div
        style={{
          marginBottom: "32px",
          opacity: 0.7,
        }}
      >
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M40 8C40 8 28 16 28 30C28 44 40 52 40 52C40 52 52 44 52 30C52 16 40 8 40 8Z"
            stroke="#C9A96E"
            strokeWidth="1"
            fill="none"
          />
          <circle cx="40" cy="30" r="3" fill="#C9A96E" />
          <path
            d="M20 40C20 40 14 44 14 52C14 60 20 64 20 64"
            stroke="#C9A96E"
            strokeWidth="1"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M60 40C60 40 66 44 66 52C66 60 60 64 60 64"
            stroke="#C9A96E"
            strokeWidth="1"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Titre principal */}
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

      {/* Filet doré */}
      <div
        style={{
          width: "120px",
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, #C9A96E, transparent)",
          marginBottom: "48px",
          position: "relative",
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
            background: "#C9A96E",
          }}
        />
      </div>

      {/* Illustration cœurs */}
      <div style={{ marginBottom: "56px", position: "relative" }}>
        <svg
          width="140"
          height="120"
          viewBox="0 0 140 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Feuillage gauche */}
          <path
            d="M20 60C20 60 10 50 15 40C20 30 30 35 30 35"
            stroke="#C97B8A"
            strokeWidth="1"
            fill="none"
            opacity="0.5"
          />
          <path
            d="M15 70C15 70 5 65 8 55"
            stroke="#C97B8A"
            strokeWidth="1"
            fill="none"
            opacity="0.5"
          />
          {/* Feuillage droit */}
          <path
            d="M120 60C120 60 130 50 125 40C120 30 110 35 110 35"
            stroke="#C97B8A"
            strokeWidth="1"
            fill="none"
            opacity="0.5"
          />
          <path
            d="M125 70C125 70 135 65 132 55"
            stroke="#C97B8A"
            strokeWidth="1"
            fill="none"
            opacity="0.5"
          />
          {/* Cœur gauche */}
          <path
            d="M50 55C50 45 42 40 37 40C32 40 28 44 28 50C28 60 50 78 50 78"
            stroke="#C97B8A"
            strokeWidth="1.2"
            fill="none"
          />
          {/* Cœur droit */}
          <path
            d="M90 55C90 45 98 40 103 40C108 40 112 44 112 50C112 60 90 78 90 78"
            stroke="#C97B8A"
            strokeWidth="1.2"
            fill="none"
          />
          {/* Petit cœur central */}
          <path
            d="M70 52C70 48 67 46 65 46C63 46 61 47 61 49C61 53 70 60 70 60C70 60 79 53 79 49C79 47 77 46 75 46C73 46 70 48 70 52Z"
            fill="#F4C7CE"
            opacity="0.7"
          />
        </svg>
      </div>

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
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
        onMouseDown={(e) => {
          e.currentTarget.style.transform = "scale(0.97)";
        }}
        onMouseUp={(e) => {
          e.currentTarget.style.transform = "scale(1)";
        }}
      >
        <Heart size={16} strokeWidth={2} fill="#FFFFFF" />
        Ouvrir
      </button>
    </main>
  );
      }
