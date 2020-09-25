1. Define actions
   1. Search
   2. Filter => Set Active Category
   3. Get Movies
   4. Get Categories
   5. Get Movie Details
   6. Get Bookmarked Movies
   7. Delete Bookmarked Movies
   8. Bookmark Movie
2. Create reducers

   1. categories
   2. movies

3. Create store based on reducers
   1. state = {categories (catReducer), movies (moviesReducer)}
   2. store with reducers
4. Wire the app with the Provider
   1. Provider => store
5. Clean up the UI
   1. useSelector + useDispatch where needed
