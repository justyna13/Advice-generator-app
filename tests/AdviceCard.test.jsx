import React from 'react'
import { beforeEach, describe, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { AdviceCard } from "../src/AdviceCard";

describe("AdviceCard", () => {
  beforeEach(() => {
    render(<AdviceCard />)
  })
  it("renders properly", () => {
    const cardTitle = screen.getByText(/ADVICE #/i);

    expect(cardTitle).toBeInTheDocument();
  })
})
