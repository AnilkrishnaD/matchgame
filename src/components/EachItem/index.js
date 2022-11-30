import './index.css'

const EachItem = props => {
  const {itemDetails, onClickEachItem} = props
  const {id, thumbnailUrl} = itemDetails

  const onClickImage = () => {
    onClickEachItem(id)
  }

  return (
    <li className="list-item">
      <button type="button" onClick={onClickImage}>
        <img src={thumbnailUrl} alt="thumbnail" className="image" />
      </button>
    </li>
  )
}

export default EachItem
