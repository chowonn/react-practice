export const getPbImageURL = (item, fileName = 'poster') =>
  `https://fast-fall.pockethost.io/api/files/${item.collectionId}/${item.id}/${item[fileName]}`;
