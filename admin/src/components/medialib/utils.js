export const getToggleFunc = ({ openStateSetter, indexStateSetter }) => {
  return (idx) => {
    if (idx || idx === 0) {
      indexStateSetter(idx);
    }

    openStateSetter((prev) => !prev);
  };
};

export const changeFunc = ({ indexStateSetter, editor, data, index }) => {
  let insertedBlocksCount = 0;
  data.forEach((entry) => {
    if (!entry.mime.includes("image")) {
      return;
    }
    const newBlockType = "image";
    const newBlockData = {
      file: {
        url: entry.url.replace(window.location.origin, ""),
        mime: entry.mime,
        height: entry.height,
        width: entry.width,
        size: entry.size,
        alt: entry.alt,
        formats: entry.formats,
      },
      caption: "",
      withBorder: false,
      withBackground: false,
      stretched: false,
    };

    editor.blocks.insert(
      newBlockType,
      newBlockData,
      {},
      index + insertedBlocksCount,
      true
    );
    insertedBlocksCount++;
  });

  editor.blocks.delete(index + insertedBlocksCount);
  indexStateSetter(-1);
};

export const changeFuncAttaches = ({
  indexStateSetter,
  editor,
  data,
  index,
}) => {
  let insertedBlocksCount = 0;
  data.forEach((entry) => {
    const newBlockType = "attaches";
    const newBlockData = {
      file: {
        url: entry.url.replace(window.location.origin, ""),
        size: entry.size * 1024,
        name: entry.name,
        extension: entry.ext,
      },
      title: entry.alt,
    };

    editor.blocks.insert(
      newBlockType,
      newBlockData,
      {},
      index + insertedBlocksCount,
      true
    );
    insertedBlocksCount++;
  });

  editor.blocks.delete(index + insertedBlocksCount);
  indexStateSetter(-1);
};
