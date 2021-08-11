export function isAniValid(ani: string): boolean {
    if (ani.length !== 10 || isNaN(Number(ani))) {
        return false;
    } else {
        return true;
    }
}
