import { useState, useCallback, useRef, useEffect } from "react";

import { API, ToolConstructable, ToolSettings } from "@editorjs/editorjs";
import { useQueryParams } from "@strapi/helper-plugin";
import { createReactEditorJS } from "react-editor-js";
import { MessageDescriptor } from "react-intl";

import { customTools } from "../../config/customTools";
import { requiredTools } from "../../config/requiredTools";
import { MediaLibAdapter } from "../medialib/adapter";
import { MediaLibAttachesAdapter } from "../medialib/adapterAttaches";
import { MediaLibComponent } from "../medialib/Component";
import {
  changeFunc,
  changeFuncAttaches,
  getToggleFunc,
} from "../medialib/utils";

interface IEditorjsField {
  intlLabel: MessageDescriptor;
  onChange: (event: {
    target: { name: string; value: string | null; type: string };
  }) => void;
  attribute: { options: { [key: string]: unknown } };
  name: string;
  description?: MessageDescriptor;
  disabled?: boolean;
  error?: string;
  labelAction?: React.ReactNode;
  required?: boolean;
  value?: string;
  placeholder?: {
    defaultMessage: string;
  };
  config?: any;
}

export const EditorjsField: React.FC<IEditorjsField> = ({
  onChange,
  name,
  value,
  attribute,
  config,
  placeholder,
}) => {
  const ReactEditorJS = createReactEditorJS();

  const [newEditorInstance, setnewEditorInstance] = useState<API>();
  const [mediaLibBlockIndex, setMediaLibBlockIndex] = useState(-1);
  const [isMediaLibOpen, setIsMediaLibOpen] = useState(false);

  const [mediaLibAttachesBlockIndex, setMediaLibAttachesBlockIndex] =
    useState(-1);
  const [isMediaLibAttachesOpen, setIsMediaLibAttachesOpen] = useState(false);

  const mediaLibToggleFunc = useCallback(
    getToggleFunc({
      openStateSetter: setIsMediaLibOpen,
      indexStateSetter: setMediaLibBlockIndex,
    }),
    []
  );

  const mediaLibAttachesToggleFunc = useCallback(
    getToggleFunc({
      openStateSetter: setIsMediaLibAttachesOpen,
      indexStateSetter: setMediaLibAttachesBlockIndex,
    }),
    []
  );

  const handleMediaLibChange = useCallback(
    (data) => {
      changeFunc({
        indexStateSetter: setMediaLibBlockIndex,
        data,
        index: mediaLibBlockIndex,
        editor: newEditorInstance,
      });
      mediaLibToggleFunc(mediaLibBlockIndex);
    },
    [mediaLibBlockIndex, newEditorInstance]
  );

  const handleMediaLibAttachesChange = useCallback(
    (data) => {
      changeFuncAttaches({
        indexStateSetter: setMediaLibAttachesBlockIndex,
        data,
        index: mediaLibAttachesBlockIndex,
        editor: newEditorInstance,
      });
      mediaLibAttachesToggleFunc(mediaLibAttachesBlockIndex);
    },
    [mediaLibAttachesBlockIndex, newEditorInstance]
  );

  const customToolsOther: { [key: string]: ToolConstructable | ToolSettings } =
    {
      ...(attribute?.options?.image
        ? {
            mediaLib: {
              class: MediaLibAdapter,
              config: {
                mediaLibToggleFunc,
              },
            } as ToolSettings,
          }
        : {}),
      ...(attribute?.options?.attaches
        ? {
            mediaLibAttaches: {
              class: MediaLibAttachesAdapter,
              config: {
                mediaLibAttachesToggleFunc,
              },
            } as ToolSettings,
          }
        : {}),
    };

  const query = useQueryParams();
  const myRef = useRef<number>(0);

  useEffect(() => {
    myRef.current = myRef?.current + 1;
  }, [query]);

  return (
    <>
      <ReactEditorJS
        key={`editorjs${myRef.current}`}
        holder={`editorjs${name}`}
        defaultValue={value ? JSON.parse(value) : undefined}
        onReady={() => {
          document?.querySelector('[data-item-name="image"]')?.remove();
          document?.querySelector('[data-item-name="attaches"]')?.remove();
        }}
        tools={{
          ...requiredTools,
          ...customTools(attribute.options, config),
          ...customToolsOther,
        }}
        placeholder={placeholder?.defaultMessage}
        onChange={(api: API) => {
          setnewEditorInstance(api);
          api.saver.save().then((blocks) => {
            if (blocks?.blocks?.length > 0) {
              onChange({
                target: { name, value: JSON.stringify(blocks), type: "string" },
              });
            } else {
              onChange({
                target: { name, value: null, type: "string" },
              });
            }
          });
        }}
        minHeight={config.minHeight ? config.minHeight : 80}
      />
      <MediaLibComponent
        isOpen={isMediaLibOpen}
        onChange={handleMediaLibChange}
        onToggle={mediaLibToggleFunc}
        allowedTypes={["images"]}
      />
      <MediaLibComponent
        isOpen={isMediaLibAttachesOpen}
        onChange={handleMediaLibAttachesChange}
        onToggle={mediaLibAttachesToggleFunc}
        allowedTypes={["files"]}
      />
    </>
  );
};
