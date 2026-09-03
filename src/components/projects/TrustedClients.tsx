import React, { useState, useRef, useEffect, useCallback } from 'react';

export interface ClientItem {
  id: string;
  name: string;
  logoUrl: string;
  altText: string;
}

export const TRUSTED_CLIENTS_DATA: ClientItem[] = [
  {
    id: 'up-pwd',
    name: 'PWD Lucknow',
    logoUrl: '/PWD_Lucknow.svg',
    altText: 'Government of Uttar Pradesh PWD'
  },
  {
    id: 'lda',
    name: 'LDA Lucknow',
    logoUrl: '/LDA_Lucknow.svg',
    altText: 'Lucknow Development Authority (LDA)'
  },
  {
    id: 'nbcc',
    name: 'NBCC India',
    logoUrl: '/NBCC.svg',
    altText: 'NBCC India Limited'
  },
  {
    id: 'ircon',
    name: 'IRCON International',
    logoUrl: '/IRCON_International.svg',
    altText: 'IRCON International Limited'
  },
  {
    id: 'rera',
    name: 'UP RERA',
    logoUrl: '/RERA.svg',
    altText: 'UP RERA Registered Projects'
  },
  {
    id: 'hal',
    name: 'HAL India',
    logoUrl: '/HAL_Logo_HighQuality.svg',
    altText: 'Hindustan Aeronautics Limited'
  },
  {
    id: 'mrc',
    name: 'MRC Construction',
    logoUrl: '/MRC_Logo_HighQuality.svg',
    altText: 'MRC Construction'
  },
  {
    id: 'jaypee',
    name: 'Jaypee Group',
    logoUrl: '/Jaypee_Group_Logo_HighQuality.svg',
    altText: 'Jaypee Group'
  }
];

const CLIENT_LOGO_CANDIDATES: Record<string, string[]> = {
  rera: ["RERA.svg", "rera.svg", "RERA_Logo.svg", "RERA-logo.svg", "UP-RERA.svg", "UP_RERA.svg"],
  nbcc: ["NBCC.svg", "nbcc.svg", "NBCC_Logo.svg", "NBCC-logo.svg", "NBCC_India.svg", "NBCC_India_Logo.svg"],
  'up-pwd': ["PWD_Lucknow.svg", "pwd_lucknow.svg", "PWD.svg", "pwd.svg"],
  lda: ["LDA_Lucknow.svg", "lda_lucknow.svg", "LDA.svg", "lda.svg"],
  ircon: ["IRCON_International.svg", "ircon_international.svg", "IRCON.svg", "ircon.svg"],
  hal: ["HAL_Logo_HighQuality.svg", "hal_logo_highquality.svg", "HAL.svg", "hal.svg"],
  mrc: ["MRC_Logo_HighQuality.svg", "mrc_logo_highquality.svg", "MRC.svg", "mrc.svg"],
  jaypee: ["Jaypee_Group_Logo_HighQuality.svg", "jaypee_group_logo_highquality.svg", "Jaypee.svg", "jaypee.svg"],
};

const getLogoCandidates = (client: ClientItem): string[] => {
  const candidates = CLIENT_LOGO_CANDIDATES[client.id] ?? [client.logoUrl.replace(/^\//, "")];
  const baseUrl = (import.meta.env.BASE_URL || "/").replace(/\/$/, "");

  return candidates.map((filename) => {
    const cleanFn = filename.replace(/^\//, "");
    return `${baseUrl}/${cleanFn}`;
  });
};

const TrustedClientLogo: React.FC<{ client: ClientItem }> = ({ client }) => {
  const candidates = React.useMemo(() => getLogoCandidates(client), [client]);
  const [candidateIndex, setCandidateIndex] = useState(0);

  useEffect(() => {
    setCandidateIndex(0);
  }, [client.id]);

  const handleError = () => {
    setCandidateIndex((current) => Math.min(current + 1, candidates.length));
  };

  if (candidateIndex >= candidates.length) {
    return (
      <span
        className="trust-clients__logo-fallback"
        role="img"
        aria-label={client.altText}
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: 44,
          padding: "6px 12px",
          borderRadius: 8,
          color: "#0875D1",
          fontWeight: 800,
          fontSize: 14,
          letterSpacing: "0.04em",
          background: "#F4F8FC",
          border: "1px solid #DCEAF7",
          boxSizing: "border-box",
          textAlign: "center",
        }}
      >
        {client.name}
      </span>
    );
  }

  return (
    <img
      src={candidates[candidateIndex]}
      alt={client.altText}
      onError={handleError}
      loading="lazy"
      className="trust-clients__logo-img"
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

const TOTAL_CLIENTS = TRUSTED_CLIENTS_DATA.length;

const EXTENDED_CLIENTS = [
  ...TRUSTED_CLIENTS_DATA,
  ...TRUSTED_CLIENTS_DATA,
  ...TRUSTED_CLIENTS_DATA
];

export const TrustedClients: React.FC = () => {
  // Virtual index starts at Set 1 (index 7)
  const [virtualIndex, setVirtualIndex] = useState(TOTAL_CLIENTS);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [visibleCount, setVisibleCount] = useState(7);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  // Timers & state refs
  const autoplayTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isHoveredOrInteractingRef = useRef<boolean>(false);

  // Active logical dot index (0..6)
  const activeDot = ((virtualIndex % TOTAL_CLIENTS) + TOTAL_CLIENTS) % TOTAL_CLIENTS;

  // ── 1. Responsive Visible Count Detection ──
  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w < 768) {
        setVisibleCount(2); // Mobile: 2 cards
      } else if (w <= 1024) {
        setVisibleCount(5); // Tablet: 5 cards
      } else if (w <= 1280) {
        setVisibleCount(6); // Small Desktop: 6 cards
      } else {
        setVisibleCount(7); // Large Desktop: 7 cards
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // ── 2. Autoplay & 10s Inactivity Resume Manager ──
  const clearAllTimers = useCallback(() => {
    if (autoplayTimerRef.current) {
      clearInterval(autoplayTimerRef.current);
      autoplayTimerRef.current = null;
    }
    if (resumeTimerRef.current) {
      clearTimeout(resumeTimerRef.current);
      resumeTimerRef.current = null;
    }
  }, []);

  const startAutoplay = useCallback(() => {
    // Respect prefers-reduced-motion
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }
    if (autoplayTimerRef.current || isHoveredOrInteractingRef.current) return;

    autoplayTimerRef.current = setInterval(() => {
      setIsTransitioning(true);
      setVirtualIndex((prev) => prev + 1);
    }, 3500); // Advances by 1 card every 3.5s
  }, []);

  const pauseAutoplayAndScheduleResume = useCallback(() => {
    // 1. Pause autoplay immediately
    if (autoplayTimerRef.current) {
      clearInterval(autoplayTimerRef.current);
      autoplayTimerRef.current = null;
    }
    // 2. Clear any pending resume timer
    if (resumeTimerRef.current) {
      clearTimeout(resumeTimerRef.current);
      resumeTimerRef.current = null;
    }
    // 3. Start fresh 10-second resume countdown
    resumeTimerRef.current = setTimeout(() => {
      if (!isHoveredOrInteractingRef.current) {
        startAutoplay();
      }
    }, 10000);
  }, [startAutoplay]);

  // Initial Autoplay
  useEffect(() => {
    startAutoplay();
    return () => clearAllTimers();
  }, [startAutoplay, clearAllTimers]);

  // ── 3. Seamless Infinite Boundary Reset (Silent & Instant) ──
  useEffect(() => {
    if (!isTransitioning) return;

    // Moving forwards past Set 1 into Set 2 (virtualIndex >= 14)
    if (virtualIndex >= TOTAL_CLIENTS * 2) {
      const resetTimer = setTimeout(() => {
        setIsTransitioning(false);
        setVirtualIndex((prev) => prev - TOTAL_CLIENTS);
      }, 450); // Matches CSS transition duration
      return () => clearTimeout(resetTimer);
    }

    // Moving backwards before Set 1 into Set 0 (virtualIndex < 7)
    if (virtualIndex < TOTAL_CLIENTS) {
      const resetTimer = setTimeout(() => {
        setIsTransitioning(false);
        setVirtualIndex((prev) => prev + TOTAL_CLIENTS);
      }, 450);
      return () => clearTimeout(resetTimer);
    }
  }, [virtualIndex, isTransitioning]);

  // ── 4. Unified Navigation Actions (Endless In Both Directions) ──
  const goToNext = useCallback(() => {
    setIsTransitioning(true);
    setVirtualIndex((prev) => prev + 1);
    pauseAutoplayAndScheduleResume();
  }, [pauseAutoplayAndScheduleResume]);

  const goToPrev = useCallback(() => {
    setIsTransitioning(true);
    setVirtualIndex((prev) => prev - 1);
    pauseAutoplayAndScheduleResume();
  }, [pauseAutoplayAndScheduleResume]);

  const goToDot = (dotIdx: number) => {
    setIsTransitioning(true);
    const currentBase = Math.floor(virtualIndex / TOTAL_CLIENTS) * TOTAL_CLIENTS;
    setVirtualIndex(currentBase + dotIdx);
    pauseAutoplayAndScheduleResume();
  };

  // ── 5. Hover Handlers (Desktop/Tablet Pause) ──
  const handleMouseEnter = () => {
    isHoveredOrInteractingRef.current = true;
    if (autoplayTimerRef.current) {
      clearInterval(autoplayTimerRef.current);
      autoplayTimerRef.current = null;
    }
  };

  const handleMouseLeave = () => {
    isHoveredOrInteractingRef.current = false;
    pauseAutoplayAndScheduleResume();
  };

  // ── 6. Touch & Pointer Drag Gestures (Mobile & Tablet) ──
  const touchStartX = useRef<number>(0);
  const touchStartY = useRef<number>(0);
  const isHorizontalSwipe = useRef<boolean | null>(null);

  const handleTouchStart = (e: React.TouchEvent | React.PointerEvent) => {
    isHoveredOrInteractingRef.current = true;
    if (autoplayTimerRef.current) {
      clearInterval(autoplayTimerRef.current);
      autoplayTimerRef.current = null;
    }
    const clientX = 'touches' in e ? e.touches[0].clientX : (e as React.PointerEvent).clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : (e as React.PointerEvent).clientY;
    touchStartX.current = clientX;
    touchStartY.current = clientY;
    isHorizontalSwipe.current = null;
    setIsDragging(true);
    setIsTransitioning(false);
  };

  const handleTouchMove = (e: React.TouchEvent | React.PointerEvent) => {
    if (!isDragging) return;
    const clientX = 'touches' in e ? e.touches[0].clientX : (e as React.PointerEvent).clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : (e as React.PointerEvent).clientY;

    const deltaX = clientX - touchStartX.current;
    const deltaY = clientY - touchStartY.current;

    // Detect direction
    if (isHorizontalSwipe.current === null) {
      if (Math.abs(deltaX) > 8 || Math.abs(deltaY) > 8) {
        isHorizontalSwipe.current = Math.abs(deltaX) > Math.abs(deltaY);
      }
    }

    if (isHorizontalSwipe.current) {
      setDragOffset(deltaX);
    }
  };

  const handleTouchEnd = () => {
    isHoveredOrInteractingRef.current = false;
    setIsDragging(false);

    const threshold = 40; // 40px swipe threshold
    if (dragOffset < -threshold) {
      // Swiped Left -> Move forward
      setIsTransitioning(true);
      setVirtualIndex((prev) => prev + 1);
    } else if (dragOffset > threshold) {
      // Swiped Right -> Move backward
      setIsTransitioning(true);
      setVirtualIndex((prev) => prev - 1);
    } else {
      // Snap back
      setIsTransitioning(true);
    }

    setDragOffset(0);
    pauseAutoplayAndScheduleResume();
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      goToPrev();
    } else if (e.key === 'ArrowRight') {
      goToNext();
    }
  };

  return (
    <section
      id="trusted-clients"
      className="trust-clients"
      onKeyDown={handleKeyDown}
      tabIndex={0}
      aria-label="Trusted Clients Section"
    >
      {/* ── FULL-BLEED BACKGROUND SVG LAYER ── */}
      <div className="trust-clients__bg-layer" aria-hidden="true" />

      {/* ── VERTICALLY CENTERED CONTENT CONTAINER ── */}
      <div className="trust-clients__container">
        {/* ── SECTION HEADER ── */}
        <div className="trust-clients__header">
          <div className="trust-clients__eyebrow-wrap">
            <span className="trust-clients__eyebrow-dash">—</span>
            <span className="trust-clients__eyebrow">TRUSTED BY</span>
            <span className="trust-clients__eyebrow-dash">—</span>
          </div>

          <h2 className="trust-clients__title">
            CLIENTS WHO BUILD THE NATION
          </h2>

          <p className="trust-clients__desc">
            Proud to partner with government bodies, public sector undertakings
            and leading organizations to deliver landmark projects across India.
          </p>

          <div className="trust-clients__divider" />
        </div>

        {/* ── UNIFIED RESPONSIVE INFINITE CAROUSEL ── */}
        <div
          className="trust-clients__carousel-wrap"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onTouchCancel={handleTouchEnd}
          onPointerDown={handleTouchStart}
          onPointerMove={handleTouchMove}
          onPointerUp={handleTouchEnd}
          onPointerCancel={handleTouchEnd}
        >
          {/* Left Circular Arrow (Always Active & Infinite) */}
          <button
            onClick={goToPrev}
            className="trust-clients__nav-btn trust-clients__nav-prev"
            aria-label="Previous client partner"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Overflow-Hidden Viewport */}
          <div className="trust-clients__viewport">
            <div
              className="trust-clients__track"
              style={{
                transform: `translate3d(calc(-${virtualIndex * (100 / visibleCount)}% + ${dragOffset}px), 0, 0)`,
                transition: isTransitioning ? 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)' : 'none'
              }}
            >
              {EXTENDED_CLIENTS.map((client, idx) => (
                <div
                  key={`${client.id}-${idx}`}
                  className="trust-clients__card-slot"
                  style={{
                    flex: `0 0 ${100 / visibleCount}%`,
                    width: `${100 / visibleCount}%`,
                    maxWidth: `${100 / visibleCount}%`
                  }}
                >
                  <div
                    className="trust-clients__card"
                    onClick={goToNext}
                    role="button"
                    tabIndex={0}
                    aria-label={`Client: ${client.name}`}
                  >
                    <div className="trust-clients__logo-wrap">
                      <TrustedClientLogo client={client} />
                    </div>
                    <div className="trust-clients__card-divider" />
                    <span className="trust-clients__name">{client.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Circular Arrow (Always Active & Infinite) */}
          <button
            onClick={goToNext}
            className="trust-clients__nav-btn trust-clients__nav-next"
            aria-label="Next client partner"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        {/* ── EXACTLY 7 PAGINATION DOTS (Synchronized with 1..7 Real Clients) ── */}
        <div className="trust-clients__dots-wrap" aria-label="Client carousel pagination">
          {TRUSTED_CLIENTS_DATA.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToDot(idx)}
              className={`trust-clients__dot ${idx === activeDot ? 'active' : ''}`}
              aria-label={`Go to client partner ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedClients;
