import { Formik } from 'formik';
import { useState } from 'react';

import {
  DEFAULT_SEARCH_PARAMETERS,
  useSearchParameters,
} from '@/pods/searchParameters';
import { useSearch } from '@/pods/videos';

import Filters from '../Filters';
import SearchInput from '../SearchInput';
import { Form } from './styles';

const ToolBarForm = () => {
  const parameters = useSearchParameters();
  const {
    handlers: { onSearch },
  } = useSearch();
  const [visibility, setVisibility] = useState({
    input: false,
    filters: false,
  });

  const toggleVisibilityInput = () =>
    setVisibility((x) => ({ filters: false, input: !x.input }));
  const toggleVisibilityFilters = () =>
    setVisibility((x) => ({ input: false, filters: !x.filters }));

  return (
    <Formik
      enableReinitialize
      onSubmit={onSearch}
      initialValues={{
        ...DEFAULT_SEARCH_PARAMETERS,
        ...parameters,
      }}
    >
      <Form noValidate>
        <SearchInput
          visible={visibility.input}
          toggleVisibility={toggleVisibilityInput}
        />
        <Filters
          visible={visibility.filters}
          toggleVisibility={toggleVisibilityFilters}
        />
      </Form>
    </Formik>
  );
};

export default ToolBarForm;
