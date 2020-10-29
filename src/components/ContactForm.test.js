import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ContactForm from './ContactForm';

describe('Testing ContactForm functionality', () => {
    beforeAll(() => {
        render(<ContactForm />)
    })

    test('rendering ContactForm', async () => {
        const firstNameInput = screen.getByPlaceholderText(/edd/i)
        const lastNameInput = screen.getByPlaceholderText(/burke/i)
        const emailInput = screen.getByPlaceholderText(/email/i)
        const messageInput = screen.getByPlaceholderText(/message/i)

        fireEvent.change(firstNameInput, {target:{value:'Seth'}})
        fireEvent.change(lastNameInput, {target:{value:'Bradshaw'}})
        fireEvent.change(emailInput, {target:{value:'gg@isuckatvalorant.com'}})
        fireEvent.change(messageInput, {target:{value:'The eagles are garbage, but they are better at football then I am at valorant.'}})

        expect(firstNameInput).toHaveValue('Seth')
        expect(lastNameInput).toHaveValue('Bradshaw')
        expect(emailInput).toHaveValue('gg@isuckatvalorant.com')
        expect(messageInput).toHaveValue('The eagles are garbage, but they are better at football then I am at valorant.')

        const submit = screen.getByRole('submitter')
        fireEvent.click(submit)

        const firstNameText = await screen.findByText(/Seth/i)
        expect(firstNameText).toBeTruthy();
        const lastNameText = await screen.findByText(/Bradshaw/i)
        expect(lastNameText).toBeTruthy();
        const emailText = await screen.findByText(/gg@isuckatvalorant.com/i)
        expect(emailText).toBeTruthy();
        const messageText = await screen.findByText(/The eagles are garbage, but they are better at football then I am at valorant./i)
        expect(messageText).toBeTruthy();
    })
})