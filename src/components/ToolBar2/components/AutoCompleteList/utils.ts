export const findActiveIdxInElement = (nodes: NodeListOf<ChildNode>) => {
  let idx: number | null = null;

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < nodes.length; i++) {
    const element = nodes[i] as HTMLAnchorElement;
    if (element === document.activeElement) {
      idx = i;
      break;
    }
  }

  return idx;
};
