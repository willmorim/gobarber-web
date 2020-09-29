import { fireEvent, render, wait } from '@testing-library/react';
import React from 'react';
import Input from '../../components/Input';

jest.mock('@unform/core', () => {
  return {
    useField: () => {
      return {
        fieldName: 'email',
        defaultValue: '',
        registerField: jest.fn(),
        error: '',
      };
    },
  };
});

describe('Input component', () => {
  it('should be able to render an input', () => {
    const { getByPlaceholderText } = render(
      <Input name="email" placeholder="E-mail" />,
    );

    expect(getByPlaceholderText('E-mail')).toBeTruthy();
  });

  it('should render highlight on input focus', async () => {
    const { getByPlaceholderText, getByTestId } = render(
      <Input name="email" placeholder="E-mail" />,
    );

    const inputElement = getByPlaceholderText('E-mail');
    const containerElemet = getByTestId('input-container');

    fireEvent.focus(inputElement);

    await wait(() => {
      expect(containerElemet).toHaveStyle('border-color: #ff9000');
      expect(containerElemet).toHaveStyle('color: #ff9000');
    });

    fireEvent.blur(inputElement);

    await wait(() => {
      expect(containerElemet).not.toHaveStyle('border-color: #ff9000');
      expect(containerElemet).not.toHaveStyle('color: #ff9000');
    });
  });

  it('should keep input text highlight when input filled', async () => {
    const { getByPlaceholderText, getByTestId } = render(
      <Input name="email" placeholder="E-mail" />,
    );

    const inputElement = getByPlaceholderText('E-mail');
    const containerElemet = getByTestId('input-container');

    fireEvent.change(inputElement, {
      target: { value: 'johndoe@example.com.br' },
    });

    fireEvent.blur(inputElement);

    await wait(() => {
      expect(containerElemet).toHaveStyle('color: #ff9000');
    });
  });
});
