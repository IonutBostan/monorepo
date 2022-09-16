import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App test", () => {
  it("Should have Turborepo in the title ", () => {
    render(<App />);

    expect(screen.getByText(/Turborepo/i)).toBeDefined();
  });
});
