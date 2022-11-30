import './index.css'

const TabItem = props => {
  const {tabDetails, onChangeTab} = props
  const {tabId, displayText} = tabDetails

  const onClickTab = () => {
    onChangeTab(tabId)
  }

  return (
    <li className="list-item">
      <button type="button" onClick={onClickTab}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
