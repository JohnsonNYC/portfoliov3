export const scrollToComponent = (id: string, offset: number = 0): void => {
  const el = document.getElementById(id);
  if (!el) return;

  // Calculate the target scroll position considering the offset
  const elementPosition = el.getBoundingClientRect().top + window.pageYOffset - offset;

  // Get current scroll position
  const currentScrollPosition = window.pageYOffset;

  // Add a small buffer to avoid jittering
  const scrollBuffer = 5;

  // Check if the current scroll position is not already at the target, accounting for buffer
  if (
    Math.abs(currentScrollPosition - elementPosition) > scrollBuffer
  ) {
    // Scroll to the target element
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth',
    });
  }
};
