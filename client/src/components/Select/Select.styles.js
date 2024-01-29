import styled, { css } from 'styled-components';

const sizes = {
  detailSize: {
    width: '500px',
  },
  productGender: {
    width: '260px',
  },
};

const sizeStyles = css`
  ${({ size }) => css`
    width: ${sizes[size].width};
  `}
`;

export const Container = styled.div`
  ${sizeStyles};
`;
