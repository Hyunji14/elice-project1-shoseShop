import styled from 'styled-components';

export const Label = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  user-select: none;

  &:before {
    content: '';
    height: 1.5rem;
    width: 1.5rem;
    background-color: ${(props) => props.theme.color.gray};
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='white' className='w-4 h-4'%3E%3Cpath fillRule='evenodd' d='M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z' clipRule='evenodd' /%3E%3C/svg%3E%0A");
    border-radius: 50%;
    background-position: center;
    background-size: 90%;
    background-repeat: no-repeat;
  }

  &:after {
    opacity: 0;
    content: '';
    position: absolute;
    height: 1.5rem;
    width: 1.5rem;
    border-radius: 50%;
    background-color: ${(props) => props.theme.color.primary};
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='white' className='w-4 h-4'%3E%3Cpath fillRule='evenodd' d='M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z' clipRule='evenodd' /%3E%3C/svg%3E%0A");
    background-position: center;
    background-size: 90%;
    background-repeat: no-repeat;
  }
`;

export const Input = styled.input`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  width: 1px;
  display: none;

  &:checked ~ ${Label}::after {
    opacity: 1;
  }
`;
