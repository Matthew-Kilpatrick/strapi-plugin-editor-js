export default function prefixFileUrlWithBackendUrl ( fileURL ) {
  return !!fileURL && fileURL.startsWith('/') ? `${ window.strapi.backendURL }${ fileURL }` : fileURL;
};
