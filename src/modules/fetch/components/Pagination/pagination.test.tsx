import type React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import { describe, it, expect, vi } from "vitest"
import Pagination from "./index"
import usePage from "../../../../common/hooks/usePage"

// Mock the usePage hook
vi.mock("../../../../common/hooks/usePage")

// Mock the Button component
vi.mock("../../../../common/components/Button", () => ({
  default: ({ children, ...props }: React.PropsWithChildren<any>) => <button {...props}>{children}</button>,
}))

describe("Pagination", () => {
  it("renders the component with Previous and Next buttons", () => {
    vi.mocked(usePage).mockReturnValue({ page: 1, setPage: vi.fn(), finalPage: false })

    render(<Pagination />)

    expect(screen.getByText("Previous")).toBeInTheDocument()
    expect(screen.getByText("Next")).toBeInTheDocument()
  })

  it("disables Previous button when on the first page", () => {
    vi.mocked(usePage).mockReturnValue({ page: 0, setPage: vi.fn(), finalPage: false })

    render(<Pagination />)

    expect(screen.getByText("Previous")).toBeDisabled()
    expect(screen.getByText("Next")).not.toBeDisabled()
  })

  it("disables Next button when on the final page", () => {
    vi.mocked(usePage).mockReturnValue({ page: 5, setPage: vi.fn(), finalPage: true })

    render(<Pagination />)

    expect(screen.getByText("Previous")).not.toBeDisabled()
    expect(screen.getByText("Next")).toBeDisabled()
  })

  it("calls setPage with correct value when Previous button is clicked", () => {
    const setPageMock = vi.fn()
    vi.mocked(usePage).mockReturnValue({ page: 2, setPage: setPageMock, finalPage: false })

    render(<Pagination />)

    fireEvent.click(screen.getByText("Previous"))
    expect(setPageMock).toHaveBeenCalledWith(1)
  })

  it("calls setPage with correct value when Next button is clicked", () => {
    const setPageMock = vi.fn()
    vi.mocked(usePage).mockReturnValue({ page: 2, setPage: setPageMock, finalPage: false })

    render(<Pagination />)

    fireEvent.click(screen.getByText("Next"))
    expect(setPageMock).toHaveBeenCalledWith(3)
  })
})

