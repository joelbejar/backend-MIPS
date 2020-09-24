const indexRouter = {}

const Routes = {
    dashboardRouter: require('./dashboard.router'),
}

indexRouter.getRoutes = (app) => {
    console.log(process.env.APP_URL)
    app.use(process.env.APP_URL+'/dashboard', Routes.dashboardRouter)
}

module.exports = indexRouter;