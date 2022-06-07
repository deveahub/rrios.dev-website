import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { ChangeEvent, FC, useCallback, useMemo, useState } from 'react';

import { useDebounceValue } from '@/pods/utils/hooks';
import { ComponentProps } from '@/styles';

import Spinner from '../Spinner';
import Stack from '../Stack';
import Text from '../Text';
import { Input, Tag, TagsContainer, TagSelectorContainer } from './styles';

interface TagSelectorProps extends ComponentProps<typeof TagSelectorContainer> {
  tags?: string[];
  search?: boolean;
  linkMore?: string;
  loading?: boolean;
}

const TagSelector: FC<TagSelectorProps> = ({
  tags = [],
  loading = false,
  search = false,
  linkMore,
  ...props
}) => {
  const [tagFilter, setTagFilter] = useState('');
  const debounceValue = useDebounceValue(tagFilter);
  const { t } = useTranslation();
  const properTags = useMemo(
    () =>
      debounceValue
        ? tags.filter((tag) => tag.match(debounceValue.toLowerCase()))
        : tags,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [debounceValue, tags.length]
  );

  const onTagFilterChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setTagFilter(e.target.value),
    [setTagFilter]
  );

  return (
    <TagSelectorContainer direction="column" spacing="2" {...props}>
      {loading && (
        <Stack
          fullWidth
          justifyContent="center"
          alignItems="center"
          css={{
            minHeight: 76,
          }}
        >
          <Spinner />
        </Stack>
      )}
      {!loading && search && (
        <Input
          type="text"
          onChange={onTagFilterChange}
          placeholder={t('tagSelectorFilterPlaceholder')}
        />
      )}
      <TagsContainer spacing="1">
        {properTags.map((tag) => (
          <Link href={`/?search=${tag}`} shallow scroll passHref>
            <Tag key={tag}>{tag}</Tag>
          </Link>
        ))}
        {!loading && linkMore && (
          <Link href={linkMore} shallow scroll passHref>
            <Tag>{t('tagSelectorAllTags')}</Tag>
          </Link>
        )}
        {!loading && !properTags.length && (
          <Text>{t('tagSelectorNoResults')}</Text>
        )}
      </TagsContainer>
    </TagSelectorContainer>
  );
};

export default TagSelector;
