import React from 'react';
import { useStrapiApp } from '@strapi/strapi/admin';
import prefixFileUrlWithBackendUrl from '../utils/prefixFileUrlWithBackendUrl';
import PropTypes from 'prop-types';

const MediaLibComponent = ({isOpen, onChange, onToggle}) => {

  const components = useStrapiApp('MediaLib', ({ components }) => components);

  const MediaLibraryDialog = components['media-library'];

  const handleSelectAssets = files => {
    const formattedFiles = files.map(f => ({
      alt: f.alternativeText || f.name,
      url: prefixFileUrlWithBackendUrl(f.url),
      width: f.width,
      height: f.height,
      size: f.size,
      mime: f.mime,
      formats: f.formats
    }));
    onChange(formattedFiles);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <MediaLibraryDialog
      allowedTypes={['images']}
      onClose={onToggle}
      onSelectAssets={handleSelectAssets}
    />
  );

};

MediaLibComponent.propTypes = {
  isOpen: PropTypes.bool,
  onChange: PropTypes.func,
  onToggle: PropTypes.func
};

export default MediaLibComponent;
