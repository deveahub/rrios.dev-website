import { useFormikContext } from 'formik';
import Link from 'next/link';
import { useState } from 'react';

import {
  AutocompleteSearchQueryParams,
  useAutocompleteSearch,
} from '@/pods/autoCompleteSearch';

import { AutocompleteContainer, AutocompleteItem } from './styles';
import useAutoCompleteListControls from './useAutoCompleteListControls';

interface AutocompleteListProps {
  searchInput: HTMLInputElement | null;
}

const AutocompleteList = ({ searchInput }: AutocompleteListProps) => {
  const {
    values: { search, sexualityScope },
    dirty,
  } = useFormikContext<AutocompleteSearchQueryParams>();
  const [autoCompleteContainerRef, setAutoCompleteContainerRef] =
    useState<HTMLDivElement | null>(null);
  const autocomplete = useAutocompleteSearch(
    search && dirty
      ? {
          search,
          sexualityScope,
        }
      : undefined
  );

  const displayAutocomplete =
    Boolean(autocomplete.data) && Boolean(search) && dirty;

  useAutoCompleteListControls({
    displayAutocomplete,
    searchInput,
    autoCompleteContainer: autoCompleteContainerRef,
  });

  if (!displayAutocomplete) return null;
  return (
    <AutocompleteContainer
      id="autocomplete-stack"
      ref={setAutoCompleteContainerRef}
      direction="column"
    >
      {autocomplete.data?.map((item) => (
        <Link key={item.url} href={item.url} shallow scroll passHref>
          <AutocompleteItem className="autocomplete-item">
            {item.label}
          </AutocompleteItem>
        </Link>
      ))}
    </AutocompleteContainer>
  );
};

export default AutocompleteList;
