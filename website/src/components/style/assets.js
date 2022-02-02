import * as C from './styled.js'

export const RoundedDeleteIcon = (props) => (
    <C.Rounded onClick={props.onClick}>
        <button> <C.RemoveIcon /> </button>
    </C.Rounded>
)

export const RoundedEditIcon = (props) => (
    <C.Rounded onClick={props.onClick}>
        <button> <C.EditIcon /> </button>
    </C.Rounded>
)
