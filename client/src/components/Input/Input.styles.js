import styled, { css } from 'styled-components';

const sizes = {
  long: {
    width: '360px',
    height: '30px',
  },
  large: {
    width: '520px',
    height: '40px',
  },
  medium: {
    width: '260px',
    height: '40px',
  },
  short: {
    width: '80px',
    height: '40px',
  },
};

const sizeStyles = css`
  ${({ size }) => css`
    width: ${sizes[size].width};
    height: ${sizes[size].height};
  `}
`;

const placeholderText = css`
  ${({ placeholder }) => css`
    placeholder: ${placeholder};
  `}
`;

export const InputStyle = styled.input`
  border: 1px solid ${(props) => props.theme.color.gray};
  border-radius: 4px;
  padding: 0 4px;
  cursor: text;

  ${sizeStyles};
  ${placeholderText}
`;
