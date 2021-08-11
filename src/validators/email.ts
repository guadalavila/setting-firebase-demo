export function isEmailValid(email: string): boolean {
    const regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const result = regEx.test(email);
    return result;
}
