export const scrollToComponent = (id: string): void => {
    const el = document.getElementById(id);
    if(!el) return ;
    el.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }