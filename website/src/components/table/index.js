import { Roboto, Table, Thead, Tbody, Td } from "./styled";

export default function TableAdmin(props) {
    let { columns, rows } = props;

    return (
        <Table size={props.size}>
            
            <Thead length={props.length}>
                <tr>
                    {columns.map((c,idxCol) => 
                        <th key={idxCol}>
                            <Roboto weight="5"> {c.title} </Roboto>
                        </th>
                    )}
                </tr>
            </Thead>

            <Tbody>

                {!props.autoGenerate &&
                    props.children
                }

                {props.autoGenerate === true &&
                    rows.map((row,idxRow) => 
                        <tr key={idxRow}>

                            {row.map((cell, ic) => 
                                <Td key={ic + '.' + idxRow}
                                    config={cell}
                                    onClick={() => cell.onClick ? cell.onClick(row) : null} >
                                    
                                    <Roboto> {cell.value} </Roboto>
                                </Td>
                            )}

                        </tr>    
                )}
            </Tbody>

        </Table>
    )
}