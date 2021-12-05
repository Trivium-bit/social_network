
type Validators = (value: string) => string | undefined

export const required: Validators = value => {
    if (value) return undefined;
    return "Field is required"
}

export const maxLengthCreator = (maxLength: number): Validators => (value: string) => {
    if (value.length > maxLength) return `Max length is ${maxLength} symbols`;
    return undefined
}
