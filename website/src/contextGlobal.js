import {createContext, useContext, useReducer} from 'react'

const Reducer = (state, action) => {
    switch (action.type) {
        case 'setEvento': return {...state, evento: action.evento}
        case 'setTitulo': return {...state, atividade: { ...state.atividade, titulo: action.titulo }}
        case 'setDesc': return {...state, atividade: {...state.atividade, desc: action.desc}}
        case 'editAtividade': return { ...state, atividade: action.atividade };
        case 'novoAtividade': return { ...initialState };
        case 'setListagem': return { ...state, listagem: action.listagem };

        case "removeAtividade":
            return {
                ...state, listagem: state.listagem.filter((i, x) => x !== action.x)
        }
        default:
            break;
    }
}

const initialState = {
    Event: 'Novo',
    atividade: {
        titulo: '',
        desc: '',
        consluido: false
    },
    listagem: []
}

const EventContext = createContext();

export default function EventContextProvider(props){
    const [eventstate, setEventState] = useReducer(Reducer, initialState)

    return(
        <EventContext.Provider value={{eventstate, setEventState}}> {props.children} </EventContext.Provider>
    )
}



export function UseeventContext(){
    const context = useContext(EventContext)
    
    const {eventstate, setEventState} = context

    return {
        eventstate,
        setTitulo: (titulo) => setEventState({type: 'setTitulo', titulo}),
        setDesc: (desc) => setEventState({type: 'setDesc', desc}),
        setEvento: (evento) => setEventState({type: 'setEvento', evento}),
        setListagem: (listagem) => setEventState({ type: 'setListagem', listagem }),
        novoAtividade: () => setEventState({type: 'novoAtividade'}),
        editAtividade: (atividade) => setEventState({type: 'editAtividade', atividade}),
        removeAtividade: ( index ) => setEventState({ type: 'removeAtividade', index })
    }
}