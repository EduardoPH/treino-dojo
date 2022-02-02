import styled from "styled-components"

export const Rounded = styled.div`
    display: inline-block;

    button {
        background-color: #565656;
        border: 0px;
        border-radius: 100%;
        width: 38px;
        height: 38px;
        cursor: pointer;
    }

    img, svg {
        width: 18px;
        height: 18px;
        cursor: pointer;
    }
`

export const RemoveIcon = () => {
    return (
        <img src="/assets/images/remove.png" alt="" />
    )
}

export const EditIcon = () => {
    return(
        <img src="/assets/images/edit.png" alt=""/>
    )
}