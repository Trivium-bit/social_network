import { useState } from 'react';
import styles from './paginator.module.css';
import cn from "classnames";

type PropsType = {
    totalItemsCount: number
    pageSize: number
    currentPage: number
    portionSize: number
    onPageChanged: (pageNumber: number) => void
}

export const Paginator = ({ totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10, ...props }: PropsType) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages = [];
    for (let i = 0; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNuber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNuber = portionNumber * portionSize;

    return <div className={styles.paginator}>
        {portionNumber > 1 && <button onClick={() => { setPortionNumber(portionNumber - 1) }}>prev</button>}
        {pages
            .filter(p => p >= leftPortionPageNuber && p <= rightPortionPageNuber)
            .map((p) => {
                return <span className={cn({ [styles.selectedPage]: currentPage === p }, styles.pageNuber)}
                    key={p}
                    onClick={(e) => {
                        onPageChanged(p)
                    }}>{p}</span>
            })}
        {portionCount > portionNumber &&
            <button onClick={() => { setPortionNumber(portionNumber + 1) }}>next</button>}
    </div>

}

export default Paginator