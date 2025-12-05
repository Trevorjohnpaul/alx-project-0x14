# CineSeek CineSeek Movie Discovery Application.

The current movie discovery web application created using Next.js, TypeScript, and Tailwind CSS. It enables them to navigate films of the **MoviesDatabase API, read more about a specific movie, filter by year or genre, and see page-based results. The project is shown to integrate API, created reusable React components, responsive, and correctly typed with TypeScript.

---

## API Overview

MoviesDatabase API is the API used by CineSeek to retrieve data about movies. The API offers access points to get movies, sort them by year and genre, and get detailed information about the movies. With the API, you can:

- Find movie titles and information.
Filter movies by genres or year.
- Paginate through documentatively large sets of results.
- Search with the help of search functionality.

---

## Version

Application: Moviesdatabase API Version v1 (found at the official API site)

---

## Available Endpoints

| Endpoint | Description |

| `/titles` | Fetch a list of movies. Provides filters such as year and genre and pagination.

There are other endpoints that can be investigated using the API documentation of movie details extended.

---

## Request and Response Format

**Request: (POST through server API route):**

```json
POST /api/fetch-movies
Content-Type: application/json

{
"year": 2024,
"genre": "Comedy",
"page": 1
}
