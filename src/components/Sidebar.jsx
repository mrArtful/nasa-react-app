export default function Sidebar({handleToggleModal, data}) {
  return (
    <div className="sidebar">
      <div className="bg-overlay"></div>
      <div className="sidebar-contents">
        <h2>{ data?.title }</h2>
        <div className="description-container">
            <p className="description-title">{ data?.date }</p>
            <p>{ data?.explanation }</p>
        </div>
        <button onClick={handleToggleModal}><i className="fa-solid fa-arrow-right"></i></button>
      </div>
    </div>
  );
}
