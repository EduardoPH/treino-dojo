import * as C from './styled.js'
import { useEffect } from 'react'
import Table from '../../components/table/index.js'
import { UseeventContext } from '../../contextGlobal.js'
import * as A from '../../components/table/styled.js'
import * as Y from '../../components/style/assets.js'

export default function App() {


    const list = [
        { id: 1, titulo: 'Balé', desc: 'aula', concluido: false },
        { id: 2, titulo: 'd', desc: 'aula', concluido: false },
        { id: 3, titulo: 'Balddé', desc: 'aula', concluido: false },
        { id: 4, titulo: 'ffg', desc: 'aula', concluido: false },
        { id: 5, titulo: 'gg', desc: 'aula', concluido: false },
        { id: 6, titulo: 'nn', desc: 'aula', concluido: false }
    ]

    const { eventstate: { atividade: { titulo }, listagem },
        setTitulo,
        removeAtividade,
        setListagem
    } = UseeventContext()

    function changeDesc( value, title, desc ) {
        for (var i in listagem) {
          if (listagem[i].value === value) {
             let r = listagem[i].desc = desc;
             listagem[i].titulo = title;
             console.log(r)
             setListagem(r)
             break;
          }
        }

     }


    

    const onRemoveAtividade = (x) => setListagem(listagem.filter((i) => i.id !== x))

    useEffect(() => {
        setListagem(list)
    }, [])

    return (
        <div>
            <C.Container>
                <C.Title> Atividades </C.Title>

                <div className="form">
                    <C.Label>
                        <C.MiniTitle> Titulo </C.MiniTitle>
                        <C.Input onChange={e => setTitulo(e.target.value)} />
                    </C.Label>

                    <C.Label>
                        <C.MiniTitle> Descrição </C.MiniTitle>
                        <C.Input />
                    </C.Label>
                </div>

                <div className="list">
                    <C.MiniTitle> Listagem </C.MiniTitle>
                    <Table
                        length="3em"
                        size="40%"
                        columns={[
                            { title: 'Titulo' },
                            { title: "Descrição" },
                            { title: '' },
                            { title: '' }
                        ]}>

                        {listagem.map((item, x) =>
                            <A.Tr key={x}>
                                <A.Td> <A.Text> {item.titulo} </A.Text>  </A.Td>
                                <A.Td> <A.Text> {item.desc} </A.Text>  </A.Td>
                                <A.Td config={{ visibility: 'hidden', width: '1em' }} onClick={() => changeDesc(x, 'teste', 'teste')}>
                                    <Y.RoundedEditIcon />
                                </A.Td>

                                <A.Td config={{ visibility: 'hidden', width: '1em' }}
                                    onClick={e => onRemoveAtividade(item.id)}
                                >
                                    <Y.RoundedDeleteIcon />
                                </A.Td>
                            </A.Tr>
                        )}
                    </Table>
                </div>


            </C.Container>
        </div>
    )
}