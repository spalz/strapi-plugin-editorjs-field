import React, { useState, useCallback, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { createReactEditorJS } from "react-editor-js";
import requiredTools from "../../config/requiredTools";
import customTools from "../../config/customTools";
import { useQueryParams } from "@strapi/helper-plugin";

import MediaLibAdapter from "../medialib/adapter";
import MediaLibAttachesAdapter from "../medialib/adapterAttaches";
import MediaLibComponent from "../medialib/component";
import {
  changeFunc,
  changeFuncAttaches,
  getToggleFunc,
} from "../medialib/utils";

const EditorField = ({
  onChange,
  name,
  value,
  attribute,
  config,
  placeholder,
}) => {
  const ReactEditorJS = createReactEditorJS();

  const [newEditorInstance, setnewEditorInstance] = useState();
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
      mediaLibToggleFunc();
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
      mediaLibAttachesToggleFunc();
    },
    [mediaLibAttachesBlockIndex, newEditorInstance]
  );

  const customImageTool = {
    ...(attribute?.options?.image
      ? {
          mediaLib: {
            class: MediaLibAdapter,
            config: {
              mediaLibToggleFunc,
            },
          },
        }
      : {}),
  };

  const customAttachesTool = {
    ...(attribute?.options?.attaches
      ? {
          mediaLibAttaches: {
            class: MediaLibAttachesAdapter,
            config: {
              mediaLibAttachesToggleFunc,
            },
          },
        }
      : {}),
  };

  const query = useQueryParams();
  const myRef = useRef();

  useEffect(() => {
    myRef.current = myRef.current + 1;
  }, [query]);

  return (
    <>
      <ReactEditorJS
        key={`editorjs${myRef.current}`}
        holder={`editorjs${name}`}
        defaultValue={value ? JSON.parse(value) : undefined}
        onReady={() => {
          document.querySelector('[data-item-name="image"]').remove();
          document.querySelector('[data-item-name="attaches"]').remove();
        }}
        tools={{
          ...requiredTools,
          ...customTools(attribute.options, config),
          ...customImageTool,
          ...customAttachesTool,
        }}
        placeholder={placeholder?.defaultMessage}
        onChange={(api) => {
          setnewEditorInstance(api);
          api.saver.save().then((blocks) => {
            if (blocks?.blocks?.length > 0) {
              onChange({
                target: { name, value: JSON.stringify(blocks) },
              });
            } else {
              onChange({
                target: { name, value: null },
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

EditorField.propTypes = {
  key: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  attribute: PropTypes.any,
  config: PropTypes.any,
};

export default EditorField;
