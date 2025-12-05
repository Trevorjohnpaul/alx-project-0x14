# CineSeek - Movie Discovery Application

CineSeek is a modern movie discovery web application built with **Next.js**, **TypeScript**, and **Tailwind CSS**. It allows users to browse movies from the **MoviesDatabase API**, view details, and filter movies by year or genre. The project focuses on building a responsive, maintainable, and fully functional web application with proper API integration.

---

## API Overview

The application uses the **MoviesDatabase API** to fetch movie data. Users can:

- Browse movies with pagination
- Filter movies by **year** and **genre**
- View basic movie information including title, release year, and poster image

The API provides a structured JSON response for movies and supports filtering and sorting features to enhance user experience.

---

## API Version

The API version used is: **v1** (as per MoviesDatabase documentation)

---

## Available Endpoints

| Endpoint             | Description                                     |
|---------------------|-------------------------------------------------|
| `/titles`            | Fetches a list of movies, supports pagination |
| `/titles/:id`        | Fetches detailed information for a specific movie |
| Supports query params| `year`, `genre`, `sort`, `limit`, `page`      |

---

## Request and Response Format

**Request Example (POST via server-side API route):**
```json
{
  "page": 1,
  "year": 2024,
  "genre": "Comedy"
}
