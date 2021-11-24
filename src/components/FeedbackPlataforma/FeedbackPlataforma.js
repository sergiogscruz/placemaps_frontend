import './FeedbackPlataforma.css'

export default function FeedbackPlataforma(props) {
    const style = {
        background: `url(${props.srcimg}) no-repeat`,
        backgroundSize: "cover",
        backgroundPosition: "center"
    }
    return (
        <>
            <div className="d-flex bg-feedbackelemento-centro align-items-center flex-column mt-5">
                <div className="feedback-foto" style={style}></div>

                <div className="p-4 container-textofeedback text-center">
                    <div className="container-nomefeedback">
                        {props.nome}
                    </div>

                    <div className="container-datafeedback mt-2">
                        {props.data}
                    </div>

                    <div className="mt-5">
                        {props.texto}
                    </div>
                </div>
            </div>
        </>
    )
}