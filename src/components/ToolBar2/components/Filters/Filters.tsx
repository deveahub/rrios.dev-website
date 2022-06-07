import { FC } from 'react';
import { Sliders as SlidersIcon } from 'react-feather';

import {
  DEFAULT_SEARCH_PARAMETERS,
  useSearchParameters,
} from '@/pods/searchParameters';
import { SexualityScope, useSearch, VideoOrder } from '@/pods/videos';

import {
  VIDEO_ORDER_OPTIONS,
  VIDEO_SEXUALITY_SCOPE_OPTIONS,
} from './constants';
import { Container, MobileFilterButton, StyledSelect } from './styles';

interface FiltersProps {
  visible: boolean;
  toggleVisibility: () => void;
}
const Filters: FC<FiltersProps> = ({ visible, toggleVisibility }) => {
  const {
    handlers: { onSearch },
  } = useSearch();
  const parameters = useSearchParameters();

  return (
    <>
      <MobileFilterButton
        title="Toggle filters"
        variant="link"
        onClick={toggleVisibility}
        visible={visible}
        type="button"
      >
        <SlidersIcon />
      </MobileFilterButton>
      <Container visible={visible}>
        <StyledSelect
          options={VIDEO_ORDER_OPTIONS}
          value={
            (parameters.order || DEFAULT_SEARCH_PARAMETERS.order) as VideoOrder
          }
          onChange={(e) => onSearch({ order: e.target.value as VideoOrder })}
        />
        <StyledSelect
          options={VIDEO_SEXUALITY_SCOPE_OPTIONS}
          value={
            (parameters.sexualityScope ||
              DEFAULT_SEARCH_PARAMETERS.sexualityScope) as SexualityScope
          }
          onChange={(e) =>
            onSearch({ sexualityScope: e.target.value as SexualityScope })
          }
        />
      </Container>
    </>
  );
};

export default Filters;
