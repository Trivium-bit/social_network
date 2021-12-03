export const requiredField = value => {
    if (value) return undefined;
    return "Field is required"
}

export const maxLength30 = value => {
    if (value.length>30) return "Max length is 30 symbols";
    return undefined
}

export const maxLength50 = (maxLength: number) = value => {
    if (value.length<50) return "Max length is 50 symbols";
    return undefined
}

export {}