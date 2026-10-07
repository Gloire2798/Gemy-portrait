"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Download, Home, BookOpen, Mail, Loader2 } from "lucide-react";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function AlbumPage() {
  const router = useRouter();
  const [nbPages, setNbPages] = useState<number>(0);
  const [largeur, setLargeur] = useState<number>(0);

  useEffect(() => {
    const majLargeur = () => {
      const w = Math.min(window.innerWidth - 32, 800);
      setLargeur(w);
    };
    majLargeur();
    window.addEventListener("resize", majLargeur);
    return () => window.removeEventListener("resize", majLargeur);
  }, []);

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
          Album
        </h1>

        <a
          href="/album.pdf"
          download="Gemy-Album.pdf"
          style={{
            background: "transparent",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            color: "#C97B8A",
            padding: "8px",
          }}
        >
          <Download size={18} strokeWidth={1.5} />
        </a>
      </header>

      {/* PDF */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "20px 16px",
          gap: "16px",
        }}
      >
        <Document
          file="/album.pdf"
          onLoadSuccess={({ numPages }) => setNbPages(numPages)}
          loading={
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "12px",
                padding: "60px 20px",
                color: "#8B7B7F",
              }}
            >
              <Loader2 size={32} strokeWidth={1.5} color="#C97B8A" className="spin" />
              <p style={{ fontSize: "0.9rem", letterSpacing: "1px" }}>
                Chargement de l'album...
              </p>
            </div>
          }
          error={
            <div
              style={{
                padding: "40px 20px",
                textAlign: "center",
                color: "#8B7B7F",
              }}
            >
              <p>Impossible de charger l'album.</p>
              <a
                href="/album.pdf"
                target="_blank"
                style={{
                  color: "#C97B8A",
                  textDecoration: "underline",
                }}
              >
                Ouvrir dans un nouvel onglet
              </a>
            </div>
          }
        >
          {Array.from({ length: nbPages }, (_, i) => (
            <div
              key={i}
              style={{
                marginBottom: "16px",
                boxShadow: "0 8px 32px rgba(201, 123, 138, 0.15)",
                borderRadius: "8px",
                overflow: "hidden",
                backgroundColor: "#FFFFFF",
              }}
            >
              <Page
                pageNumber={i + 1}
                width={largeur}
                renderAnnotationLayer={false}
                renderTextLayer={false}
              />
            </div>
          ))}
        </Document>

        <style jsx global>{`
          .spin {
            animation: spin 1s linear infinite;
          }
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>

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
          active
          onClick={() => router.push("/album")}
        />
        <NavButton
          icon={<Mail size={20} strokeWidth={1.5} />}
          label="Message"
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
