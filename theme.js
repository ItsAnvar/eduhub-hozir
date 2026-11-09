try {
  const saved = localStorage.getItem('edu-theme')
  if (saved === 'dark' || (!saved && matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.dataset.theme = 'dark'
  }
} catch { /* Theme storage is optional. */ }
