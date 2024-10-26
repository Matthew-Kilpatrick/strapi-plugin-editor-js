import { OutputData } from '@editorjs/editorjs';

export const jsonToEditorJsOutputData = (json: string|OutputData): OutputData|undefined => {
  if (typeof json === 'object') {
    return json;
  }
  try {
    return JSON.parse(json);
  } catch (e) {
    return;
  }
};

export const editorJsOutputDataToJson = (outputData: OutputData): string|null => {
  try {
    return JSON.stringify(outputData);
  } catch (e) {
    return null;
  }
};
