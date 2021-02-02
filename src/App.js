import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">React js</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-item nav-link active" href="#">accueil <span class="sr-only">(current)</span></a>
          <a class="nav-item nav-link" href="#">Search</a>
          <a class="nav-item nav-link" href="#">More</a>
        </div>
      </div>
    </nav>
    
    
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img id="1" class="d-block w-100" src="https://jelvix.com/wp-content/uploads/2018/01/react-performance.jpg" alt="First slide" />
              </div>
            </div>
          </div>
          <form style={{ margin: 30}}>
            <div class="form-group">
              <label for="exampleFormControlInput1">Facebook </label>
              <input type="facebook" class="form-control" id="exampleFormControlInput1" placeholder="address facebook" />
            </div>
            <div class="form-group">
              <label for="exampleFormControlSelect1">Identifer</label>
              <select class="form-control" id="exampleFormControlSelect1">
                
              </select>
            </div>
            <div class="form-group">
              <label for="exampleFormControlTextarea1">Commentaire</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button type="button" class="btn btn-success">send</button>
          </form>
        </div>
      );
    }
    export default App ;
