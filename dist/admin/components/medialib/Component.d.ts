import * as React from "react";
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
export declare const MediaLibComponent: React.FC<IMediaLibComponent>;
export {};
