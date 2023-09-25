import React from 'react'
import { beforeEach, describe, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { AdviceCard } from "../src/AdviceCard";

describe("AdviceCard", () => {
  beforeEach(() => {
    render(<AdviceCard />)
  });

  it("renders properly", () => {
    const cardTitle = screen.getByText(/ADVICE #/i);
    expect(cardTitle).toBeInTheDocument();
  });

  it("check if id is displayed in title", async () => {
    const cardTitleWithId = await screen.findByText("ADVICE #197");
    expect(cardTitleWithId).toBeInTheDocument();
  });

  it("check if advice is displayed", async () => {
    // wait to load response - it can be done better
    await screen.findByText("ADVICE #197");

    const h2Elem = screen.getByRole("heading", { level: 2 });
    expect(h2Elem).toBeInTheDocument();
    expect(h2Elem).toHaveTextContent(/Look people in the eye./i)
  })
})
