import Header from "./Header";
import { render, screen } from "@testing-library/react";
import renderer from 'react-test-renderer';

describe("Header", () => {
  const headers: string[] = ["id", "title", "action"];

  describe("Snapshot Test", () => {
    it("should render with 3 td", () => {
      const component = renderer.create(<Header headers={headers} />);
      expect(component.toJSON()).toMatchSnapshot();
    });

    it("should render without  td", () => {
      const component = renderer.create(<Header headers={[]} />);
      expect(component.toJSON()).toMatchSnapshot();
    });
  });

  describe("Dom Test", () => {
    const table = document.createElement("table");
    const tableContainer = document.body.appendChild(table);

    it("should contains a header with tr, and 3 td", () => {
      const { container } = render(<Header headers={headers} />, {
        container: tableContainer
      });

      expect(container.firstChild).toMatchInlineSnapshot(`
        <thead
          class="sc-hKgJUU BiQOs"
        >
          <tr
            class="sc-dlfnuX bsBZvW"
          >
            <td
              class="sc-bdfBQB bjKVnb"
              role="cell"
            >
              id
            </td>
            <td
              class="sc-bdfBQB bjKVnb"
              role="cell"
            >
              title
            </td>
            <td
              class="sc-bdfBQB bjKVnb"
              role="cell"
            >
              action
            </td>
          </tr>
        </thead>
      `);

      const rowgroup = screen.queryByRole("rowgroup");
      expect(rowgroup).toBeInTheDocument();

      const row = screen.queryByRole("row");
      expect(row).toBeInTheDocument();

      const cells = screen.queryAllByRole("cell");
      expect(cells).toHaveLength(3);

      const id = screen.queryByText("id");
      expect(id).toBeInTheDocument();

      const title = screen.queryByText("title");
      expect(title).toBeInTheDocument();

      const action = screen.queryByText("action");
      expect(action).toBeInTheDocument();
    });

    it("should contains a header without tr and td", () => {
      const { container } = render(<Header headers={[]} />, {
        container: tableContainer
      });

      expect(container.firstChild).toMatchInlineSnapshot(`
        <thead
          class="sc-hKgJUU BiQOs"
        />
      `);

      const row = screen.queryByRole("row");
      expect(row).not.toBeInTheDocument();

      const cells = screen.queryAllByRole("cell");
      expect(cells).toHaveLength(0);

      const id = screen.queryByText("id");
      expect(id).not.toBeInTheDocument();

      const title = screen.queryByText("title");
      expect(title).not.toBeInTheDocument();

      const action = screen.queryByText("action");
      expect(action).not.toBeInTheDocument();
    });
  });
});
