import { Box } from "@strapi/design-system";
import styled from "styled-components";

export const SStyleWrapper = styled(Box)`
  .codex-editor__redactor {
    color: ${({ theme }) => theme.colors.neutral800};
  }
  .ce-toolbox__button {
    color: ${({ theme }) => theme.colors.neutral800};
    &:hover {
      color: ${({ theme }) => theme.colors.neutral150};
      background-color: ${({ theme }) => theme.colors.neutral900};
    }
  }
  .ce-toolbar__plus,
  .ce-toolbar__settings-btn {
    color: ${({ theme }) => theme.colors.neutral800};
    background-color: ${({ theme }) => theme.colors.neutral100};
    &:hover {
      color: ${({ theme }) => theme.colors.neutral150};
      background-color: ${({ theme }) => theme.colors.neutral900};
    }
  }
  .codex-editor {
    border: 1px solid ${({ theme }) => theme.colors.neutral200};
    border-radius: ${({ theme }) => theme.borderRadius};
    background: ${({ theme }) => theme.colors.neutral0};
  }
  &.error .codex-editor {
    border-color: ${({ theme }) => theme.colors.danger700};
  }
  .ce-block--selected {
    .ce-block__content {
      background: ${({ theme }) => theme.colors.neutral100};
    }
  }

  .cdx-input {
    border: 1px solid ${({ theme }) => theme.colors.neutral200};
    border-radius: ${({ theme }) => theme.borderRadius};
    color: ${({ theme }) => theme.colors.neutral800};
    line-height: 1.6;
    ::placeholder {
      color: ${({ theme }) => theme.colors.neutral500};
      opacity: 1;
    }
    &:focus-within,
    &:focus {
      border: 1px solid ${({ theme }) => theme.colors.primary600};
      box-shadow: ${({ theme }) => theme.colors.primary600} 0px 0px 0px 2px;
    }
  }

  .codex-editor {
    padding: 16px;
    font-size: 1rem;
    a {
      color: ${({ theme }) => theme.colors.secondary500};
      &:hover {
        color: ${({ theme }) => theme.colors.secondary700};
      }
    }
  }
  *:focus-visible {
    outline: none;
  }
  mark {
    background-color: #e9ddf6;
    padding: 0 0.2em;
    border-radius: 2px;
    font-weight: 600;
  }
  code {
    background-color: #d9f6f0;
    padding: 0 0.2em;
    border-radius: 2px;
    font-weight: 600;
  }
  .ce-header {
    color: ${({ theme }) => theme.colors.neutral800};
  }
  h1 {
    font-size: 2.5rem;
    font-weight: bold;
  }
  h2 {
    font-size: 1.5em;
    font-weight: bold;
  }
  h3 {
    font-size: 1.17em;
    font-weight: bold;
  }
  h4 {
    font-size: 1em;
    font-weight: bold;
  }
  h5 {
    font-size: 0.83em;
    font-weight: bold;
  }
  h6 {
    font-size: 0.67em;
    font-weight: bold;
  }
  label {
    display: block;
  }
  &.bordered {
    .editorWrapper {
      border-color: red;
    }
  }
  > div + p {
    width: 100%;
    padding-top: 12px;
    font-size: 1.2rem;
    line-height: normal;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: -9px;
  }
  div,
  pre,
  code {
    ::-webkit-scrollbar {
      height: 5px;
      width: 5px;
      cursor: default;
    }
  }
  .cdx-input.image-tool__caption {
    font-size: 0.9rem;
    line-height: 1.5;
  }
  .Box {
    display: flex;
  }
  .ToggleShow {
    margin-left: auto;
    font-size: 14px;
  }

  // * attachement styles
  .cdx-attaches {
    &.cdx-attaches--with-file {
      background: ${({ theme }) => theme.colors.neutral0};
      border: 1px solid ${({ theme }) => theme.colors.neutral200};
      .cdx-attaches__title {
        color: ${({ theme }) => theme.colors.neutral800};
      }
      .cdx-attaches__size {
        color: ${({ theme }) => theme.colors.neutral500};
      }
      .cdx-attaches__download-button {
        background: ${({ theme }) => theme.colors.neutral100};
        color: ${({ theme }) => theme.colors.neutral800};
      }
    }
  }

  // * link-tool styles
  .link-tool {
    .link-tool__content {
      border: 1px solid ${({ theme }) => theme.colors.neutral200};
      border-radius: ${({ theme }) => theme.borderRadius};
      box-shadow: none;
      background: transparent;
      color: ${({ theme }) => theme.colors.neutral800}!important;
      transition: none;
      transition: all 0.05s ease-in-out;
      .link-tool__title {
        transition: all 0.05s ease-in-out;
      }
      &:hover {
        outline: ${({ theme }) => theme.colors.primary500} solid 2px;
        border-color: ${({ theme }) => theme.colors.primary500};
        .link-tool__title {
          color: ${({ theme }) => theme.colors.primary500}!important;
        }
      }
      .link-tool__anchor {
        color: ${({ theme }) => theme.colors.neutral700};
      }
    }
    .link-tool__progress {
      border: 1px solid ${({ theme }) => theme.colors.neutral200};
      border-radius: ${({ theme }) => theme.borderRadius};
      box-shadow: none;
      background: transparent;
    }
  }

  .cdx-quote {
    .cdx-quote__text {
      line-height: 1.6;
    }
    .cdx-quote__caption {
    }
  }

  .cdx-checklist {
    .cdx-checklist__item {
      .cdx-checklist__item-text {
        line-height: 1.5;
      }
    }
    .cdx-checklist__item--checked {
      .cdx-checklist__item-checkbox-check {
        background: ${({ theme }) => theme.colors.primary500};
        border-color: ${({ theme }) => theme.colors.primary500};
      }
    }
  }

  .cdx-warning {
    &:before {
      filter: invert(1);
      background-color: rgb(24, 24, 38);
      border-radius: ${({ theme }) => theme.borderRadius};
    }
  }
`;
