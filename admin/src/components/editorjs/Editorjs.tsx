import * as React from "react";

import {
  Field,
  FieldError,
  FieldHint,
  FieldLabel,
  Stack,
} from "@strapi/design-system";
import { MessageDescriptor, useIntl } from "react-intl";

import { usePluginConfig } from "../../hooks/usePluginConfig";
import { EditorjsField } from "../editorjs_field/EditorjsField";

import { SStyleWrapper } from "./styles";

interface IEditorjs {
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
}

export const Editorjs: React.FC<IEditorjs> = ({
  name,
  description,
  intlLabel,
  required,
  onChange,
  value,
  disabled,
  attribute,
  labelAction,
  placeholder,
  error,
}) => {
  const { formatMessage } = useIntl();

  const { config } = usePluginConfig();

  return (
    <>
      <SStyleWrapper className={error !== null ? "error" : null}>
        {config ? (
          <Field
            id={name}
            name={name}
            hint={description && formatMessage(description)}
            required={required}
            error={error}
          >
            <Stack spacing={1}>
              <FieldLabel
                action={labelAction}
                required={required}
                style={{ display: "inline-flex" }}
              >
                {formatMessage(intlLabel)}
              </FieldLabel>
              <EditorjsField
                intlLabel={intlLabel}
                onChange={onChange}
                attribute={attribute}
                name={name}
                description={description}
                disabled={disabled}
                error={error}
                labelAction={labelAction}
                required={required}
                value={value}
                placeholder={placeholder}
                config={config}
              />
              <FieldHint />
              <FieldError />
            </Stack>
          </Field>
        ) : null}
      </SStyleWrapper>
    </>
  );
};
