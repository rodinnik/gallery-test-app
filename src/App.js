import "./App.scss";
import React from "react";
import Filters from "./components/Filters";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Pagination from "./components/Pagination";
// import Select from "./components/Select";
// import Range from "./components/Range";
// import Select from "./components/Select";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      paintings: [],
      authors: [],
      locations: [],
      textName: "",
      textAuthor: "",
      textLocation: "",
      textCreatedFrom: "",
      textCreatedBefore: "",
      page: 1,
      pageSum: 1,
      theme: localStorage.getItem("app-theme") || "light",
    };

    this.urlDefoult = "https://test-front.framework.team";
  }
  componentDidMount() {
    fetch(this.urlDefoult + "/authors")
      .then((response) => {
        return response.json();
      })
      .then((authors) => {
        this.setState({ authors: authors });
      });
    fetch(this.urlDefoult + "/locations")
      .then((response) => {
        return response.json();
      })
      .then((locations) => {
        this.setState({ locations: locations });
      });
    this.getPaintings();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (
      this.state.page !== prevState.page ||
      this.state.textName !== prevState.textName ||
      this.state.textAuthor !== prevState.textAuthor ||
      this.state.textLocation !== prevState.textLocation ||
      this.state.textCreatedFrom !== prevState.textCreatedFrom ||
      this.state.textCreatedBefore !== prevState.textCreatedBefore
    ) {
      this.getPaintings();
    }
  }

  getPaintings() {
    let pageSum = 1;
    let url = new URL("paintings", this.urlDefoult);
    url.searchParams.set("_limit", 12);
    url.searchParams.set("_page", this.state.page);

    if (this.state.textAuthor !== "") {
      let authorId = this.state.authors.find(
        (author) => author.name === this.state.textAuthor
      ).id;
      url.searchParams.set("authorId", authorId);
    }
    if (this.state.textLocation !== "") {
      let locationId = this.state.locations.find(
        (location) => location.location === this.state.textLocation
      ).id;
      url.searchParams.set("locationId", locationId);
    }

    if (this.state.textName !== "") {
      url.searchParams.set("name_like", this.state.textName);
    }
    if (this.state.textCreatedFrom !== "") {
      url.searchParams.set("created_gte", this.state.textCreatedFrom);
    }
    if (this.state.textCreatedBefore !== "") {
      url.searchParams.set("created_lte", this.state.textCreatedBefore);
    }

    fetch(url)
      .then((response) => {
        pageSum = Math.ceil(response.headers.get("X-Total-Count") / 12);
        return response.json();
      })
      .then((paintings) => {
        this.setState({ paintings: paintings, pageSum: pageSum });
      });
  }

  render() {
    document.documentElement.setAttribute("data-theme", this.state.theme);
    localStorage.setItem("app-theme", this.state.theme);
    return (
      <div className="main">
        <Header
          themeChange={(e) => {
            e.preventDefault();
            this.state.theme === "light"
              ? this.setState({ theme: "dark" })
              : this.setState({ theme: "light" });
          }}
          theme={this.state.theme}
        />
        <Filters
          authors={this.state.authors}
          locations={this.state.locations}
          onChangeTextFrom={(e) => {
            this.setState({ textCreatedFrom: e.target.value.trim() });
          }}
          onChangeTextBefore={(e) => {
            this.setState({ textCreatedBefore: e.target.value.trim() });
          }}
          onChangeText={(e) => {
            this.setState({ textName: e.target.value.trim() });
          }}
          onClickAuthor={(itemAuthor) => {
            this.setState({ textAuthor: itemAuthor });
          }}
          onClickLocation={(itemLocation) => {
            this.setState({ textLocation: itemLocation });
          }}
        />
        <Gallery
          paintings={this.state.paintings}
          authors={this.state.authors}
          locations={this.state.locations}
        />
        <Pagination
            page={this.state.page}
            pageSum={this.state.pageSum}
            nextPage={(e) => {
              e.preventDefault();
              if (this.state.page !== this.state.pageSum) {
                this.setState({ page: this.state.page + 1 });
              }
            }}
            prevPage={(e) => {
              e.preventDefault();
              if (this.state.page !== 1) {
                this.setState({ page: this.state.page - 1 });
              }
            }}
            setPage={(e, pageNumber) => {
              e.preventDefault();
              this.setState({ page: pageNumber });
            }}
          />
      </div>
    );
  }
}

export default App;
