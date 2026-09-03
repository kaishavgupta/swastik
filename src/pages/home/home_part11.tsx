import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

type Client = {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  logo: string;
  alt: string;
};


/**
 * Production-safe client logo loader.
 *
 * ERROR FIX:
 * GoDaddy's production server can be case-sensitive and the Vite base path
 * can differ from local development. RERA/NBCC were being requested as
 * root-relative files and were rendering as broken images in production.
 *
 * We keep the existing UI and try known filename variants before showing
 * a clean text fallback. This prevents a broken-image icon from ever
 * appearing while still preferring the real SVG asset.
 */
const CLIENT_LOGO_CANDIDATES: Record<string, string[]> = {
  rera: [
    "RERA.svg",
    "rera.svg",
    "RERA_Logo.svg",
    "RERA-logo.svg",
    "UP-RERA.svg",
    "UP_RERA.svg",
  ],
  nbcc: [
    "NBCC.svg",
    "nbcc.svg",
    "NBCC_Logo.svg",
    "NBCC-logo.svg",
    "NBCC_India.svg",
    "NBCC_India_Logo.svg",
  ],
};

const getLogoCandidates = (client: Client): string[] => {
  const candidates = CLIENT_LOGO_CANDIDATES[client.id] ?? [client.logo.replace(/^\//, "")];
  const baseUrl = (import.meta.env.BASE_URL || "/").replace(/\/$/, "");

  return candidates.map((filename) => {
    const cleanFn = filename.replace(/^\//, "");
    return `${baseUrl}/${cleanFn}`;
  });
};

const ClientLogo: React.FC<{ client: Client }> = ({ client }) => {
  const candidates = React.useMemo(() => getLogoCandidates(client), [client]);
  const [candidateIndex, setCandidateIndex] = React.useState(0);

  React.useEffect(() => {
    // ERROR FIX: Reset the candidate when a client record changes.
    setCandidateIndex(0);
  }, [client.id]);

  const handleError = () => {
    setCandidateIndex((current) => Math.min(current + 1, candidates.length));
  };

  if (candidateIndex >= candidates.length) {
    // ERROR FIX: Never leave a broken-image icon in the production UI.
    return (
      <span
        className="client-v3-logo-fallback"
        role="img"
        aria-label={client.alt}
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: 52,
          padding: "8px 14px",
          borderRadius: 8,
          color: "#123B68",
          fontWeight: 800,
          fontSize: 18,
          letterSpacing: "0.04em",
          background: "#F4F8FC",
          border: "1px solid #DCEAF7",
          boxSizing: "border-box",
        }}
      >
        {client.id === "rera" ? "UP RERA" : client.name}
      </span>
    );
  }

  return (
    <img
      src={candidates[candidateIndex]}
      alt={client.alt}
      onError={handleError}
      decoding="async"
      style={{
        maxWidth: "100%",
        maxHeight: "100%",
        width: "auto",
        height: "auto",
        objectFit: "contain",
        display: "block",
      }}
    />
  );
};

const clients: Client[] = [
  {
    id: "pwd",
    name: "PWD",
    subtitle: "Lucknow",
    description: "Public Works Department\nGovernment of Uttar Pradesh",
    logo: "/PWD_Lucknow.svg",
    alt: "PWD Lucknow logo",
  },
  {
    id: "rera",
    name: "RERA",
    subtitle: "Approved Projects",
    description: "RERA Registered\nApproved Projects",
    logo: "/RERA.svg",
    alt: "RERA logo",
  },
  {
    id: "nbcc",
    name: "NBCC",
    subtitle: "India",
    description: "A Navratna CPSE\nGovernment of India",
    logo: "/NBCC.svg",
    alt: "NBCC India logo",
  },
  {
    id: "lda",
    name: "LDA",
    subtitle: "Lucknow Development Authority",
    description: "Building a Better\nLucknow Together",
    logo: "/LDA_Lucknow.svg",
    alt: "LDA logo",
  },
  {
    id: "ircon",
    name: "IRCON",
    subtitle: "International",
    description: "Engineering the Nation\nBuilding the Future",
    logo: "/IRCON_International.svg",
    alt: "IRCON International logo",
  },
  {
    id: "hal",
    name: "HAL",
    subtitle: "Hindustan Aeronautics Limited",
    description: "A Maharatna CPSE\nGovernment of India",
    logo: "/HAL_Logo_HighQuality.svg",
    alt: "HAL logo",
  },
  {
    id: "mrc",
    name: "MRC",
    subtitle: "Construction",
    description: "Building Values\nBuilding Trust",
    logo: "/MRC_Logo_HighQuality.svg",
    alt: "MRC Construction logo",
  },
  {
    id: "jaypee",
    name: "JAYPEE",
    subtitle: "Group",
    description: "No Dream Too Big\nNo Challenge Too Great",
    logo: "/Jaypee_Group_Logo_HighQuality.svg",
    alt: "Jaypee Group logo",
  },
];

const stats = [
  { value: 500, suffix: "+", label: "Happy Clients", icon: "users" },
  { value: 1000, suffix: "+", label: "Projects Delivered", icon: "project" },
  { value: 30, suffix: "+", label: "Years of Experience", icon: "shield" },
  { value: 100, suffix: "%", label: "Client Satisfaction", icon: "award" },
];

function StatCounter({
  value,
  suffix,
  active,
}: {
  value: number;
  suffix: string;
  active: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;

    let start: number | null = null;
    let frame = 0;

    const animate = (timestamp: number) => {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / 1800, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * value));

      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [active, value]);

  return <>{count}{suffix}</>;
}

function StatIcon({ type }: { type: string }) {
  const common = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  if (type === "users") {
    return (
      <svg {...common}>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    );
  }

  if (type === "project") {
    return (
      <svg {...common}>
        <rect x="4" y="3" width="16" height="18" rx="2" />
        <path d="M8 7h8M8 11h8M8 15h3M15 15h1" />
      </svg>
    );
  }

  if (type === "shield") {
    return (
      <svg {...common}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <circle cx="12" cy="8" r="5" />
      <path d="M8.5 12.5 7 22l5-3 5 3-1.5-9.5" />
    </svg>
  );
}

export default function HomePart11Clients() {
  const sectionRef = useRef<HTMLElement>(null);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="clients-v3-section" id="home-part-11">
      <div className="clients-v3-dots" aria-hidden="true" />

      <div className="clients-v3-container">
        <motion.header
          className="clients-v3-header"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <div className="clients-v3-eyebrow">
            <span />
            <b>OUR CLIENTS</b>
            <span />
          </div>

          <h2>Trusted by Industry Leaders</h2>
          <p>
            We take pride in partnering with India&apos;s most reputed
            organizations to build a stronger tomorrow.
          </p>
        </motion.header>

        <div className="clients-v3-grid">
          {clients.map((client, index) => (
            <motion.article
              key={client.id}
              className="client-v3-card"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: index * 0.045 }}
            >
              <div className="client-v3-light" aria-hidden="true" />

              <div className="client-v3-logo-wrap">
                <ClientLogo client={client} />
              </div>

              <h3>{client.name}</h3>
              <span className="client-v3-subtitle">{client.subtitle}</span>

              <div className="client-v3-divider">
                <span />
              </div>

              <p>{client.description}</p>
            </motion.article>
          ))}
        </div>

        <div className="clients-v3-more">
          <span className="clients-v3-more-line">
            <i />
          </span>

          <div className="clients-v3-more-pill">
            <span className="clients-v3-more-icon">
              <StatIcon type="users" />
            </span>
            <strong>&amp; Many More</strong>
          </div>

          <span className="clients-v3-more-line">
            <i />
          </span>
        </div>

        <div className="clients-v3-stats">
          {stats.map((stat, index) => (
            <React.Fragment key={stat.label}>
              {index > 0 && <span className="clients-v3-stat-separator" />}
              <div className="clients-v3-stat">
                <span className="clients-v3-stat-icon">
                  <StatIcon type={stat.icon} />
                </span>
                <div>
                  <strong>
                    <StatCounter
                      value={stat.value}
                      suffix={stat.suffix}
                      active={statsVisible}
                    />
                  </strong>
                  <small>{stat.label}</small>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
