export const useScroll = (threshold = 300) => {
  const isScrolled = ref(false);
  const showBackToTop = ref(false);

  const handleScroll = () => {
    if (typeof window === "undefined") return;
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    isScrolled.value = scrollY > 20;
    showBackToTop.value = scrollY > threshold;
  };

  const scrollToTop = () => {
    if (typeof window === "undefined") return;
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  onMounted(() => {
    handleScroll();
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
