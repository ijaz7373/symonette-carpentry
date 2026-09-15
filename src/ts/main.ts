/**
 * Symonette Carpentry — site interactivity.
 * Single small compiled bundle, no dependencies, progressive enhancement only.
 */
(() => {
  const doc = document;

  /* ---------- Header: scroll shadow + mobile nav ---------- */
  const header = doc.getElementById("site-header");
  if (header) {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          header.classList.toggle("is-scrolled", window.scrollY > 8);
          ticking = false;
        });
        ticking = true;
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  const navToggle = doc.getElementById("navToggle");
  const siteNav = doc.getElementById("siteNav");
  if (navToggle && siteNav) {
    navToggle.addEventListener("click", () => {
      const isOpen = doc.body.classList.toggle("nav-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });
    siteNav.querySelectorAll<HTMLAnchorElement>("a").forEach((link) => {
      link.addEventListener("click", () => {
        doc.body.classList.remove("nav-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- Generic [data-toggle] handler (mobile submenu, FAQ) ---------- */
  doc.querySelectorAll<HTMLElement>("[data-toggle]").forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const targetId = trigger.getAttribute("data-toggle");
      if (!targetId) return;
      const target = doc.getElementById(targetId);
      if (!target) return;
      const isHidden = target.hasAttribute("hidden");
      if (isHidden) {
        target.removeAttribute("hidden");
      } else {
        target.setAttribute("hidden", "");
      }
      trigger.setAttribute("aria-expanded", String(isHidden));
      trigger.classList.toggle("is-open", isHidden);
    });
  });

  /* ---------- FAQ accordions: close siblings within same group ---------- */
  doc.querySelectorAll<HTMLElement>(".accordion").forEach((group) => {
    const triggers = Array.from(
      group.querySelectorAll<HTMLElement>(".accordion-trigger")
    );
    triggers.forEach((trigger) => {
      trigger.addEventListener("click", () => {
        const targetId = trigger.getAttribute("data-toggle");
        triggers.forEach((other) => {
          if (other === trigger) return;
          const otherId = other.getAttribute("data-toggle");
          if (!otherId || otherId === targetId) return;
          const otherPanel = doc.getElementById(otherId);
          if (otherPanel && !otherPanel.hasAttribute("hidden")) {
            otherPanel.setAttribute("hidden", "");
            other.setAttribute("aria-expanded", "false");
            other.classList.remove("is-open");
          }
        });
      });
    });
  });

  /* ---------- Gallery filter + lightbox ---------- */
  const galleryGrid = doc.getElementById("galleryGrid");
  if (galleryGrid) {
    const items = Array.from(
      galleryGrid.querySelectorAll<HTMLElement>(".gallery-item")
    );
    const filterButtons = doc.querySelectorAll<HTMLButtonElement>(
      ".gallery-filters .filter-btn"
    );

    let visibleItems = items;

    const applyFilter = (filter: string) => {
      visibleItems = items.filter((item) => {
        const match = filter === "all" || item.dataset.category === filter;
        item.style.display = match ? "" : "none";
        return match;
      });
    };

    filterButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        filterButtons.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        applyFilter(btn.dataset.filter || "all");
      });
    });

    const lightbox = doc.getElementById("lightbox");
    const lightboxImg = doc.getElementById(
      "lightboxImg"
    ) as HTMLImageElement | null;
    const lightboxCaption = doc.getElementById("lightboxCaption");
    const closeBtn = doc.getElementById("lightboxClose");
    const prevBtn = doc.getElementById("lightboxPrev");
    const nextBtn = doc.getElementById("lightboxNext");
    let currentIndex = 0;
    let lastFocused: HTMLElement | null = null;

    const showAt = (index: number) => {
      if (!visibleItems.length || !lightboxImg || !lightboxCaption) return;
      currentIndex = (index + visibleItems.length) % visibleItems.length;
      const item = visibleItems[currentIndex];
      const trigger = item.querySelector<HTMLElement>(".gallery-trigger");
      const full = trigger?.dataset.full || "";
      const caption = trigger?.dataset.caption || "";
      lightboxImg.src = full;
      lightboxImg.alt = caption;
      lightboxCaption.textContent = caption;
    };

    const openLightbox = (item: HTMLElement) => {
      if (!lightbox) return;
      lastFocused = doc.activeElement as HTMLElement;
      const idx = visibleItems.indexOf(item);
      showAt(idx === -1 ? 0 : idx);
      lightbox.removeAttribute("hidden");
      doc.body.classList.add("lightbox-open");
      closeBtn?.focus();
    };

    const closeLightbox = () => {
      if (!lightbox) return;
      lightbox.setAttribute("hidden", "");
      doc.body.classList.remove("lightbox-open");
      lastFocused?.focus();
    };

    items.forEach((item) => {
      const trigger = item.querySelector<HTMLElement>(".gallery-trigger");
      trigger?.addEventListener("click", () => openLightbox(item));
    });

    closeBtn?.addEventListener("click", closeLightbox);
    prevBtn?.addEventListener("click", () => showAt(currentIndex - 1));
    nextBtn?.addEventListener("click", () => showAt(currentIndex + 1));

    lightbox?.addEventListener("click", (e) => {
      if (e.target === lightbox) closeLightbox();
    });

    doc.addEventListener("keydown", (e) => {
      if (lightbox?.hasAttribute("hidden")) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") showAt(currentIndex + 1);
      if (e.key === "ArrowLeft") showAt(currentIndex - 1);
    });
  }

  /* ---------- Testimonial carousel (scroll-snap track + dots) ---------- */
  doc.querySelectorAll<HTMLElement>(".testimonial-carousel").forEach((carousel) => {
    const track = carousel.querySelector<HTMLElement>(".testimonial-track");
    const slides = track
      ? Array.from(track.querySelectorAll<HTMLElement>(".testimonial-slide"))
      : [];
    const dotsWrap = carousel.querySelector<HTMLElement>(".carousel-dots");
    const prevBtn = carousel.querySelector<HTMLButtonElement>(".carousel-prev");
    const nextBtn = carousel.querySelector<HTMLButtonElement>(".carousel-next");
    if (!track || !slides.length) return;

    const dots: HTMLButtonElement[] = [];
    if (dotsWrap) {
      slides.forEach((_, i) => {
        const dot = doc.createElement("button");
        dot.type = "button";
        dot.className = "carousel-dot";
        dot.setAttribute("aria-label", `Go to testimonial ${i + 1}`);
        dot.addEventListener("click", () => {
          slides[i].scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
        });
        dotsWrap.appendChild(dot);
        dots.push(dot);
      });
    }

    const setActive = (index: number) => {
      dots.forEach((d, i) => d.classList.toggle("active", i === index));
    };

    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActive(slides.indexOf(entry.target as HTMLElement));
            }
          });
        },
        { root: track, threshold: 0.6 }
      );
      slides.forEach((slide) => observer.observe(slide));
    }

    prevBtn?.addEventListener("click", () => {
      track.scrollBy({ left: -track.clientWidth, behavior: "smooth" });
    });
    nextBtn?.addEventListener("click", () => {
      track.scrollBy({ left: track.clientWidth, behavior: "smooth" });
    });

    if (dots.length) dots[0].classList.add("active");
  });

  /* ---------- Contact / quote forms: progressive-enhancement AJAX submit ---------- */
  doc.querySelectorAll<HTMLFormElement>("form[data-ajax-form]").forEach((form) => {
    const status = form.querySelector<HTMLElement>(".form-status");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const submitBtn = form.querySelector<HTMLButtonElement>(
        "button[type='submit']"
      );
      if (submitBtn) submitBtn.disabled = true;
      if (status) {
        status.textContent = "Sending your message…";
        status.className = "form-status is-pending";
      }

      const data = new FormData(form);
      fetch(form.action, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      })
        .then((res) => {
          if (res.ok) {
            form.reset();
            if (status) {
              status.textContent =
                "Thanks — your message is in. We'll be in touch shortly.";
              status.className = "form-status is-success";
            }
          } else {
            throw new Error("submit-failed");
          }
        })
        .catch(() => {
          if (status) {
            status.textContent =
              "Something went wrong. Please call us directly at the number above.";
            status.className = "form-status is-error";
          }
        })
        .finally(() => {
          if (submitBtn) submitBtn.disabled = false;
        });
    });
  });
})();
