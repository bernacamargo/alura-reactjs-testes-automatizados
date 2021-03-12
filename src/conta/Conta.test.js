import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Conta from './Conta';

describe('Componente conta', () => {
    it('exibir saldo da conta com a formatação monetaria', () => {
        render(<Conta saldo={1000} />);
        const saldo = screen.getByTestId('saldo-conta');
        expect(saldo.textContent).toBe('R$ 1000');
    });

    it('chama a função de realizar transacao quando o botao e clicado', () => {
        const realizarTransacao = jest.fn();
        render(<Conta saldo={1000} realizarTransacao={realizarTransacao} />);
        fireEvent.click(screen.getByText('Realizar operação'));
        expect(realizarTransacao).toHaveBeenCalled();
    });
});
