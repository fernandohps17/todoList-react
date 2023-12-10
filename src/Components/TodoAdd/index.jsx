export const TodoAdd = () => {

    const onFormSubmit = e => {
        e.preventDefault()
    }

    // minuto 46 segundo 09

    return (
        <form onSubmit={onFormSubmit}>
            <input type="text" className="input-add" name="description" value="Aprender React" placeholder="¿Qué hay que hacer?" />
            <button className="btn-add" type="submit">Agregar</button>
        </form>
    )

}