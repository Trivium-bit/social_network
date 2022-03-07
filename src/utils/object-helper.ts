import { UsersType } from "../Redux/users-reducer";

interface IFilters {
    map(arg0: (u: any) => any): UsersType[];
  }

export let updateObjectInArray = (items: IFilters, itemId: number, objPropName: string, newObjProps: {followed: boolean}) => {
    return items.map(u => {
        if (u[objPropName] === itemId) {
            return { ...u, ...newObjProps}
        }
        return u;
    })
}
