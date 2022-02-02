import styled from 'styled-components'

const Container = styled.div`

    .form {
        margin: auto;
        width: 20%;
    }

    .list{
        margin-top: 3em;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align:center;
    }
`

const Title = styled.div`
    font-size: 3em;
    font-weight: bolder;
    font-style: Roboto;
    width: 100%;
    text-align: center;
`

const MiniTitle = styled.div`
    font-size: 2em;
    font-style: Roboto;
`

const Input = styled.input`
    width: 80%;
    height: 2.5em;

    margin: 1em;

    font: 400 1em Roboto;
    color: #615858;
    
    border-radius: 5px;
    border: 1px solid rgba(168, 168, 168, 1);
    outline: none;

    padding: 0em .5em;
`

const Label = styled.label`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
`

export {Container, Title, Input, Label, MiniTitle}

