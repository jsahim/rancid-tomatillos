import React, {Component} from "react";
import "./MovieFeature.css";

class MovieFeature extends Component {
  constructor ({movie}) {
    super();
    this.state = {
      clickedMovie: movie
    }
  }

  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };

  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div className="modal micromodal-slide" id="modal">
        <div className="content">{this.props.children}</div>
        <div className="actions">
          <button className="modal-btn" onClick={this.onClose}>Close</button>
          {/* <div className="modal-overlay" tabindex="-1" data-micromodal-close>
            <div className="modal-container" role="dialog" aria-modal="true" aria-labelledby="modal-title">
              <header className="modal-header">
                <h2 className="modal-title" id="modalTitle">CONFIRMATION</h2>
              </header>
              <main className="modal-content" id="modalContent">
              </main>
              <footer className="modal-footer">
                <button className="modal-btn button" data-micromodal-close aria-label="Close this dialog window" id="modalClose">Close</button>
              </footer>
            </div>
          </div> */}
        </div>
      </div>
    );
  }
}

export default MovieFeature;