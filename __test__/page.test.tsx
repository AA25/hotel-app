/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe('Home', () => {
    it('renders a heading', () => {
        render(<Home />)

        const heading = screen.getByRole("heading", {
            name: "Welcome, please sign in.",
        });

        expect(heading).toBeInTheDocument();
    })
})
