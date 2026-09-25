export const useScroll = (threshold = 300) => {
  const isScrolled = ref(false);
  const showBackToTop = ref(false);

  let ticking = false;

  const updateScrollState = () => {
    if (typeof window === "undefined") return;
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    isScrolled.value = scrollY > 20;
    showBackToTop.value = scrollY > threshold;
    ticking = false;
  };

  const handleScroll = () => {
    if (!ticking) {
      requestAnimationFrame(updateScrollState);
      ticking = true;
    }
  };

  const scrollToTop = () => {
    if (typeof window === "undefined") return;
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  onMounted(() => {
    updateScrollState();
    window.addEventListener("scroll", handleScroll, { passive: true });
  });

  onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
  });

  return {
    isScrolled,
    showBackToTop,
    scrollToTop,
  };
};
