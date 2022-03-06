import { UsersType } from "../Redux/users-reducer";

export let updateObjectInArray = (items: UsersType[], itemId: number, objPropName: number, newObjProps: {followed: true}) => {
    return items.map(u => {
        if (u [objPropName] === itemId) {
            return { ...u, ...newObjProps}
        }
        return u;
    })
}
