import FetchTest from './FetchTest';
import { render, screen, fireEvent, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

describe('FetchTest', () => {
    beforeAll(() => jest.spyOn(window, 'fetch'))

    afterAll(() => jest.clearAllMocks());

    it('should fetch a post with given postId', async () => {
        window.fetch.mockResolvedValueOnce({
            ok: true,
            json: async () => ({ id: 1, title: "1", body: "1" }),
        })
        render(<FetchTest postId={1} />);

        const span = screen.getByText(/FetchTest/i);
        expect(span).toBeInTheDocument();

        const button = screen.getByRole('button', { name: /Fetch/i });
        expect(button).toBeInTheDocument();
        // userEvent.click(button)
        act(() => {
            fireEvent.click(button);
        })

        const title = await screen.findByTestId('post-title');
        expect(title).toBeInTheDocument();
    })

    it('should fail to fetch a post with given postId', async () => {
        window.fetch.mockResolvedValueOnce({
            ok: false,
            json: async () => ({ id: 1, title: "1", body: "1" }),
        })
        render(<FetchTest postId={-1} />);

        const span = screen.getByText(/FetchTest/i);
        expect(span).toBeInTheDocument();

        const button = screen.getByRole('button', { name: /Fetch/i });
        expect(button).toBeInTheDocument();
        userEvent.click(button)
        // act(() => {
        //     fireEvent.click(button);
        // })

        const title = await screen.queryByTestId('post-title');
        expect(title).not.toBeInTheDocument();
    })
})