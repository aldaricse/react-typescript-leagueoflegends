const Loading = ({ full = false }: { full?: boolean }): JSX.Element => {
  return (
    <div className={`loading-wrapper ${full ? 'full' : ''}`}>
      <div className="loading">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  )
}

export default Loading