import { useCallback, useEffect } from 'react';

import { findActiveIdxInElement } from './utils';

interface UseAutoCompleteListControlsProps {
  autoCompleteContainer: HTMLDivElement | null;
  searchInput: HTMLInputElement | null;
  displayAutocomplete: boolean;
}

const useAutoCompleteListControls = ({
  autoCompleteContainer,
  searchInput,
  displayAutocomplete,
}: UseAutoCompleteListControlsProps) => {
  const onKeyPress = useCallback(
    (e: KeyboardEvent) => {
      if (!autoCompleteContainer) return;
      if (e.key === 'Escape') {
        (document.activeElement as any).blur();
        e.stopPropagation();
        e.preventDefault();
      }

      if (e.key === 'ArrowDown') {
        e.stopPropagation();
        e.preventDefault();
        const activeIdx = findActiveIdxInElement(
          autoCompleteContainer.childNodes
        );
        const nodes =
          autoCompleteContainer.childNodes as NodeListOf<HTMLAnchorElement>;
        const anchor =
          nodes[activeIdx === null ? 0 : activeIdx + 1] || nodes[0];

        if (anchor) anchor.focus();
      }

      if (e.key === 'ArrowUp') {
        e.preventDefault();
        e.stopPropagation();
        const activeIdx = findActiveIdxInElement(
          autoCompleteContainer.childNodes
        );
        const nodes =
          autoCompleteContainer.childNodes as NodeListOf<HTMLAnchorElement>;
        const length = nodes.length - 1;
        const anchor = nodes[activeIdx === null ? length : activeIdx - 1];

        if (anchor) {
          anchor.focus();
        } else {
          searchInput?.focus();
        }
      }
    },
    [searchInput, autoCompleteContainer]
  );

  useEffect(() => {
    if (displayAutocomplete) {
      window.addEventListener('keydown', onKeyPress);
    } else {
      window.removeEventListener('keydown', onKeyPress);
    }

    return () => {
      window.removeEventListener('keydown', onKeyPress);
    };
  }, [onKeyPress, displayAutocomplete]);
};

export default useAutoCompleteListControls;
