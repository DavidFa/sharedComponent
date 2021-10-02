import TableCell from "./TableCell";
import { render, screen } from "@testing-library/react";
import renderer from 'react-test-renderer';

describe("TableCell", () => {
  describe("Snapshot Test", () => {
    it('should render with checkbox', () => {
      const component = renderer.create(
        <TableCell selectable={true} postId={1}>
          Table Cell Data
        </TableCell>
      )
      expect(component.toJSON()).toMatchSnapshot();
    })

    it('should render without checkbox', () => {
      const component = renderer.create(
        <TableCell postId={1}>
          Table Cell Data
        </TableCell>
      )
      expect(component.toJSON()).toMatchSnapshot();
    })
  });



  describe("Dom Test", () => {
    const table = document.createElement("table");
    const tbody = document.createElement("tbody");
    const tr = document.createElement("tr");
    const tableContainer = document.body.appendChild(table).appendChild(tbody).appendChild(tr);

    it("should render with checkbox", () => {
      const { container } = render(
        <TableCell selectable={true} postId={1}>
          Table Cell Data
        </TableCell>,
        {
          container: tableContainer
        }
      );

      const td = screen.queryByRole("cell");
      expect(td).toBeInTheDocument();

      expect(container.firstChild).toMatchInlineSnapshot(`
          <td
            class="sc-bdfBQB bjKVnb"
            role="cell"
          >
            <input
              class="sc-gsTEea"
              type="checkbox"
              value="1"
            />
          </td>
        `);
    });

    it("should render with checkbox", () => {
      const { container } = render(
        <TableCell selectable={true} postId={1}>
          Table Cell Data
        </TableCell>,
        {
          container: tableContainer
        }
      );
      
      const checkbox = screen.queryByRole("checkbox");
      expect(checkbox).toBeInTheDocument();

      expect(container.firstChild).toMatchInlineSnapshot(`
        <td
          class="sc-bdfBQB bjKVnb"
          role="cell"
        >
          <input
            class="sc-gsTEea"
            type="checkbox"
            value="1"
          />
        </td>
      `);
    });

    it("should render with checkbox", () => {
      const { container } = render(
        <TableCell postId={1}>Table Cell Data</TableCell>,
        {
          container: tableContainer
        }
      );

      const checkbox = screen.queryByRole("checkbox");
      expect(checkbox).not.toBeInTheDocument();

      expect(container.firstChild).toMatchInlineSnapshot(`
        <td
          class="sc-bdfBQB bjKVnb"
          role="cell"
        >
          Table Cell Data
        </td>
      `);
    });
  });
});
