import { useField } from 'formik';
import { useTranslation } from 'next-i18next';
import { FC, KeyboardEventHandler, useRef } from 'react';
import {
  ArrowRight as ArrowRightIcon,
  Search as SearchIcon,
} from 'react-feather';

import AutoCompleteList from '../AutoCompleteList';
import {
  Container,
  Input,
  MobileButtonSearch,
  SubmitSearchButton,
} from './styles';
import useSearchInputFocus from './useSearchInputFocus';

interface InputSearchProps {
  visible: boolean;
  toggleVisibility: () => void;
}

const InputSearch: FC<InputSearchProps> = ({ visible, toggleVisibility }) => {
  const [field] = useField<string>('search');
  const inputRef = useRef<HTMLInputElement>(null);
  const { t } = useTranslation();
  useSearchInputFocus(inputRef.current);

  const hideMobileButtonSearch: KeyboardEventHandler<HTMLInputElement> = (
    e
  ) => {
    if (visible && e.key.toLocaleLowerCase() === 'escape') {
      toggleVisibility();
    }
  };

  const properToggleVisibility = () => {
    toggleVisibility();
    setTimeout(() => {
      inputRef.current?.focus();
    }, 10);
  };

  return (
    <>
      <MobileButtonSearch
        visible={visible}
        type="button"
        title="Display search"
        onClick={properToggleVisibility}
        variant="link"
      >
        <SearchIcon />
      </MobileButtonSearch>
      <Container visible={visible}>
        <Input
          {...field}
          id="input-search"
          onKeyDown={hideMobileButtonSearch}
          autoFocus
          ref={inputRef}
          placeholder={t('common:toolbarInputPlaceholder')}
          autoComplete="off"
        />
        <AutoCompleteList searchInput={inputRef.current} />
        <SubmitSearchButton type="submit" variant="link" title="Search">
          <ArrowRightIcon />
        </SubmitSearchButton>
      </Container>
    </>
  );
};

export default InputSearch;
