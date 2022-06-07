import { useCallback, useEffect } from 'react';

const useSearchInputFocus = (searchInput: HTMLInputElement | null) => {
  const onKeyPress = useCallback(
    (e: KeyboardEvent) => {
      // CTRL + SHIFT + L - Focus input
      if (e.shiftKey && e.ctrlKey && e.key.toUpperCase() === 'L')
        searchInput?.focus();
    },
    [searchInput]
  );

  useEffect(() => {
    window.addEventListener('keypress', onKeyPress);

    return () => {
      window.removeEventListener('keypress', onKeyPress);
    };
  }, [onKeyPress]);
};

export default useSearchInputFocus;
