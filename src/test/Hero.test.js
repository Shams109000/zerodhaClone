import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Hero from "../landing_page/home/Hero";

describe("Hero Component", () => {
    // Test for image
    test("renders hero image", () => {
        render(<Hero />);
        const heroImg = screen.getByAltText("hero-img"); // getByAltText to select img by alt attribute
        expect(heroImg).toBeInTheDocument(); // to check if the image is in the document
        expect(heroImg).toHaveAttribute('src', "media/images/homeHero.png"); // to check src attribute value
    });

    // Test for Sign up for free button
    test("renders 'Sign up for free' button", () => {
        render(<Hero />);
        const button = screen.getByRole("button"); // getByRole to select button element
        expect(button).toBeInTheDocument(); // to check if the button is in the document
        expect(button).toHaveClass("btn p-2 fs- mb-2"); // to check button class
    });
});
