import Row from "./Row";
import { screen, render } from "@testing-library/react";
import renderer from 'react-test-renderer';

describe("Row", () => {
    describe("Snapshot Test", () => {
        it('should render with td', () => {
            const component = renderer.create(
                <Row>
                <td>Table Cell Data</td>
              </Row>
            )
            expect(component.toJSON()).toMatchSnapshot();
        })
    });


  describe("Dom Test", () => {
    const table = document.createElement("table");
    const tbody = document.createElement("tbody");
    const tableContainer = document.body.appendChild(table).appendChild(tbody);

    it("should render with td", () => {
      const { container } = render(
        <Row>
          <td>Table Cell Data</td>
        </Row>,
        {
          container: tableContainer,
        }
      );

      const row = screen.queryByRole("row");
      expect(row).toBeInTheDocument();

      expect(container.firstChild).toMatchInlineSnapshot(`
        <tr
          class="sc-bdfBQB bGyyoG"
        >
          <td>
            Table Cell Data
          </td>
        </tr>
      `);
    });
  });
});
