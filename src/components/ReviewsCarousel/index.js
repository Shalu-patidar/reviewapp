// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {index: 0}

  showNext = () => {
    const {reviewsList} = this.props
    const lastIndex = reviewsList.length - 1

    this.setState(prevState =>
      prevState.index < lastIndex ? {index: prevState.index + 1} : null,
    )
  }

  showPrev = () => {
    this.setState(prevState =>
      prevState.index > 0 ? {index: prevState.index - 1} : null,
    )
  }

  render() {
    const {index} = this.state
    const {reviewsList} = this.props
    const reviewObj = reviewsList[index]

    return (
      <div className="bg-container">
        <div className="review-body">
          <h1 className="main-heading">Reviews</h1>
          <img
            src={reviewObj.imgUrl}
            alt={reviewObj.username}
            className="profile-image"
          />
          <div className="nav-container">
            <button
              type="button"
              onClick={this.showPrev}
              data-testid="leftArrow"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
              />
            </button>
            <p className="profile-name">{reviewObj.username}</p>
            <button
              type="button"
              data-testid="rightArrow"
              onClick={this.showNext}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
              />
            </button>
          </div>
          <p className="company-name">{reviewObj.companyName}</p>
          <p className="review-text">{reviewObj.description}</p>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
