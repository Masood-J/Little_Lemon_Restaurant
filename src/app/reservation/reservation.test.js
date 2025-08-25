/* eslint-disable react/display-name */
import '@testing-library/jest-dom'
import {fireEvent, render, screen} from '@testing-library/react'
import { useRouter } from 'next/navigation'
import Reservations from './page'
import MyForm from "../../components/section/MyForm";
import Mybutton from "@/components/ui/Button";
jest.mock('../../components/section/Navbar', () => () => <div />)
jest.mock('../../components/section/Footer', () => () => <div />)
jest.mock('next/navigation', () => ({
    useRouter: () => ({
        push: jest.fn(),
    }),
}))

describe('Reservations Page', () => {
    test('renders the heading', () => {
        render(<Reservations />)

        expect(
            screen.getByRole('heading', { name: /table reservation/i })
        ).toBeInTheDocument()
    })
})
describe("MyForm Component", () => {

    test("renders all form fields", () => {
        render(<MyForm />)

        expect(screen.getByLabelText(/Date/i)).toBeInTheDocument()
        expect(screen.getByLabelText(/Time/i)).toBeInTheDocument()
        expect(screen.getByLabelText(/Number Of Guests/i)).toBeInTheDocument()
        expect(screen.getByLabelText(/Occasion/i)).toBeInTheDocument()
    })


    test("shows validation errors when submitting empty form", async () => {
        render(<MyForm />)


        fireEvent.click(screen.getByRole("button", { name: /make your reservation/i }))


        expect(await screen.findByText(/Date Required/i)).toBeInTheDocument()
        expect(await screen.findByText(/Time Required/i)).toBeInTheDocument()
        expect(await screen.findByText(/Guest Selection Required/i)).toBeInTheDocument()
        expect(await screen.findByText(/Please Select One Occassion/i)).toBeInTheDocument()
    })


    test("accepts input values", () => {
        render(<MyForm />)

        const dateInput = screen.getByLabelText(/Date/i)
        fireEvent.change(dateInput, { target: { value: "2025-08-24" } })
        expect(dateInput.value).toBe("2025-08-24")

        const guestsInput = screen.getByLabelText(/number of guests/i)
        fireEvent.change(guestsInput, { target: { value: "3" } })
        expect(guestsInput.value).toBe("3")
    })
})