const ConfimrationPop = () =>{
    return(
        <>
            <div className="modal fade" id="logoutModal" tabIndex="-1" aria-labelledby="logoutModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="logoutModalLabel">Confirm Logout</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        Are you sure you want to logout?
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">No</button>
        <button type="button" className="btn btn-primary" onClick={handleLogout}>Yes</button>
      </div>
    </div>
  </div>
</div>

        </>
    )
};export default ConfimrationPop;