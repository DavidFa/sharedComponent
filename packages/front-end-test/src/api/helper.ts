export const HOST_URL = "https://jsonplaceholder.typicode.com12222";

interface ApiError {
    code: number;
    error: string;
}

const isApiError = (x: any): x is ApiError => {
    return typeof x.code === 'number';
};

// generator function sync supar
export const PostApi = async <T, R>(url: string, post: T): Promise<R> => {
    try {
        const response = await fetch(`${HOST_URL}${url}`, { method: "POST", body: JSON.stringify(post) });
        if (!response.ok) {
            // Return the known error for future handling
            // return rejectWithValue({ errorMessage: "error" } as MyKnownError)
            throw new Error("error");
        }
        const data = (await response.json());
        return data;
    } catch (e) {
        throw e;
    }
}

