import styled, { css } from 'styled-components';

const sizes = {
  long: {
    width: '360px',
    height: '60px',
  },
  large: {
    width: '260px',
    height: '50px',
  },
  thinMedium: {
    width: '180px',
    height: '40px',
  },
  medium: {
    width: '130px',
    height: '44px',
  },
  small: {
    width: '65px',
    height: '36px',
  },
  mini: {
    width: '120px',
    height: '60px',
  },
};

const sizeStyles = css`
  ${({ size }) => css`
    width: ${sizes[size].width};
    height: ${sizes[size].height};
  `}
`;

const hoverStyle = css`
  &:hover {
    opacity: 0.8;
  }
`;

const colorStyle = css`
  ${({ color, theme }) => css`
    background: ${theme.color[color]};

    ${(color === 'primary' || color === 'secondary') &&
    css`
      color: ${theme.color.white};
    `}

    ${color === 'white' &&
    css`
      color: ${theme.color.primary};
      border: 1px solid ${theme.color.gray};
    `}

    ${color === 'gray' &&
    css`
      color: ${theme.color.darkgray};
      /* pointer-events: none; */
    `}
    ${color === 'kakao' &&
    css`
      color: ${theme.color.primary};
    `}
  `};

  ${({ color }) => color !== 'gray' && hoverStyle};
`;

export const Bold = styled.span`
  font-weight: 800;
  margin-left: 4px;
`;

export const KakaoIcon = styled.div`
  padding-top: 10px;
  display: inline;
  bottom: -10px;
`;

export const ButtonStyle = styled.button`
  border-radius: 4px;
  font-weight: 600;

  ${sizeStyles}
  ${colorStyle}
`;
