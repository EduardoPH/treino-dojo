import styled from "styled-components";


const Thead = styled.thead`
    th {
        padding-left: 10px;
        text-align: left;
        background-color: #3E4243;
    }

    th:nth-child(1) {
        padding-left: 30px;
    }

    tr {
        height: ${props => props.length};
        color: #FFFFFF;
    }
`

const Tbody = styled.tbody`
    tr:hover {
        td * {
            visibility: visible;
        }
    }

    tr td:nth-child(1) {
        padding-left: 30px;
    }

    tr td:nth-last-child(1) {
        padding-right: 30px;
    }
`

const Tr = styled.tr`
    
`

const Td = styled.td`
    padding-left: 10px;
    height: 3.5em;

    width: ${props => props.config && props.config.width ? props.config.width : 'inherit'};

    & :nth-child(1) {
        visibility: ${props => props.config && props.config.visibility ? props.config.visibility : 'visible'};
    }
    
`


export const Text = styled.div`
    font: 1em Roboto;
    text-align: left;
    margin-right: 10px;
`

const Table = styled.table`
    width: ${props => props.size};

    margin: 2em auto;

    border-left: 1px solid #E2E2E2;
    border-right: 1px solid #E2E2E2;
    border-bottom: 1px solid #E2E2E2;
    border-collapse: collapse;

    color: #6D6868;

    tr:nth-child(odd){
        background-color: #F5F5F5;
    }

    tr:nth-child(even) {
        background-color: #FFFFFF;
    }
`


export const Roboto = styled.div`
    font: 1em Roboto;
`

export { Table, Thead, Tr, Td, Tbody }