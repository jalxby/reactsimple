import React, {FC} from 'react';

type SquaresType = {
    style: string
}

const Squares: FC<SquaresType> = (props) => {
    return (
        <div>
            <span className={props.style}></span>
        </div>
    );
};

export default Squares;