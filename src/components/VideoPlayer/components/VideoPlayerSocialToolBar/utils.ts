import { Video } from '@/pods/video';

export const makeVideoURL = (id: string, provider: string, title?: string) =>
  `https://porner.pro/video/${provider}/${id}${
    title
      ? `/${title.toLowerCase().replace(/\s/g, '-').replace(/&.+;/g, '')}`
      : ''
  }`;

export const makeTwitterShareURL = ({
  title,
  provider,
  id,
  keywords,
}: Video) => {
  const processedTitle =
    title.length > 120 ? `${title.slice(0, 117)}...` : title;
  const processedHashtags = keywords.slice(0, 2).join(',').replace(/\s/g, '-');
  return `https://twitter.com/intent/tweet?text=${processedTitle}&url=${makeVideoURL(
    id,
    provider
  )}&hashtags=${processedHashtags},pornerpro&via=pornerpro_web`;
};

export const makeRedditShareURL = ({ provider, title, id }: Video) =>
  `https://www.reddit.com/submit?url=${makeVideoURL(
    id,
    provider,
    title
  )}&title=${title}%20-%20PORNER.PRO`;

export const makeEmailShareURL = ({ provider, title, id }: Video) =>
  `mailto:?subject=${title} - PORNER.PRO&body=${makeVideoURL(
    id,
    provider,
    title
  )}`;
