import * as React from "react";

import { prefixFileUrlWithBackendUrl, useLibrary } from "@strapi/helper-plugin";

interface IMediaLibComponent {
  isOpen: boolean;
  onChange: (files: FormattedMediaFile[]) => void;
  onToggle: (idx: any) => void;
  allowedTypes: string[];
}

interface FormattedMediaFile {
  alternativeText?: string;
  name?: string;
  alt: string;
  url: string;
  width: number | undefined;
  height: number | undefined;
  size: number | undefined;
  mime: string | undefined;
  formats: Record<string, any> | undefined;
}

export const MediaLibComponent: React.FC<IMediaLibComponent> = ({
  isOpen,
  onChange,
  onToggle,
  allowedTypes,
}) => {
  const { components }: any = useLibrary();
  const [data, setData] = React.useState<FormattedMediaFile[] | null>(null);

  const MediaLibraryDialog = components["media-library"];

  const handleInputChange = (files: FormattedMediaFile[]) => {
    if (files) {
      setData(files);
    }
  };

  const handleSelectAssets = (files: FormattedMediaFile[]) => {
    const formattedFiles: any = files.map((f) => ({
      alt: f.alternativeText || f.name,
      url: prefixFileUrlWithBackendUrl(f.url),
      width: f.width,
      height: f.height,
      size: f.size,
      mime: f.mime,
      formats: f.formats,
    }));
    onChange(formattedFiles);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <MediaLibraryDialog
      allowedTypes={allowedTypes}
      onClose={onToggle}
      onInputMediaChange={handleInputChange}
      onSelectAssets={handleSelectAssets}
    />
  );
};
