import React, {useState} from 'react';
import http from "./http";

export default () => {

    const [descricao, setDescricao] = useState('');
    const [tipo, setTipo] = useState('RECEITA');
    const [valor, setValor] = useState(null);
    const [vencimento, setVencimento] = useState('');


    async function handleSave(){
        await http.post('/registros', buildBody());

        function buildBody(){
            return {
                descricao: descricao,
                tipo: tipo,
                valor: valor,
                vencimento: vencimento
            }
        }
    }

    async function handleCancel() {
        setDescricao('');
        setTipo('RECEITA');
        setValor(0);
        setVencimento('');
    }

    return (
        <div className={'formulario'}>
            <input value={descricao} onChange={e => setDescricao(e.target.value)} className={'input-style'} placeholder={'Descrição'}/>

            <select className={'input-style'} value={tipo} onChange={e => setTipo(e.target.value)}>
                <option value={'RECEITA'}>RECEITA</option>
                <option value={'DESPESA'}>DESPESA</option>
            </select>

            <input value={valor} onChange={e => setValor(Number(e.target.value))} className={'input-style'} placeholder={'Valor'} type={'number'} min={0}/>

            <input value={vencimento} onChange={e => setVencimento(e.target.value)} className={'input-style'} placeholder={'Vencimento'}/>

            <div className={'actions'}>
                <button onClick={handleSave} className={'salvar'}>Salvar</button>
                <button onClick={handleCancel} className={'cancelar'}>Cancelar</button>
            </div>
        </div>
    )
}
