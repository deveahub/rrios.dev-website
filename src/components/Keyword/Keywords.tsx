import { FC } from 'react';

import { Keyword, KeywordsContainer } from './styles';

interface KeywordsProps {
  keywords: Array<string>;
}

const Keywords: FC<KeywordsProps> = ({ keywords }) => (
  <KeywordsContainer direction="row">
    {keywords.map((keyword) => (
      <Keyword key={keyword} href={`/?search=${keyword}`}>
        {keyword}
      </Keyword>
    ))}
  </KeywordsContainer>
);

export default Keywords;
