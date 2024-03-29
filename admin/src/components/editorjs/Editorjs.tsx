import React, { useRef } from "react";

import {
  Field,
  FieldError,
  FieldHint,
  FieldLabel,
  Stack,
} from "@strapi/design-system";
import { MessageDescriptor, useIntl } from "react-intl";

import { usePluginConfig } from "../../hooks/usePluginConfig";
import EditorjsField from "../editorjs_field/EditorjsField";

import { SStyleWrapper } from "./styles";

interface IEditorjs {
  intlLabel: MessageDescriptor;
  onChange: (event: {
    target: { name: string; value: string | null; type: string };
  }) => void;
  attribute: { required: boolean; options: { [key: string]: unknown } };
  name: string;
  description?: MessageDescriptor;
  disabled?: boolean;
  error?: string;
  labelAction?: React.ReactNode;
  value?: string;
  placeholder?: {
    defaultMessage: string;
  };
}

export const Editorjs = React.forwardRef(
  (
    {
      name,
      description,
      intlLabel,
      onChange,
      value,
      disabled,
      attribute,
      labelAction,
      placeholder,
      error,
    }: IEditorjs,
    ref: React.Ref<any>
  ) => {
    const { formatMessage } = useIntl();
    const { config, isLoading } = usePluginConfig();

    return (
      <SStyleWrapper className={error !== "" ? "error" : null}>
        <Field
          id={name}
          name={name}
          hint={description && formatMessage(description)}
          required={attribute.required}
          error={error}
        >
          {config && !isLoading ? (
            <Stack spacing={1}>
              <FieldLabel>{formatMessage(intlLabel)}</FieldLabel>
              <EditorjsField
                intlLabel={intlLabel}
                onChange={onChange}
                attribute={attribute}
                name={name}
                description={description}
                disabled={disabled}
                error={error}
                labelAction={labelAction}
                required={attribute.required}
                value={value}
                placeholder={placeholder}
                config={config}
              />
              <FieldHint />
              <FieldError />
            </Stack>
          ) : null}
        </Field>
      </SStyleWrapper>
    );
  }
);
