import { Videos } from '@/pods/videos';

export const canLoadMoreVideos = (videos: Videos | null) => {
  if (!videos) return false;

  return (
    Number(videos.eporner.page) < Number(videos.eporner.total_pages) ||
    Number(videos.redtube?.page) < Number(videos.redtube.total_pages)
  );
};
