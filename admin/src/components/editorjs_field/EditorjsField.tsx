import React, { useEffect, useRef, memo, useState, useCallback } from "react";
import EditorJS, {
  API,
  ToolConstructable,
  ToolSettings,
  OutputData,
} from "@editorjs/editorjs";
import styled from "styled-components";
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
    target: {
      name: string;
      value: string | null;
      type: string;
    };
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
  isLoading?: boolean;
}

const INITIAL_DATA: OutputData = {
  time: new Date().getTime(),
  blocks: [
    {
      type: "paragraph",
      data: {
        text: "",
      },
    },
  ],
};

let EditorjsFieldNew: React.FC<IEditorjsField> = ({
  name,
  value,
  onChange,
  attribute,
  config,
  isLoading,
}) => {
  const ref = useRef<EditorJS | null>(null);
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
    (data: any) => {
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
    (data: any) => {
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

  useEffect(() => {
    if (!ref.current) {

      const editor = new EditorJS({
        holder: `${name}`,

        tools: {
          ...requiredTools,
          ...customTools(attribute.options, config),
          ...customToolsOther,
        },
        defaultBlock: "paragraph",
        onReady: () => {
          document?.querySelector('[data-item-name="image"]')?.remove();
          document?.querySelector('[data-item-name="attaches"]')?.remove();
        },
        data: !value || value === "" ? INITIAL_DATA : JSON.parse(value),
        async onChange(api, event) {
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
        },
        minHeight: config.minHeight ? config.minHeight : 80,
      });
      ref.current = editor;
    }

    return () => {
      if (ref.current && ref.current.destroy) {
        ref.current.destroy();
      }
    };
  }, [config, isLoading]);

  return (
    <div>
      <SEditor id={`${name}`} />
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
    </div>
  );
};

EditorjsFieldNew = memo(EditorjsFieldNew);

const SEditor = styled.div`
  width: 100%;
`;

export default EditorjsFieldNew;
