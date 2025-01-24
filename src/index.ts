import app from "./server"
import { PORT } from "./utils/secrets"

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
