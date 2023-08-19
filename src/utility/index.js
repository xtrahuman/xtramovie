export const authorization =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMjk4ZjU5NTJkOTVkNWY0NjIwODEyNTI5OTVhOGU4OSIsInN1YiI6IjY0OWEzNjM4ZDM1ZGVhMDEyYzE2YTQxYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VWiYH-cTeC1Iq7A-iEzg0p29ZacQqx2Bk2zlzoa0whs";

export const userprofile = JSON.parse(localStorage.getItem("user"));
export const url = "https://api.themoviedb.org";

export const localBackendUrl = "http://127.0.0.1:3003";

export const imageUrl = "https://image.tmdb.org";

export const nextPage = (total_pages, page_no = 1) => {
  if (page_no < total_pages) {
    page_no += 1;
  }
  return page_no;
};

export const prevPage = (total_pages, page_no = 1) => {
  if (page_no > 1 && page_no <= total_pages) {
    page_no -= 1;
  }
  return page_no;
};


export const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };
