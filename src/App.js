import { Provider } from "react-redux";
import store from "./redux";
import { BrowserRouter } from "react-router-dom";
import Header from "./companents/Header";
import Footer from "./companents/Footer";
import BookingForm from "./companents/BookingForm";
import HomePartners from "./companents/HomePartners";
import Covid19 from "./companents/Covid19";
import CustomerReviews from "./companents/HomePartners/CustomerReviews";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Header />
          <BookingForm/>
          <HomePartners/>
          <Covid19/>
          <CustomerReviews/>
          <Footer />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
