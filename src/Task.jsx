function Task() {
  const participants = [
    { id: 1, name: 'Naveen', initial: 'N', color: '#d4edda', textColor: '#155724', muted: true, active: true },
    { id: 2, name: 'Manju', initial: 'M', color: '#f8d7da', textColor: '#721c24', muted: true, active: false },
    { id: 3, name: 'Ani', initial: 'A', color: '#d1ecf1', textColor: '#0c5460', muted: true, active: false }
  ];

  return (
    <div className="meeting-container">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="top-left">
          {/* <span className="time">07:52</span> */}
          <span className="meeting-title">HTML,CSS,JS</span>
        </div>
        <div className="top-center">
          <div className="control-item">
            <span className="icon">💬</span>
            <span>Chat</span>
          </div>
          <div className="control-item">
            <span className="icon">👥</span>
            <span>People</span>
            <span className="badge">3</span>
          </div>
          <div className="control-item">
            <span className="icon">✋</span>
            <span>Raise</span>
          </div>
          <div className="control-item">
            <span className="icon">😊</span>
            <span>React</span>
          </div>
          <div className="control-item">
            <span className="icon">⊞</span>
            <span>View</span>
          </div>
          <div className="control-item">
            <span className="icon">📝</span>
            <span>Notes</span>
          </div>
          <div className="control-item">
            <span className="icon">⋯</span>
            <span>More</span>
          </div>
        </div>
        <div className="top-right">
          <div className="control-item">
            <span className="icon">📷</span>
            <span>Camera</span>
          </div>
          <div className="control-item">
            <span className="icon">🎤</span>
            <span>Mic</span>
          </div>
          <div className="control-item share">
            <span className="icon">↗</span>
            <span>Share</span>
          </div>
          <button className="leave-btn">
            <span className="icon">📞</span>
            <span>Leave</span>
          </button>
          <div className="org-name">
            <span>Cravita Technologies</span>
            <div className="avatar">T</div>
          </div>
        </div>
      </div>

      {/* Video Grid */}
      <div className="video-grid">
        {participants.map((p, index) => (
          <div key={p.id} className={`video-tile ${p.active ? 'active' : ''} ${index === 2 ? 'center-tile' : ''}`}>
            <div className="initial-circle" style={{ backgroundColor: p.color, color: p.textColor }}>
              {p.initial}
            </div>
            <div className="name-tag">
              <span className="audio-icon">🔊</span>
              <span>{p.name}</span>
              {p.muted && <span className="icon">🔇</span>}
              <span className="icon">⋯</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Task;