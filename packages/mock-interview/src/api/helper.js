
export const cats = [
    { id: 1, color: 'white', age: 1 },
    { id: 2, color: 'block', age: 2 },
    { id: 3, color: 'white', age: 3 },
]
export const mockFetchCats = (isSuccess = true) => {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            if (isSuccess) {
                return resolve({
                    ok: true,
                    code: 200,
                    json: async () => cats
                });
            } else {
                reject("Netcork Error");
            }
        }, 1000);

    })
}