const express = require("express")
const cors = require("cors")
const app = express();
const { logger } = require('./middlewares')

app.use(logger)
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(cors())

// routers 
const indexRouter = require('./routes/index')
const carRouter = require('./routes/crud_car')
const userRouter = require('./routes/user')
const payment = require('./routes/payment')
// const commentRouter = require('./routes/comment')

// Statics
app.use(express.static('static'))
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


app.use(indexRouter.router)
app.use(carRouter.router)
app.use(userRouter.router)
app.use(payment.router)
// app.use(postRouter.router)
// app.use(commentRouter.router)

app.listen(3000, () => {
  console.log(`Example app listening at http://localhost:3000`)
})