import React, { useRef } from "react";
import PropTypes from "prop-types";
import Editor from "../editorjs_field";
import { useIntl } from "react-intl";
import {
  Field,
  FieldError,
  FieldHint,
  FieldLabel,
  Stack,
} from "@strapi/design-system";
import { SStyleWrapper } from "./styles";
import usePluginConfig from "../../hooks/use-plugin-config";

const Editorjs = ({
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

  const { config, isLoading } = usePluginConfig();

  return (
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
            <Editor
              key={name}
              onChange={onChange}
              value={value}
              name={name}
              disabled={disabled}
              attribute={attribute}
              config={config}
              placeholder={placeholder}
            />
            <FieldHint />
            <FieldError />
          </Stack>
        </Field>
      ) : null}
    </SStyleWrapper>
  );
};

Editorjs.defaultProps = {
  description: null,
  disabled: false,
  error: null,
  labelAction: null,
  required: false,
};

Editorjs.propTypes = {
  intlLabel: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  attribute: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.object,
  error: PropTypes.string,
  labelAction: PropTypes.object,
  required: PropTypes.bool,
  value: PropTypes.object,
};

export default Editorjs;
