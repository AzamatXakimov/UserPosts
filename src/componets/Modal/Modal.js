import "./Modal.css"
export const Modal = ({title, children, bsTarget}) => {
    return<>
        <div className="modal fade" id={bsTarget} tabindex="-1" aria-hidden="true">
            <div className="modal-dialog settings-modal">
                <div className="modal-content">
                    <div className="modal-header">
                        <h2 className="modal-title fs-5">{title}</h2>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    </>
}