export function fileNameHandler(filename) {
    const splitIndex = filename.lastIndexOf('.')
    const name = filename.substr(0, splitIndex)
    const suffix = filename.substr(splitIndex + 1, filename.length)

    return {
        name,
        hash: getUuid(),
        suffix
    }
}

export const getUuid = () => {
    return Number(Math.random().toString().substr(2, 5) + Date.now()).toString(36);
}