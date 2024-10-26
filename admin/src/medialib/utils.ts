import EditorJS from '@editorjs/editorjs';

export const changeFunc = ({editor, data}: {editor: EditorJS, data: any[]}) => {
  data.forEach((entry) => {

    if (!entry.mime.includes("image")) {
      return;
    }

    const newBlockType = "image";
    const newBlockData = {
      url: entry.url.replace(window.location.origin, ""),
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
      stretched: false
    };

    editor.blocks.insert(newBlockType, newBlockData, {});
    // remove all placeholder blocks of type mediaLib
    let i = 0;
    while (i < editor.blocks.getBlocksCount()) {
      const block = editor.blocks.getBlockByIndex(i);
      if (block?.name === 'mediaLib') {
        editor.blocks.delete(i);
      } else {
        i++;
      }
    }
  });
};
