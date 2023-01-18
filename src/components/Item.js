

function Item(props) {
    return(
        <li>
            {props.texto}
            {props.home}
            {props.sobre}
            {props.contato}
            {props.ativo === true}
        </li>
    )
}
export default Item